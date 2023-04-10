const data = require('../db/data');
const productController = {
    show : function (req, res) {
        let id = req.params.id;
        let informacion = []
        for (let i = 0; i < data.productos.length; i++){
            if (id == data.productos[i].id){
                informacion.push(data.productos[i])
            }
        }
        return res.render("product", {
            informacionProducto: informacion, 
            comentarios: data.comentarios

        }
    )},
    add : function (req, res) {
        return res.render('product-add', {
            profile: data.usuario
        })
    },
    search: function (req, res){
        return res.render("search-results", {
            informacionSearch: data.productos, 
            comentariosSearch: data.comentarios

        })
    }
};
module.exports = productController;