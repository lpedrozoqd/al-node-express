//const routerProducts = require('./productsRouter');
const routerUser = require('./usersRouter');


function routerAPI(app) {
  //app.use('/products',routerProducts);
  app.use('/users',routerUser);
}

module.exports = routerAPI;
