const router = require('./productsRouter');

function routerAPI(app) {
  app.use('/products',router);
}

module.exports = routerAPI;
