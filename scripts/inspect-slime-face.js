const fs = require('fs');
const svg = fs.readFileSync('C:/Users/FOM/Desktop/design-reference/16-state-404 1.svg', 'utf8');
const paths = svg.match(/<path[^>]+>/g) || [];
for (let i = 26; i <= 34; i++) {
  console.log(`Path ${i}:`, paths[i]);
}
