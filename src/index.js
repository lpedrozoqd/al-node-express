const express = require('express');
const app = express();
const port = 3000;
const routerAPI = require('./routes');
const {logErrors,errorHandler, boomErrorHandler} = require('./middleware/errorHandler');
const cors = require('cors');

//Esto es el uso de 'middleware', es decir, se está declarando que por }
//ejemplo para los Post se reciban los msjs en formato json
app.use(express.json());

const whitList = [
  'http://localhost:8080',
  'https://sb.co'
];
const options = {
  origin:(origin,callback) =>{
    if (whitList.includes(origin)){
      callback(null,true);
    }else{
      callback(new Error('No permitido!'));
    }
  }
}

//De esta manera, acepta cualquier
app.use(cors(options));


app.get('/',(req,res)=>{
  res.send('<h1>Hola Express</h1>');
});

routerAPI(app);

//Deben colocarse los middlewares después del routing y el orden en que se van a
//ejecut<r
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//eslint resalta 'console.log' por aquello de que no es una buena práctica dejarlo
//para ambiente productivo
app.listen(port, ()=>{
  console.log(`Mi port:  http://localhost:${port}`);
});


