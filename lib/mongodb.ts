import { MongoClient, Db } from "mongodb";
import { environment } from "../src/constants/environment";

declare global {
  namespace NodeJS {
    interface Global {
      _mongoClientPromise?: Promise<MongoClient>;
    }
  }
}

const mongodbUri: any = environment.mongodbUri;
const mongodbName = environment.mongodbName;

if (!mongodbUri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

if (!mongodbName) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  );
}

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(mongodbUri);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {

  client = new MongoClient(mongodbUri);
  clientPromise = client.connect();
}

export default clientPromise;