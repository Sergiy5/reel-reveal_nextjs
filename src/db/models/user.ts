import mongoose, { Schema, Document } from "mongoose";
const bcrypt = require("bcrypt");
import { userRolesEnum } from "../roles/userRoles"; 

export interface IUser extends Document {
  password: string;
  email: string;
  name: string;
  role: string;
  films: { id: string; isChecked: boolean }[];
  avatarURL?: string;
  token?: string;
  isModified: (path: string) => boolean; // This is a Mongoose method available in documents.
}

/**
 * User Model
 */
const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [false, "Set password for user"],
      select: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    role: {
      type: String,
      enum: Object.values(userRolesEnum),
      default: userRolesEnum.USER,
    },
    films: [
      {
        id: String,
        isChecked: Boolean,
      },
    ],
    avatarURL: String,
    token: String,
  },
  {
    /**
     * timestamps rerurn lines with data when object was made and update
     * versionKey didn't return vrsion of object
     */
    timestamps: true,
    versionKey: false,
  }
);

/**
 * Pre save  hook. Fires on Create and Save.
 */
userSchema.pre<IUser>("save", async function (next: (err?: Error) => void) {
  const user = this;

  console.log("Middleware triggered before saving user");

  if (!user.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    next();
  } catch (err) {
    next(err as Error);
  }
});

/**
 * Custom method mongoose to validate password. Return promise boolean
 * @param {string} candidate
 * @param {string} hash
 * @returns {Promise<boolean>}
 */
userSchema.methods.checkPassword = (candidate: string, hash: string) => {
  bcrypt.compare(candidate, hash);
};

export default mongoose.models.User || mongoose.model("User", userSchema);
