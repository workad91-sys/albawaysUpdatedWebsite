const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/focus:border-blue-500/g, 'focus:border-brand-accent');

fs.writeFileSync('src/App.tsx', content);
console.log("Footer input fixed");
