module.exports = function (sequelize, dataTypes) {
    let alias = 'Comentario';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        texto: {
            type: dataTypes.STRING(500),
        },
        id_producto: {
            type: dataTypes.INTEGER,
        },
        id_perfil: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: 'comentarios',
        timestamps: true,
        underscored: true,
    };

    const Comentario = sequelize.define(alias,cols,config);
    //relaciones
    return Comentario;
};