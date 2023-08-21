import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema } = mongoose;

const donationSchema = new Schema(
  {
    _id: {
      type: ObjectId,
      require: true,
      unique: true,
    },

    userId: {
      type: String,
      require: true,
    },

    createAt: {
      type: Date,
      require: true,
    },

    amount: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Donation", donationSchema);
