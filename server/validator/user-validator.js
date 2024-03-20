import Joi from "joi";

//The abortEarly: false gives all the errors, true gives only the first
//Payload is the req ==> {username, email, password}

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const registerSchema = Joi.object({
  email: Joi.string().email().lowercase().trim().required(),
  password: Joi.string().min(3).required(),
  role: Joi.string().valid("artist", "entrepreneur").required(),
  categories: Joi.array().items(Joi.string()),
});

export const registerValidator = validator(registerSchema);
