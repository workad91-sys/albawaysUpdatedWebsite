const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/fill: "#383838", fontSize: "14px", fontWeight: "bold", textShadow: "0 2px 4px rgba\(255,255,255,0\.8\)"/g, 'fill: "#FFFFFF", fontSize: "14px", fontWeight: "bold", textShadow: "0 1px 2px rgba(0,0,0,0.5)"');
content = content.replace(/opacity: 1,/g, 'opacity: 0.6,');

fs.writeFileSync('src/App.tsx', content);
console.log("Map text and lines reverted.");
