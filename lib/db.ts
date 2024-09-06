import mongoose, { Mongoose as MongooseConnection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

export interface CachedConnection {
  conn: MongooseConnection | null;
  promise: Promise<MongooseConnection> | null;
}

const cached: CachedConnection = (global.mongoose as CachedConnection) || {
  conn: null,
  promise: null,
};

async function dbConnect() {
  if (cached.conn) {
    console.log("Cached connection found.");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Creating new connection.");
    const opts = {
      bufferCommands: false, // Disable buffering for performance
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
