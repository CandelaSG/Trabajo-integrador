const data = require('../db/data')
const mainController = {
    index : function (req, res) {
        return res.render('index', {
            productosMain: data.productos
        })
    },
    login : function (req, res) {
        return res.render('login', {
            usuarioMain: data.usuario
        })
    },
    register: function (req, res) {
        return res.render('register', {
            usuarioMain: data.usuario
        })
    }
};

module.exports = mainController;