import mongoose from "mongoose";

const { Schema } = mongoose;

export enum RoleType {
  GUEST = "guest",
  MEMBER = "member",
  ADMIN = "admin",
}

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      require: true,
    },

    lastName: {
      type: String,
      require: true,
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
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
