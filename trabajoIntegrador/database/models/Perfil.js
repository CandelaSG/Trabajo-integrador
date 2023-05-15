module.exports = function (sequelize, dataTypes) {
    let alias = 'Perfil';
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario: {
            type: dataTypes.STRING(200),
        },
        email: {
            type: dataTypes.STRING(200),
        },
        contrasenia: {
            type: dataTypes.STRING(100),
        },
        foto_perfil: {
            type: dataTypes.STRING(100),
        },
        fecha_nacimiento: {
            type: dataTypes.DATE,
        },
        documento: {
            type: dataTypes.INTEGER,
        },
        //foreign key
    };
    let config = {
        tableName: 'perfil',
        timestamps: true,
        underscored: true,
    };

    const Perfil = sequelize.define(alias,cols,config);
    //relaciones
    return Perfil;
}