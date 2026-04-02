const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/opacity: 0\.6,/g, 'opacity: 1,');

fs.writeFileSync('src/App.tsx', content);
console.log("Map lines contrast increased.");
