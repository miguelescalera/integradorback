const Producto= require("./Producto")
const Categoria =require("./Categoria")
Producto.belongsTo(Categoria, {as:"categoria"})

module.exports={Producto,Categoria}



