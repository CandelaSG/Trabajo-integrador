const data = require('../db/data')
const db = require('../database/models')
const productos= db.Producto;
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
    }
};

module.exports = mainController;