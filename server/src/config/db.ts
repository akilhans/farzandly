import mongoose from 'mongoose';

export async function connectDB(): Promise<void> {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/farzandly';
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri, {
      dbName: 'farzandly',
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[Database] MongoDB muvaffaqiyatli ulandi: ${mongoose.connection.host}`);
  } catch (error) {
    console.warn(`[Database] MongoDB bilan bog'lanishda ogohlantirish: ${(error as Error).message}`);
    console.warn('[Database] Ilova xotiradagi (in-memory) demo ma\'lumotlar rejimi bilan uzluksiz ishlashni davom ettiradi.');
  }
}

export default connectDB;
