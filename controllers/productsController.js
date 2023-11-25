const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, "/..","/data","/products.json");

const productsController = {
    
    detail:(req,res) => {
        const id = req.params.id;        
        const productosJson = fs.readFileSync(dir,"utf-8");
        const products = JSON.parse(productosJson);
        const product = products.find(elemento => elemento.id == id);
        res.render("products/detail", {title:"Detalle producto",product})
    },
    create:(req,res) => {
        
    },
    update:(req,res) => {
        
    },
    deleteProducto:(req,res) => {
        
    }
}

module.exports = productsController;