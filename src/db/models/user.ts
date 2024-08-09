const { Schema, mongoose } = require("mongoose");
const bcrypt = require("bcrypt");
import { userRolesEnum } from "../roles/userRoles";

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
userSchema.pre("save", async (next: (err?: Error) => void) => {
  const user = mongoose.model("User", userSchema);
  console.log("Fired_MIDLAWARE_ON SAVE_USER++++++++++++++++++++++++++++++++++++");
  try {
    if (!user.isModified("password")) return next();

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
