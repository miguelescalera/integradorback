const S =require("sequelize")
const db =require("../db")


class Producto extends S.Model{}

Producto.init({
    nombre:{
        type:S.STRING,
        validate:{
            notEmpty:true
        }
    },
    precio:{
        type:S.INTEGER,
        allowNull:false
    },
    descripcion:{
        type:S.TEXT,
        get(){
            return this.getDataValue("descripcion") ? this.getDataValue("descripcion").slice(0,20)+"...": this.getDataValue("descripcion");
        }
    },
    disponible:{
        type:S.BOOLEAN,
        default:true
    }
},{sequelize:db, modelName: 'productos'})

// Producto.addhook("beforecreate" ,function(producto){
//     if(!producto.disponible) producto.nombre=producto.nombre+" NO DISPONIBLE"
// })

module.exports= Producto