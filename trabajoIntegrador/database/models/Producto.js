module.exports = function (sequelize, dataTypes) {
    let alias = 'Producto';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre: {
            type: dataTypes.STRING(200),
        },
        descripcion:{
            type: dataTypes.STRING(500),
        },
        foto:{
            type: dataTypes.STRING(100),
        },
        id_perfil:{
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: true,
        underscored: true,
    };

    const Producto = sequelize.define(alias,cols,config);
    //relaciones

    Producto.associate = function(models) {
        // Un perfil --> muchos productos
        Producto.belongsTo(models.Perfil , {
            as: "perfil",
            foreignKey: "id_perfil"
        }),
        // Un producto --> muchos comentarios
        Producto.hasMany(models.Comentario, {
            as: "comentario",
            foreignKey: "id_producto"
        })
    };

    return Producto;
}

