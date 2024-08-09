const bcrypt = require("bcrypt");

const User = require("../models/userModels");
const { AppError } = require("../utils");
const { signToken } = require("./jwtService");

/**
 * Check login data and sign token
 * @param {Object} loginData
 * @returns {Object}
 */
exports.loginUser = async ({ email, password }) => {
  /**
   * Коли в моделі на паролі стоїть 'select:false' тоді в "ручну"
   *  через select дістаємо пароль щоб його перевірити.
   * Ще варіанти перелічити або відняти "-"
   */
  const user = await User.findOne({ email }).select("+password");

  if (!user) throw new AppError(401, "Email or password is wrong");

  // const passwordIsValid = await user.checkPassword(password, user.password);
  const passwordIsValid = await bcrypt.compare(password, user.password);

  if (!passwordIsValid) throw new AppError(401, "Email or password is wrong 2");

  user.token = signToken(user.id);

  await user.save();

  return { user };
};
