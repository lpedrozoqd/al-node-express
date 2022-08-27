const express = require('express');
const router = express.Router();
const ProductsService = require('../services/productService');
const service = new ProductsService();

router.get('/',(req,res)=>{
    const products = service.find();
    res.json(products);
 });

//Se deben colocar primero las rutas estáticas y debajo las rutas dinámicas (clase #3)
router.get('/filter',(req,res)=>{
  res.send("soy un filter!");
});


router.get('/:id',(req,res)=>{
  //Opción 1: (desetructuración)
  const {id} = req.params;
  const product = service.findOne(id);
  if (product){
    res.json(product);
  }else{
    res.status(404).json({
      message:"Not found"
    });
  }

  /*
  //los parámetros se reciben como un string
  if (id==="999"){
    res.status(404).json({
      message:"Not found"
    });
  }else{
    res.json({
      id,
      name:"product x" ,
      price:400
    });
  }*/
  });



router.patch('/:id',(req,res)=>{
  const {id} = req.params;
  const body = req.body;
  res.json({
     id,
     name:"update" ,
     data:body
  });
});

router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  res.json({
     id,
     name:"deleted"
     });
});

router.post('/',(req,res)=>{
  const body = req.body;
  res.status(201).json({
    message: "created",
    data:body
  })
});

module.exports = router;
