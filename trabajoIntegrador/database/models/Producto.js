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
            //not null?
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
    return Producto;
}

