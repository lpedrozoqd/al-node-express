const express = require('express');
const app = express();
const port = 3000;
const routerAPI = require('./routes');

//Esto es el uso de 'middleware', es decir, se está declarando que por }
//ejemplo para los Post se reciban los msjs en formato json
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('<h1>Hola Express</h1>');
});

routerAPI(app);

//eslint resalta 'console.log' por aquello de que no es una buena práctica dejarlo
//para ambiente productivo
app.listen(port, ()=>{
  console.log(`Mi port:  http://localhost:${port}`);
});


