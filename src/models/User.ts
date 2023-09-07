import mongoose, { models } from "mongoose";

const { Schema } = mongoose;

export enum RoleType {
  GUEST = "guest",
  MEMBER = "member",
  ADMIN = "admin",
}

const userSchema = new Schema(
  {
    fullName:{
      type: String,
      require: true,
    },

    firstName: {
      type: String,
    },

    lastName: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
      require: true,
    },

    password: {
      type: String,
      require: true,
    },

    _Id: {
      type: String,
      unique: true,
      require: true,
    },

    role: {
      type: String,
      require: true,
      enum: RoleType,
      default: RoleType.GUEST,
    },

    emailVerified: {
      type: Boolean,
      default: false,
      require: true,
    }
  },
  { timestamps: true }
);

const User = models.User || mongoose.model("User", userSchema);
export default User;
