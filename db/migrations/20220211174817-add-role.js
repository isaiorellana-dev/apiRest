'use strict';

const { UserSchema, USER_TABLE } = require('./../models/user.model');

module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(USER_TABLE, 'age', UserSchema.age);
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(USER_TABLE, 'age');
  },
};
