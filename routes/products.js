const express = require('express');
const router = express.Router();
//const productosController = require("../controllers/productsController")
const {detail,create,update,deleteProducto} = require("../controllers/productsController")

/* GET users listing. */

router
/*mostrar producto
.get('/detail/:id', detail)
*/
.get('/detail/:id', detail)

//crea producto
.post('/create', create)

//actualizar producto
.patch('/update/:id', update)

//borrar producto
.delete("/delete/:id",deleteProducto)


module.exports = router;
