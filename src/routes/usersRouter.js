const express = require('express');
const app = express();

const router = express.Router();

//**Clase #4
app.get('/',(req,res)=>{
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

module.exports = router;
