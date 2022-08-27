//Se colocan las funciones en el orden que deben ejecutarse
//por ejemplo, la fn logErrors tiene implementado el método next para invocar
//la próxima función

function logErrors(err,req,res,next) {
  console.error("***logErrors*** " + err);
  next(err);
}

function boomErrorHandler(err,req,res,next) {
  if (err.isBoom){
    const {output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}


function errorHandler(err,req,res,next) {
  res.status(500).json({
    messgae:err.message,
    stack: err.stack
  });
}







module.exports = {logErrors,errorHandler, boomErrorHandler}
