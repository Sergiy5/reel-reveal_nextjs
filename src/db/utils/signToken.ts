const jwt = require("jsonwebtoken");

export const signToken = (id: string):string =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
