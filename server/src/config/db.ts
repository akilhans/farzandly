import mongoose from 'mongoose';

const RETRY_INTERVAL_MS = 30_000;

async function attemptConnect(uri: string): Promise<boolean> {
  try {
    mongoose.set('strictQuery', false);
    await mongoose.connect(uri, {
      dbName: 'farzandly',
      serverSelectionTimeoutMS: 5000,
    });
    console.log(`[Database] MongoDB muvaffaqiyatli ulandi: ${mongoose.connection.host}`);
    return true;
  } catch (error) {
    console.warn(`[Database] MongoDB bilan bog'lanishda ogohlantirish: ${(error as Error).message}`);
    return false;
  }
}

/**
 * Connects to MongoDB at boot; on failure the app keeps running in in-memory demo mode
 * (see dataService.ts) while retrying in the background so a transient outage — or an
 * Atlas IP-allowlist fix applied after deploy — recovers on its own, without a restart.
 */
export async function connectDB(): Promise<void> {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/farzandly';
  const ok = await attemptConnect(uri);
  if (ok) return;

  console.warn('[Database] Ilova xotiradagi (in-memory) demo ma\'lumotlar rejimi bilan uzluksiz ishlashni davom ettiradi.');
  const timer = setInterval(async () => {
    if (mongoose.connection.readyState === 1) {
      clearInterval(timer);
      return;
    }
    if (await attemptConnect(uri)) clearInterval(timer);
  }, RETRY_INTERVAL_MS);
  timer.unref();
}

export default connectDB;
