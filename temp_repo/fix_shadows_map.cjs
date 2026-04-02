const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Reduce shadows
content = content.replace(/shadow-2xl/g, 'shadow-lg');
content = content.replace(/drop-shadow-2xl/g, 'drop-shadow-lg');
content = content.replace(/shadow-\[0_0_30px_rgba\(255,195,0,0\.15\)\]/g, 'shadow-[0_0_15px_rgba(255,195,0,0.1)]');
content = content.replace(/shadow-lg shadow-brand-accent\/30/g, 'shadow-md shadow-brand-accent/20');
content = content.replace(/shadow-xl/g, 'shadow-md');

// 2. Discover section (Map) changes
content = content.replace(/relative max-w-5xl mx-auto px-6 h-\[450px\] flex flex-col items-center justify-center/g, 'relative max-w-7xl mx-auto px-6 h-[500px] md:h-[700px] flex flex-col items-center justify-center');
content = content.replace(/<div className="absolute inset-0 w-full h-full opacity-40 pointer-events-none">/g, '<div className="absolute inset-0 w-full h-full opacity-100 pointer-events-none">');
content = content.replace(/scale: 130/g, 'scale: 180');
content = content.replace(/strokeWidth={0\.5}/g, 'strokeWidth={1.5}');
content = content.replace(/fill: "#383838"/g, 'fill: "#FFFFFF"');

// Add fade effect on the borders
const fadeDiv = `</ComposableMap>\n        </div>\n        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,#383838_80%)] z-10"></div>`;
content = content.replace(/<\/ComposableMap>\s*<\/div>/, fadeDiv);

fs.writeFileSync('src/App.tsx', content);
console.log("Shadows reduced, map contrast increased, map size expanded, fade effect added.");
