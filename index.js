// Root entry file for Railway, Railpack, and cloud runtimes
const path = require('path');
const fs = require('fs');

const distServer = path.resolve(__dirname, 'server', 'dist', 'server.js');

if (fs.existsSync(distServer)) {
  import('./server/dist/server.js').catch((err) => {
    console.error('[Farzandly] Serverni ishga tushirishda xatolik:', err);
    process.exit(1);
  });
} else {
  console.log('[Farzandly] server/dist topilmadi, tsx orqali ishga tushirilmoqda...');
  try {
    const { spawn } = require('child_process');
    const child = spawn('npx', ['tsx', 'server/src/server.ts'], {
      stdio: 'inherit',
      shell: true,
      env: process.env,
    });
    child.on('exit', (code) => process.exit(code || 0));
  } catch (err) {
    console.error('[Farzandly] Ishga tushirishda xatolik:', err);
    process.exit(1);
  }
}
