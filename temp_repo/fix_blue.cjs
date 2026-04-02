const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix blue- colors
content = content.replace(/from-blue-900\/40/g, 'from-brand-accent/20');
content = content.replace(/hover:bg-blue-700/g, 'hover:bg-[#d4881e]');

fs.writeFileSync('src/App.tsx', content);
console.log("Blue colors fixed");
