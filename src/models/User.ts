import mongoose from "mongoose";

const { Schema } = mongoose;

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

    userId: {
      type: String,
      unique: true,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
