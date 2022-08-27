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

  create(){

  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find(item=> item.id === id);
  }

  update(){

  }


}

module.exports = ProductsService
