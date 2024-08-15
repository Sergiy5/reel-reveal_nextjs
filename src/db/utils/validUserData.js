const Joi = require("joi");
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/;

export const validUserData = (data) => {
  return Joi.object()
    .keys({
      email: Joi.string().email().required(),
      password: Joi.string().required().regex(PASSWORD_REGEX),
      subscription: Joi.string(),
    })
    .validate(data);
};
