const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Colors
content = content.replace(/bg-\[#0a0f1c\]/g, 'bg-brand-card');
content = content.replace(/bg-\[#0d1326\]/g, 'bg-brand-card');
content = content.replace(/bg-\[#131b2f\]/g, 'bg-white');
content = content.replace(/bg-\[#060913\]/g, 'bg-brand-dark');
content = content.replace(/from-\[#0a0f1c\]/g, 'from-brand-card');
content = content.replace(/via-\[#0a0f1c\]/g, 'via-brand-card');
content = content.replace(/to-\[#0a0f1c\]/g, 'to-brand-card');

content = content.replace(/text-blue-500/g, 'text-brand-accent');
content = content.replace(/text-blue-400/g, 'text-brand-accent');
content = content.replace(/text-blue-300/g, 'text-brand-accent');
content = content.replace(/bg-blue-500/g, 'bg-brand-accent');
content = content.replace(/bg-blue-600/g, 'bg-[#e59b30]');
content = content.replace(/shadow-blue-500\/30/g, 'shadow-brand-accent/30');

// Map
content = content.replace(/fill="#1e293b"/g, 'fill="#F25824"');
content = content.replace(/stroke="#0f172a"/g, 'stroke="#108690"');
content = content.replace(/stroke="#3b82f6"/g, 'stroke="#FBB040"');
content = content.replace(/className="text-blue-400"/g, 'className="text-[#FBB040]"');

// Text and Borders (Opacity)
content = content.replace(/text-white\/90/g, 'text-brand-dark/90');
content = content.replace(/text-white\/80/g, 'text-brand-dark/80');
content = content.replace(/text-white\/70/g, 'text-brand-dark/70');
content = content.replace(/text-white\/60/g, 'text-brand-dark/60');
content = content.replace(/text-white\/50/g, 'text-brand-dark/50');
content = content.replace(/text-white\/40/g, 'text-brand-dark/40');
content = content.replace(/text-white\/5/g, 'text-brand-dark/5');

content = content.replace(/border-white\/5/g, 'border-brand-dark/5');
content = content.replace(/border-white\/10/g, 'border-brand-dark/10');
content = content.replace(/border-white\/20/g, 'border-brand-dark/20');

content = content.replace(/bg-white\/5/g, 'bg-brand-dark/5');
content = content.replace(/bg-white\/10/g, 'bg-brand-dark/10');
content = content.replace(/bg-white\/20/g, 'bg-brand-dark/20');

// Base text-white (we need to be careful not to replace text-white inside the Hero image or buttons where it might be needed, but let's just replace it and fix specific ones if needed)
// Actually, let's just replace `text-white` with `text-brand-dark` globally except for the Hero title.
// The Hero title has `text-white uppercase drop-shadow-2xl`
content = content.replace(/text-white/g, 'text-brand-dark');
// Fix Hero title back to white
content = content.replace(/text-brand-dark uppercase drop-shadow-2xl/g, 'text-white uppercase drop-shadow-2xl');
// Fix Map Pin text back to white
content = content.replace(/fill: "white"/g, 'fill: "#383838"'); // Wait, map pin text should be dark on amber pins? Amber pins with dark text is good.

// Fix buttons that might have text-brand-dark but need to be white, or vice versa.
// Amber background with Charcoal text is good, so text-brand-dark is fine.

fs.writeFileSync('src/App.tsx', content);
console.log("Replaced successfully");
