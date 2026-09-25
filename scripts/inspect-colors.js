const fs = require('fs');

function inspectPaths(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log('=== ' + filePath + ' ===');
  
  // Find all fill and stroke colors
  const fills = new Set(content.match(/fill="([^"]+)"/g) || []);
  const strokes = new Set(content.match(/stroke="([^"]+)"/g) || []);
  console.log('Fills:', Array.from(fills));
  console.log('Strokes:', Array.from(strokes));

  // Find all groups with transform or id
  const groups = content.match(/<g[^>]*>/g) || [];
  console.log('Groups count:', groups.length);
  groups.slice(0, 15).forEach(g => console.log('  ', g));
}

inspectPaths('C:/Users/FOM/Desktop/design-reference/16-state-404 1.svg');
inspectPaths('C:/Users/FOM/Desktop/design-reference/16-state-empty 1.svg');
