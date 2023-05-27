const data = require('../db/data');
const db = require('../database/models');
const op = db.Sequelize.Op;
const producto = db.Producto;

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
    search: (req,res)=>{
        let busqueda = req.query.search;
        let filtrado = {
        where: [
            {nombre: {[op.like]: "%" + busqueda + "%"} } // Cómo agregar otra condición
        ]}
        producto.findAll(filtrado)
        .then((result)=>{
            console.log (result)
            return res.render("search-results", {
                busqueda: busqueda,
                listaProductos:result
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }
};
module.exports = productController;