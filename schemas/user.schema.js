const Joi = require('joi');

const id = Joi.number().integer();
const userName = Joi.string().min(3).max(30);
const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string();
const age = Joi.number().integer();

const createUserSchema = Joi.object({
  userName: userName.required(),
  email: email.required(),
  password: password.required(),
  role: role.required(),
  age: age.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  role: role,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema };
