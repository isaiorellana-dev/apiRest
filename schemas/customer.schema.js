const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(30);
const lastName = Joi.string().min(3).max(30);
const phone = Joi.string();
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(6).max(30);

const getCostumerSchema = Joi.object({
  id: id.required(),
});

const createCostumerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  userId: userId.required(),
});

const updateCostumerSchema = Joi.object({
  name,
  lastName,
  phone,
  userId,
});

module.exports = {
  getCostumerSchema,
  createCostumerSchema,
  updateCostumerSchema,
};
