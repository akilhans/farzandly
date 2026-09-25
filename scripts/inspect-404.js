const fs = require('fs');

const svg404 = fs.readFileSync('C:/Users/FOM/Desktop/design-reference/16-state-404 1.svg', 'utf8');

// Find paths with fills
const pathMatches = svg404.match(/<path[^>]+>/g) || [];
console.log('Total paths in 404:', pathMatches.length);

pathMatches.forEach((p, i) => {
  const fill = (p.match(/fill="([^"]+)"/) || [])[1];
  const stroke = (p.match(/stroke="([^"]+)"/) || [])[1];
  const d = (p.match(/d="([^"]+)"/) || [])[1] || '';
  if (fill === '#EDE9FE' || fill === '#5B3DF5' || d.length > 500) {
    console.log(`Path ${i}: fill=${fill} stroke=${stroke} dLength=${d.length} start=${d.slice(0, 60)}`);
  }
});
