const data = require('../db/data')
const mainController = {
    index : function (req, res) {
        return res.render("index", {
            productosMain: data.productos
        })
    }
};

module.exports = mainController;