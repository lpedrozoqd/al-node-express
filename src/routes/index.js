const express = require('express');

const routerProducts = require('./productsRouter');
const routerUser = require('./usersRouter');
const routerCategories = require('./categoriesRouter');
const routerNuevaRuta = require('./nuevaRutaRouter');
const rootV1Ruta = require('./rootV1Router');


function routerAPI(app) {
  //De esta manera se usa sin tener en cuenta el versiomaiento. Ej: /api/v1...v2...vn
  /*
  app.use('/products',routerProducts);
  app.use('/users',routerUser);
  app.use('/categories',routerCategories);
  app.use('/nueva-ruta',routerNuevaRuta);
  //Con esta opción se muestra la página inicial con sólo http://localhost:3000
  app.use('/',rootRuta);
  */
  const router = express.Router();
  app.use('/api/v1',router);
  router.use('/products',routerProducts);
  router.use('/users',routerUser);
  router.use('/categories',routerCategories);
  router.use('/nueva-ruta',routerNuevaRuta);
  router.use('/',rootV1Ruta);
}

module.exports = routerAPI;
