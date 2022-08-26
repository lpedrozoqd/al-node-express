const express = require('express');
const router = express.Router();

router.get('/:categoryId/products/:productId',(req,res)=>{
  const {categoryId, productId} = req.params;

  res.json({
    productId,
    categoryId,
    name:"product x" ,
    price:400
  });
});

module.exports = router;
