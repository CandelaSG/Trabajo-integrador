const { productos } = require('../db/data');
const data = require('../db/data');
const profileController= {
    show : function (req, res) {
        return res.render('profile', {
            profile: data.usuario,
            productos: data.productos
        })
    }
}
module.exports = profileController;