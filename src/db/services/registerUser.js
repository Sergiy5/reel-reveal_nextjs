import User from "@/db/models/user";
import { userRolesEnum } from "../roles/userRoles";


/**
 * Create user and signup JWT
 * @param {Object} userData
 * @returns {Object}
 */
export const registerUser = async (userData) => {
  const newUserData = {
    ...userData,
    role: userRolesEnum.USER,
  };
  const newUser = await User.create(newUserData);

  newUser.password = undefined;
  return { user: newUser };
};
