const User = require("../models/userModels");

/**
 * Get one user
 * @param {string} id
 * @returns {Object}
 */
exports.getUserById = (id) => User.findById(id);
