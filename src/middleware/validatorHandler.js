const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
  return (req,res, next)=>{
    //property: es para establecer dinámicamente
    //si es un post,get,path,delee,update, etc
    const data = req[property];
    const {error} = schema.validate(data)
    if (error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;
