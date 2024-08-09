const User = require("../models/userModels");
const { AppError } = require("../utils");
const { checkToken } = require("./jwtService");

/**
 * Logout user, deleting token.
 * @param {string} token;
 */
exports.logoutUser = async (req) => {
  const token =
    req.headers.authorization?.startsWith("Bearer") &&
    req.headers.authorization.split(" ")[1];

  const userId = checkToken(token);

  const currentUser = await User.findById(userId);

  if (!currentUser) throw new AppError(401, "Not authorized");

  currentUser.token = undefined;

  return currentUser.save();
};