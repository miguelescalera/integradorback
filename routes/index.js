const express =require ("express")
const router = express.Router()
const Producto=require("../models/Producto")
const Categoria=require("../models/Categoria")

router.get("/producto",function(req,res){
    if(req.query.categoria){
        Producto.findAll({
            where: {nombre:req.query.categoria},
            // include: {model: Producto},
        })
            .then(producto=>{
                res.json(producto)})}
    else{
        Producto.findAll()
        .then(producto=>{
            res.json(producto)
        })
    }
})

router.get("/producto/:id",function(req,res){
    const id=(req.params.id)
    Producto.findByPk(id)
    .then(producto=>{
        res.send(producto)
    })
})

router.post("/producto",function(req,res){
    Producto.create(req.body)
    .then(producto=>{
        res.redirect("/producto")
    })
})

router.put("/producto/:id",function(req,res){
    Producto.update(req.body,{
        where:{id:req.params.id}
    }).then(producto=>{
        res.send(producto)
    })
})

router.delete("/producto/:id", function(req,res){
    Producto.destroy({where:{id:req.params.id}})
    .then(()=>{
        res.redirect("/producto")
    })
})

module.exports= router