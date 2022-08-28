const faker = require('faker');
const boom = require('@hapi/boom');

class ProductsService{

  constructor(){
    //Por ahora, tendremos un array en memoria
    this.products = [];
    this.generate();
  }

  generate(){
    const limit = 100;

    for (let index = 0; index < limit; index++) {
      this.products.push({
        id : faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.imageUrl(),
        isBlock : faker.datatype.boolean()
      });
    }
  }

  async create(data){
    const newProduct = {
      id : faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  //Enviaremos esta info con una demora de 5 segundos para poder encapsularlo en una
  //promesa
  async find(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        return resolve(this.products);
      },1000);
    });

  }

  async findOne(id){
    //Aquí generaremos un error a propósito para probar los middlewares de errores
    //con esta fn getTotal la cual no existe:
    //const name = this.getTotal();
    const product = this.products.find(item=> item.id === id);
    if (!product){
      throw boom.notFound('Product not found')
    }
    if (product.isBlock){
      throw boom.conflict('product is blocked');
    }
    return product;
  }

  async update(id,changes){
    const index = this.products.findIndex(item=>item.id===id);
    if (index === -1){
      //throw new Error("Product not found to update");
      //con el paquete boom, se incorpora un middleware http que hace más
      //práctico la situación:
      //(aquí de pleno ya se gestiona la situación con una función/método para el
      //http-code adecuado)
      throw boom.notFound('Product not found to update')
    }
    this.products[index]=changes;
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item=>item.id===id);
    if (index === -1){
      //throw new Error("Product notfound");
      throw boom.notFound('Product not found')
    }
    this.products.splice(index,1);
    return {id}

  }


}

module.exports = ProductsService
