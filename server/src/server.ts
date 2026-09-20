import dotenv from 'dotenv';
dotenv.config();

import { app } from './app.js';
import { connectDB } from './config/db.js';

const PORT = Number(process.env.PORT) || 5000;
const HOST = '0.0.0.0';

async function bootstrap() {
  // Connect to database
  await connectDB();

  app.listen(PORT, HOST, () => {
    console.log(`=========================================`);
    console.log(`🌿 Farzandly API Server ishga tushdi!`);
    console.log(`🚀 Host: http://${HOST}:${PORT}`);
    console.log(`🩺 Health: http://${HOST}:${PORT}/api/health`);
    console.log(`=========================================`);
  });
}

bootstrap().catch((err) => {
  console.error('Serverni ishga tushirishda kutilmagan xatolik:', err);
  process.exit(1);
});
