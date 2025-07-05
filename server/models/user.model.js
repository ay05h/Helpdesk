import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

// This a demo for later (Use bcrypt to hash password before saving)
userSchema.methods.checkPassword = function (password) {
  return password === this.password;
};

const User = mongoose.model("User", userSchema);
export default User;
