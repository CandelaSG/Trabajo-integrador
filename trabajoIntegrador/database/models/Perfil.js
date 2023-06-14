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
            type: dataTypes.STRING(500),
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
        tableName: 'perfiles',
        timestamps: true,
        underscored: true,
    };

    const Perfil = sequelize.define(alias,cols,config);
    //relaciones
    Perfil.associate = function(models) {
        // Un perfil --> muchos productos
        Perfil.hasMany(models.Producto, {
            as: "producto",
            foreignKey: "id_perfil"
        }),
        // Un perfil --> muchos comentarios
        Perfil.hasMany(models.Comentario, {
            as: "comentario",
            foreignKey: "id_perfil"
        })
       };
    return Perfil;
}