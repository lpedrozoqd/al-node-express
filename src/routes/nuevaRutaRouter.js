const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
  res.send("<h1>Hola!, soy una nueva ruta!<h1>");
});

module.exports = router;
