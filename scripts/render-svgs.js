const fs = require('fs');
const { Resvg } = require('@resvg/resvg-js');

for (const name of ['16-state-404 1', '16-state-empty 1']) {
  const svg = fs.readFileSync(`C:/Users/FOM/Desktop/design-reference/${name}.svg`, 'utf8');
  const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1440 } });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();
  fs.writeFileSync(`C:/Users/FOM/Desktop/design-reference/${name}.png`, pngBuffer);
  console.log(`Rendered ${name}.png: ${pngBuffer.length} bytes`);
}
