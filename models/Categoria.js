const S = require("sequelize");
const db = require("../db")


class Categoria extends S.Model{}

Categoria.init({
    nombre:{
        type:S.STRING
    }
},{sequelize:db, modelName: 'Categoria'})

module.exports= Categoria