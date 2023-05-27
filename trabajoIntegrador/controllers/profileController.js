const db = require('../database/models');

const bcrypt = require('bcryptjs');

const profileController= {
    show : function (req, res) {
        return res.render('profile', {
            /* profile: data.usuario,
            productos: data.productos,
            cantComentarios: data.comentarios.length */
        })
    },
    edit : function (req, res) {
        return res.render('profile-edit', {
            /* profile: data.usuario,
            productos: data.productos */
        })
    },
    login : function (req, res) {
        return res.render('login', {
            /* usuarioMain: data.usuario */
        })
    },
    store: function(req, res) {
        let datos = req.body;
        console.log(datos);

        let guardarPerfil = {
            usuario: datos.usuario,
            email: datos.email,
            contrasenia: bcrypt.hashSync(datos.contrasenia, 10),
            foto_perfil: datos.foto_perfil, // opcional
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
    register: function (req, res) {
        return res.render('register', {
            /* usuarioMain: data.usuario */
        })
    }
}
module.exports = profileController;