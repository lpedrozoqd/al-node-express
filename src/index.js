const express = require('express');
const app = express();
const port = 3000;

//Aquí para iniciar, aplicarmos una ruta:
app.get('/',(req,res)=>{
  res.send("Hola!, mi server Express");
});

//eslint resalta 'console.log' por aquello de que no es una buena práctica dejarlo 
//para ambiente productivo
app.listen(port, ()=>{
  console.log("Mi port: " + port);
});

