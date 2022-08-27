const faker = require('faker');

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
        image: faker.image.imageUrl()
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
      },5000);
    });

  }

  async findOne(id){
    //Aquí generaremos un error a propósito para probar los middlewares de errores
    //con esta fn getTotal la cual no existe:
    //const name = this.getTotal();
    return this.products.find (item=> item.id === id);
  }

  async update(id,changes){
    const index = this.products.findIndex(item=>item.id===id);
    if (index === -1){
      throw new Error("Product not found to update");
    }
    this.products[index]=changes;
    return this.products[index];
  }

  async delete(id){
    const index = this.products.findIndex(item=>item.id===id);
    if (index === -1){
      throw new Error("Product notfound");
    }
    this.products.splice(index,1);
    return {id}

  }


}

module.exports = ProductsService
