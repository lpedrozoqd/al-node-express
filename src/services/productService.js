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

  create(data){
    const newProduct = {
      id : faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }

  find(){
    return this.products;
  }

  findOne(id){
    return this.products.find (item=> item.id === id);
  }

  update(id,changes){
    const index = this.products.findIndex(item=>item.id===id);
    if (index === -1){
      throw new Error("Product notfound");
    }
    this.products[index]=changes;
    return this.products[index];
  }

  delete(id){
    const index = this.products.findIndex(item=>item.id===id);
    if (index === -1){
      throw new Error("Product notfound");
    }
    this.products.splice(index,1);
    return {id}

  }


}

module.exports = ProductsService
