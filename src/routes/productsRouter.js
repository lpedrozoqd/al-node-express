const express = require('express');
const faker = require('faker');

const router = express.Router();


router.get('/',(req,res)=>{
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
router.get('/filter',(req,res)=>{
  res.send("soy un filter!");
});

//**Clase #3
router.get('/:id',(req,res)=>{
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


router.post('/',(req,res)=>{
  const body = req.body;
  res.json({
    message:"created",
    data:body
  });
})
module.exports = router;
