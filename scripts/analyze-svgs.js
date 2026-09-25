const fs = require('fs');

function analyzeSvg(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  console.log('=== FILE:', filePath);
  
  // Look for any plain text inside tags
  const textMatches = content.match(/>([^<]+)</g);
  if (textMatches) {
    const cleaned = textMatches
      .map(m => m.slice(1, -1).trim())
      .filter(t => t.length > 0 && !/^[\d.,\s]+$/.test(t));
    console.log('Text content (first 50):', cleaned.slice(0, 50));
  } else {
    console.log('No direct text content.');
  }

  // Count elements
  const paths = (content.match(/<path/g) || []).length;
  const rects = (content.match(/<rect/g) || []).length;
  const circles = (content.match(/<circle/g) || []).length;
  const images = (content.match(/<image/g) || []).length;
  console.log({ paths, rects, circles, images });

  // Look for any image data or href
  const hrefs = content.match(/xlink:href="([^"]+)"/g) || content.match(/href="([^"]+)"/g);
  if (hrefs) {
    console.log('Images/Hrefs found:', hrefs.length);
  }
}

analyzeSvg('C:/Users/FOM/Desktop/design-reference/16-state-404 1.svg');
analyzeSvg('C:/Users/FOM/Desktop/design-reference/16-state-empty 1.svg');
