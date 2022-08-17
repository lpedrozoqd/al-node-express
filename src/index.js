const express = require('express');
const app = express();
const port = 3000;

//**Clase #1
//Aquí para iniciar, aplicarmos una ruta:
app.get('/',(req,res)=>{
  res.send("Hola!, mi server Express");
});


//**Clase #2
app.get('/nueva-ruta',(req,res)=>{
  res.send("Hola!, soy una nueva ruta!");
});

app.get('/productos',(req,res)=>{
  //Aquí enviaremos otro tipo de formato. JSON en este caso:
  res.json({
     name:"Product 1" ,
     price:400
  });
});



//eslint resalta 'console.log' por aquello de que no es una buena práctica dejarlo
//para ambiente productivo
app.listen(port, ()=>{
  console.log(`Mi port:  http://localhost:${port}`);
});


