const faker = require('faker');
const boom = require('@hapi/boom');

const pool = require('../libs/postgres.pool');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle client');
    });
  }

  generate() {
    const limit = 10;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('Product not found :/');
    }
    if (product.isBlock) {
      throw boom.conflict('Product is blocked :/');
    }

    return product;
  }

  async update(id, changes) {
    const i = this.products.findIndex((item) => item.id === id);
    if (i === -1) {
      throw boom.notFound('Product not found :/');
    }
    const product = this.products[i];
    this.products[i] = {
      ...product,
      ...changes,
    };
    return this.products[i];
  }

  async delete(id) {
    const i = this.products.findIndex((item) => item.id === id);
    if (i === -1) {
      throw boom.notFound('Product not found :/');
    }
    this.products.splice(i, 1);
    return {
      message: 'Product deleted',
      id,
    };
  }
}

module.exports = ProductsService;
