const data = require('../db/data')
const db = require('../database/models')
const productos= db.Producto
const mainController = {
    index : function (req, res) {
        productos.findAll()
        .then (function (result) {
            return res.render('index', {
                productosMain: result,
                cantComentarios: data.comentarios.length //cambiar
            })
        })
        .catch(function(err){
            console.log(err)
        })
  /*lo anterior
         return res.render('index', {
            productosMain: data.productos,
            cantComentarios: data.comentarios.length
        }) */
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