import mongoose from "mongoose";
import { environment } from "../constants/environment";

const connect = async () => {
  try {
    await mongoose.connect(environment.mongodbUri!);
  } catch (error) {
    throw new Error("connection failed");
  }
};

export default connect;
