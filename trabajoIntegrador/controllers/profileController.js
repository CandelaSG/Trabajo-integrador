const db = require('../database/models');
const data = require('../db/data')
const bcrypt = require('bcryptjs');

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
    login : function (req, res) {
        return res.render('login', {
            /* usuarioMain: data.usuario */
        })
    },
    loginPost: function(req, res) {
        let emailBuscar = req.body.email;
        let contraseniaBuscar = req.body.contrasenia;

        let filtrado = {
            where: [
                {email: emailBuscar}
            ]
        }

        db.Perfil.findOne(filtrado)
        .then((result) => {
            if (result != null) {

                let contraseniaCorrecta = bcrypt.compareSync(contraseniaBuscar, result.contrasenia);

                if (contraseniaCorrecta) {
                    return res.send('Existe el mail buscado y su contraseña es correcta');
                } else {
                    return res.send('Existe el mail buscado y pero su contraseña es incorrecta');
                }
               
            } else {
                return res.send('Nooooo Existe el mail buscado');
            }
        }).catch((err) => {
            console.log(err);
        });
    },
    register: function (req, res) {
        return res.render('register', {
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
        
    }
}
module.exports = profileController;