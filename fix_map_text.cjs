const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/fill: "#FFFFFF"/g, 'fill: "#383838"');
content = content.replace(/textShadow: "0 1px 2px rgba\(0,0,0,0\.5\)"/g, 'textShadow: "0 2px 4px rgba(255,255,255,0.8)"');

fs.writeFileSync('src/App.tsx', content);
console.log("Map text color fixed.");
