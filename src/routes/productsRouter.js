const express = require('express');
const router = express.Router();
const ProductsService = require('../services/productService');
const service = new ProductsService();

router.get('/',async (req,res)=>{
    const products = await service.find();
    res.json(products);
 });

//Se deben colocar primero las rutas estáticas y debajo las rutas dinámicas (clase #3)
router.get('/filter',(req,res)=>{
  res.send("soy un filter!");
});


router.get('/:id',async(req,res,next)=>{
  try {
    //Opción 1: (desetructuración)
    const {id} = req.params;
    const product = await service.findOne(id);
    if (product){
      res.json(product);
    }else{
      res.status(404).json({
        message:"Not found"
      });
    }
  } catch (error) {
    next(error);
  }
});



router.patch('/:id',async(req,res,next)=>{
  try {
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id,body);
    res.json(product);
  } catch (error) {
    /*
    res.status(404).json({
      message:error.message
    });
    */
    //La instrucción anterior es actualizad por el middleware que gestiona errrores:
    next(error);

  }
});

router.delete('/:id',async(req,res)=>{
  const {id} = req.params;
  const product = await service.delete(id);
  res.json(product);
});

router.post('/',async(req,res)=>{
  const body = req.body;
  const newProduct = await service.create(body);
  res.status(201).json(newProduct);
});

module.exports = router;
