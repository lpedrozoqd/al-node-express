const express = require('express');
const app = express();
const port = 3000;
const routerAPI = require('./routes');

routerAPI(app);

//eslint resalta 'console.log' por aquello de que no es una buena práctica dejarlo
//para ambiente productivo
app.listen(port, ()=>{
  console.log(`Mi port:  http://localhost:${port}`);
});


