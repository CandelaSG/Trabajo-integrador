const db = require('../database/models');
const data = require('../db/data')
const bcrypt = require('bcryptjs');
const perfil = db.Perfil;

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
        perfil.findOne(filtrado)
        .then((result) => {

            if (result != null) {
                let contraseniaCorrecta = bcrypt.compareSync(contraseniaBuscar, result.contrasenia)
                if (contraseniaCorrecta) {
                    /* poner en session */
                    
                    req.session.perfil = result.dataValues;

                    if (req.body.rememberme != undefined) {
                        res.cookie('perfilId', result.id, {maxAge: 1000 * 60 * 15});
                    }
                   
                     return res.redirect('/');
                } else {
                    return res.send("Existe el mail y pero la password es incorrecta");
                }
            } else {
                return res.send("Noooo Existe el mail")
            }
            
        }).catch((err) => {
            console.log(err);
        });
    }
}
module.exports = profileController;