const express = require('express')
const app = express()
const db= require("./db")
const models = require("./models")
const Producto = models.Producto
const Categoria = models.Categoria
const routes = require("./routes")


app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get('/', (req, res) => {
  res.status(200).send("Hello World!!!")
})


app.use("/",routes)

// app.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.status(500).send('Something broke!');
// });


db.sync()
/* .then(()=>{
 return Producto.sync()
})
.then(() => {
  return Categoria.sync()
}) */
.then(()=>{
  console.log('DB is connected');
  
  app.listen(3000, () => {
    console.log('Server started at http://localhost:3000');
  });
  
})
.catch((error)=>{console.error(error)})