const express = require('express');
const app = express();
const port = 3000;

const routerAPI = require('./routes');

//**Clase #1
//Aquí para iniciar, aplicarmos una ruta:
app.get('/',(req,res)=>{
  res.send("Hola!, mi server Express");
});

//**Clase #2
app.get('/nueva-ruta',(req,res)=>{
  res.send("Hola!, soy una nueva ruta!");
});

app.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const {categoryId, productId} = req.params;

  res.json({
    productId,
    categoryId,
    name:"product x" ,
    price:400
  });
});

routerAPI(app);


//eslint resalta 'console.log' por aquello de que no es una buena práctica dejarlo
//para ambiente productivo
app.listen(port, ()=>{
  console.log(`Mi port:  http://localhost:${port}`);
});


