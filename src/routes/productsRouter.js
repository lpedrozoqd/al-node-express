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
});



router.patch('/:id',(req,res)=>{
  const {id} = req.params;
  const body = req.body;
  const product = service.update(id,body);
  res.json(product);
});

router.delete('/:id',(req,res)=>{
  const {id} = req.params;
  const product = service.delete(id);
  res.json(product);
});

router.post('/',(req,res)=>{
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
});

module.exports = router;
