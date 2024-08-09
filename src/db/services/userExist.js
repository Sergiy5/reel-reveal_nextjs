const User = require("../models/userModels");
const { AppError } = require("../utils");

/**
 * Check user exisit
 * @param {Object} filter
 * @return {Promise<void>}
 */
exports.userExist = async (filter) => {
  /**
   * $ne (not equel)  команда MONNGODB
   *  для того щоб з пошуку контакту виключити контакт який ми хочемо змінити
   */
  const userExists = await User.exists(filter);

  if (userExists) throw new AppError(409, "User with this email exists");
};
