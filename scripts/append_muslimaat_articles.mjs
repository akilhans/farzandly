import fs from 'fs';

const newArticles = JSON.parse(fs.readFileSync('scripts/muslimaat_articles.json', 'utf8'));

function updateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already injected
  if (content.includes('bolaning-jahli-chiqqanda-muslimaat')) {
    console.log(`${filePath} already has muslimaat articles.`);
    return;
  }

  // Find the last "];" in the file where seedArticles ends
  const lastBracketIdx = content.lastIndexOf('];');
  if (lastBracketIdx === -1) {
    throw new Error(`Could not find closing bracket in ${filePath}`);
  }

  const newArticlesStr = newArticles.map(a => '  ' + JSON.stringify(a, null, 2).replace(/\n/g, '\n  ')).join(',\n');

  const updated = content.slice(0, lastBracketIdx).trimEnd() + ',\n' + newArticlesStr + '\n];\n';
  fs.writeFileSync(filePath, updated, 'utf8');
  console.log(`Successfully updated ${filePath} with ${newArticles.length} new articles.`);
}

updateFile('client/lib/seedData.ts');
updateFile('server/src/scripts/seedData.ts');
