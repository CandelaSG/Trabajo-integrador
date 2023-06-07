const db = require('../database/models');
const data = require('../db/data')
const bcrypt = require('bcryptjs');
const perfil = db.Perfil;
const producto = db.Producto;
const comentario = db.Comentario;


const profileController= {
    show : function (req, res) {
        // Cuando no tiene productos FALTA

        /* Relaciones */
        let relaciones = {
        include: {
            all:true,
            nested: true
        }
        };
        /* Productos del usuario */
        let idEnSesion = req.session.user.id;
        console.log(idEnSesion);
        
        let filtrado = {where:[
            {id_perfil : idEnSesion}
        ]}

        /* Buscar los productos del usuario en sesión */
        producto.findAll(filtrado, relaciones)
        .then(function (resultado) {
            return res.render("profile", {
            producto: resultado,
            });
        })
        .catch(function (error) {
            console.log(error);
        });

    },
    edit : function (req, res) {
        return res.render('profile-edit', {
            profile: data.usuario,
            productos: data.productos
        })
    },
    register: function (req, res) {
        return res.render('register', {
            /* usuarioMain: data.usuario */
        })
    },
    store: function(req, res) {
        let errors = {};

        if (req.body.email == "") {
            errors.message = 'El campo de email no puede estar vacío';
            res.locals.errors = errors;
            return res.render('register')

        } else if (req.body.contrasenia == ''){
            errors.message= 'La contraseña no puede ser vacía';
            res.locals.errors = errors;
            return res.render('register')

        }else if (req.body.contrasenia.length <=3){
            errors.message= 'La contraseña debe tener más de 3 caracteres';
            res.locals.errors = errors;
            return res.render('register')

        } else{
            let datos = req.body;
            let foto_perfil_store = '/images/users/perfilDefault.png';
            if (datos.foto_perfil != "") {
                foto_perfil_store = datos.foto_perfil
            }
            
            let guardarPerfil = {
                usuario: datos.usuario,
                email: datos.email,
                contrasenia: bcrypt.hashSync(datos.contrasenia, 10),
                foto_perfil: foto_perfil_store, // opcional
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
    }
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
        
            perfil.findOne(filtrado)
            .then((result) => {

                if (result != null) {
                    let claveCorrecta = bcrypt.compareSync(contraseniaBuscar, result.contrasenia);
                    if (claveCorrecta) {
                        req.session.user = result.dataValues;
                        if (req.body.rememberme != undefined) {
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

        }},
    logout: function(req, res) {
        req.session.destroy();
        if(req.cookies.userId != undefined){
        res.clearCookie('userId')};
        return res.redirect('/profile/login');
    }
}
module.exports = profileController;