const db = require('../database/models');
const data = require('../db/data')
const bcrypt = require('bcryptjs');
const user = db.User;

const profileController= {
    show : function (req, res) {
        return res.render('profile', {
            profile: data.usuario,
            productos: data.productos,
            cantComentarios: data.comentarios.length
        })
    },
    edit : function (req, res) {
        return res.render('profile-edit', {
            /* profile: data.usuario,
            productos: data.productos */
        })
    },
    register: function (req, res) {
        return res.render('register', {
            /* usuarioMain: data.usuario */
        })
    },
    store: function(req, res) {
        let datos = req.body;
        let guardarPerfil = {
            usuario: datos.usuario,
            email: datos.email,
            contrasenia: bcrypt.hashSync(datos.contrasenia, 10),
            /* foto_perfil: datos.foto_perfil, */ // opcional
            fecha_nacimiento: datos.fecha_nacimiento,
            documento: datos.documento,
            remember_token: ""
        };

        db.Perfil.create(guardarPerfil)
        .then(function(result) {
            return res.redirect('/profile/login');
        })
        .catch(function(error) {
            console.log(error);
        });
        
    },
    login : function (req, res) {
        if (req.session.user != undefined) {
            return res.redirect('/');
        } else {
            return res.render('login');
        }
    },
    loginPost: function(req, res) {
        let emailBuscar = req.body.email;
        let contraseniaBuscar = req.body.contrasenia;

        let filtrado = {
            where: [
                {email: emailBuscar}
            ]
        }

        // validacion de email y contraseña
        let errors = {}

        if (emailBuscar == undefined ) {
            errors.message = 'El email está vacío';
            res.locals.errors = errors;
            return res.render('login')

        } else if (contraseniaBuscar.length < 3) {
            errors.message = 'Las contraseñas requieren mas de 3 digitos';
            res.locals.errors = errors;
            return res.render('login')
        } else {
            user.findOne(filtrado)
                .then((result) => {

                    if (result != null) {
                        let claveCorrecta = bcrypt.compareSync(contraseniaBuscar, result.contrasenia);
                        if (claveCorrecta) {

                            req.session.user = result.dataValues;

                            if (req.body.recordarme != undefined) {
                                res.cookie('userId', result.dataValues.id, { maxAge: 1000 * 60 * 100 })
                            }

                            return res.redirect("/")

                        } else {
                            errors.message = 'El email existe, pero la contraseña es incorrecta';
                            res.locals.errors = errors;
                            return res.render('login')
                        }
                    } else {
                        errors.message = 'El email ingresado no existe';
                        res.locals.errors = errors;
                        return res.render('login')
                    }
                }).catch((err) => {
                    console.log(err);
                });   
        }
    }
}
module.exports = profileController;