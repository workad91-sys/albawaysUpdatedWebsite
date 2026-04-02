const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(/bg-\[radial-gradient\(ellipse_at_center,transparent_30%,#383838_80%\)\]/g, 'bg-[radial-gradient(ellipse_at_center,transparent_30%,#FFFDF3_80%)]');

fs.writeFileSync('src/App.tsx', content);
console.log("Fade effect fixed to match background.");
