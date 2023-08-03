import { MongoClient, Db } from 'mongodb';
import { environment } from "../src/constants/environment";

const mongodbUri : any = environment.mongodbUri;
const mongodbName = environment.mongodbName

if (!mongodbUri) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  );
}

if (!mongodbName) {
  throw new Error(
    'Please define the MONGODB_DB environment variable inside .env.local'
  );
}

let cachedDb: Db;

export async function connectToDatabase() {
    if (cachedDb) {
        return cachedDb;
      }

  const client = new MongoClient(mongodbUri);

  const db = client.db(mongodbName);

  try {
    // Connect to MongoDB
    await client.connect();

    // Access the desired database
    const db = client.db(mongodbName);

    cachedDb = db;
    return db;
  } catch (error:any) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
}
