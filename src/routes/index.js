const routerProducts = require('./productsRouter');
const routerUser = require('./usersRouter');
const routerCategories = require('./categoriesRouter');
const routerNuevaRuta = require('./nuevaRutaRouter');
const rootRuta = require('./rootRouter');


function routerAPI(app) {
  app.use('/products',routerProducts);
  app.use('/users',routerUser);
  app.use('/categories',routerCategories);
  app.use('/nueva-ruta',routerNuevaRuta);
  app.use('/',rootRuta);
}

module.exports = routerAPI;
