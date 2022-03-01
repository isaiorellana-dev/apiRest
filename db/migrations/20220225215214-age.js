'use strict';

const { CustomerSchema, CUSTOMER_TABLE } = require('../models/customer.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(CUSTOMER_TABLE, 'age', CustomerSchema.age);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(CUSTOMER_TABLE, 'age');
  },
};
