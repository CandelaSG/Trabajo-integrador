const data = require('../db/data');
const db = require('../database/models');
const op = db.Sequelize.Op;
const producto = db.Producto;
const comentario = db.Comentario;

const productController = {
    show : function (req, res) {
        let id = req.params.id;
        /* Relaciones */
        let relaciones = {
        include: {
            all:true,
            nested: true
        }
        };
        /* Encontrar el producto con la PK */
        producto.findByPk(id, relaciones)
        .then(function (resultado) {
            return res.render("product", {
            producto: resultado,
            });
        })
        .catch(function (error) {
            console.log(error);
        });
},
    add : function (req, res) {
        return res.render('product-add', {
            profile: data.usuario
        })
    },
    storeProduct: (req,res)=>{
        let infoProducto = req.body;
        let guardarProducto = {
            nombre: infoProducto.nombre,
            descripcion: infoProducto.descripcion,
            foto: infoProducto.foto 
        };

        producto.create(guardarProducto)
        .then((resultado)=>{
            return res.redirect('/profile');
        })
        .catch((err)=>{
            console.log(err);
        })
        ;
    },
    search: (req,res)=>{
        let busqueda = req.query.search;
        let filtrado = {
        where: [
            {nombre: {[op.like]: "%" + busqueda + "%"},
            descripcion: {[op.like]:  "%" + busqueda + "%"}} // Cómo agregar otra condición
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
    },
    formUpdate:(req,res) => {
        let productId = req.params.id;
        producto.findByPk(productId)
        .then((resultado) => {
          console.log(resultado)
          return res.render("product-edit", {producto: resultado})
        }).catch((err) => {
          console.log(err)
        });
        
    },
    update: (req, res) =>{
      let id = req.params.id;
      let infoProd = req.body;
      let filtrado = {
        where : [
          {id: id}
        ]
      }
      producto.update(infoProd, filtrado)
      .then((resultado) => {
        return res.redirect("/product/id/" + id )
      }).catch((err) => {
        console.log(err);
      });
    
    },
    storeComentario: (req, res) =>{
     let coment = {
        texto: req.body.comentario,
        id_producto: req.params.id,
        id_perfil: 1 // cambiar esto por el id del usuario en session

     }

    comentario.create(coment)
     .then( function(resultado){
         return res.redirect(`/product/id/${req.params.id}`)
        })
     .catch (function(err){
        console.log(err)
    });
    }
};
module.exports = productController;