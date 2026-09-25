const fs = require('fs');
const svg = fs.readFileSync('C:/Users/FOM/Desktop/design-reference/16-state-404 1.svg', 'utf8');

// The 404 graphic is centered between y=190 and y=310, x=580 and x=860
// Let's find paths within this coordinate range
const paths = svg.match(/<path[^>]+>/g) || [];
console.log('Finding 404 paths:');
paths.forEach((p, idx) => {
  const d = (p.match(/d="([^"]+)"/) || [])[1] || '';
  const fill = (p.match(/fill="([^"]+)"/) || [])[1];
  // check coords
  if (d.includes('M650.46 195') || d.includes('720 296') || (d.includes('195') && fill === '#EDE9FE') || (d.includes('270') && fill === '#5B3DF5')) {
    console.log(`Path ${idx}:`, p);
  }
});
