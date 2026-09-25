const fs = require('fs');

for (const file of ['16-state-404 1.svg', '16-state-empty 1.svg']) {
  const content = fs.readFileSync('C:/Users/FOM/Desktop/design-reference/' + file, 'utf8');
  console.log('=== FILE:', file, '===');
  console.log('Length:', content.length);
  
  // Look for text or id attributes
  const ids = content.match(/id="([^"]+)"/g);
  if (ids) {
    console.log('Top IDs:', Array.from(new Set(ids)).slice(0, 40));
  }
}
