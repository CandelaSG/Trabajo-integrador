const data = require('../db/data')
const db = require('../database/models')
const productos= db.Producto;
const mainController = {
    index : function (req, res) {
        let relaciones = {
            include: {
                all:true,
                nested: true
            }
            };
        productos.findAll(relaciones)
        .then (function (result) { 
            //return res.send (result)  
            return res.render('index', {
                productosMain: result
            })
        })
        .catch(function(err){
            console.log(err)
        })
    }
};

module.exports = mainController;