const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/textShadow: "0 2px 4px rgba\(0,0,0,0\.8\)"/g, 'textShadow: "0 1px 2px rgba(0,0,0,0.5)"');

fs.writeFileSync('src/App.tsx', content);
console.log("Text shadows reduced.");
