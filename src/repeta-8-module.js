const Joi = require('joi');
const shortid = require('shortid');

const passwordSchema = Joi.string().min(3).max(10).alphanum();

// console.log(passwordSchema.validate('qhjmng'));

console.log(shortid.generate());