const data = require('../db/data')
const productController = {
    show : function (req, res) {
        let id = req.params.id;
        let informacion = []
        for (let i = 1; i < data.productos.length; i++){
            if (id == data.productos[i].id){
                informacion.push(data.productos[i])
            }
        }
        return res.render("product", {
            informacionProducto: informacion, 
        }
    )}
}
module.exports = productController;