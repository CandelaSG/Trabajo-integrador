const data = require('../db/data');
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
    }
}
module.exports = profileController;