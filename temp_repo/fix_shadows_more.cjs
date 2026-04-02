const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/shadow-lg/g, 'shadow-md');
content = content.replace(/drop-shadow-lg/g, 'drop-shadow-md');

fs.writeFileSync('src/App.tsx', content);
console.log("Shadows further reduced.");
