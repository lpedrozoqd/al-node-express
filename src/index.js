const express = require('express');
const app = express();
const port = 3000;
const faker = require('faker');

//**Clase #1
//Aquí para iniciar, aplicarmos una ruta:
app.get('/',(req,res)=>{
  res.send("Hola!, mi server Express");
});


//**Clase #2
app.get('/nueva-ruta',(req,res)=>{
  res.send("Hola!, soy una nueva ruta!");
});

app.get('/products',(req,res)=>{
  //uso de faker
  const products = [];
  const {size} = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    });
  }
  //Respuesta con base en faker (generación de datos randómico)
  res.json(products);

  //Aquí enviaremos otro tipo de formato. JSON en este caso:
  // res.json({
  //    name:"Product 1" ,
  //    price:400
  // });
});

//Se deben colocar primero las rutas estáticas y debajo las rutas dinámicas (clase #3)
app.get('/products/filter',(req,res)=>{
  res.send("soy un filter!");
});


//**Clase #3
app.get('/products/:id',(req,res)=>{
  //Opción 1: (la más simple)
  //const id = req.params.id;

  //Opción 2: (desetructuración)
  const {id} = req.params;

  res.json({
     id,
     name:"product x" ,
     price:400
  });
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

//**Clase #4
app.get('/users',(req,res)=>{
  //Ejemplo de estrategia de paginación
  const {limit, offset} = req.query;
  if (limit && offset){
    res.json({
      limit,
      offset
    });
  }else{
    res.send('Nohay parámetros!');
  }
});


//eslint resalta 'console.log' por aquello de que no es una buena práctica dejarlo
//para ambiente productivo
app.listen(port, ()=>{
  console.log(`Mi port:  http://localhost:${port}`);
});


