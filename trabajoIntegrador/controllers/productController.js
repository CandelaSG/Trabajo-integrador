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
      if (req.session.user == undefined) {
        return res.redirect('/');
      } else {
        return res.render('product-add');
      }      
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
        let relaciones = {
          include: {
              all:true,
              nested: true
          }
          };
        let filtrado = {
        where: [
            {[op.or]: [
              { nombre: { [op.like]: '%' + busqueda + '%' } },
              { descripcion: { [op.like]: '%' + busqueda + '%' } }
            ]}
          ]}
        producto.findAll(filtrado,relaciones)
        .then((result)=>{
            console.log (result)
            console.log(result);
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
      if (req.session.user == undefined) {
        return res.redirect('/');
      } else {
        let productId = req.params.id;
        producto.findByPk(productId)
        .then((resultado) => {
          console.log(resultado)
          return res.render("product-edit", {producto: resultado})
        }).catch((err) => {
          console.log(err)
        });
      }     
    },
    updatePost: (req, res) =>{
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
      let errors = {}
      let id = ''
      if (req.session.user != undefined) {
        id = req.session.user.id
      } 
      
      let coment = {
        texto: req.body.comentario,
        id_producto: req.params.id,
        id_perfil: id 

     }
    if (id == '' ) {
      errors.message = 'Debes loguearte para comentar :)';
      res.locals.errors = errors;
      return res.render(`login`)
    }
    else {
    comentario.create(coment)
     .then( function(resultado){
      let id_producto = req.params.id
         return res.redirect(`/product/id/${id_producto}`)
        })
     .catch (function(err){
        console.log(err)
    });
    }
  }
};
module.exports = productController;