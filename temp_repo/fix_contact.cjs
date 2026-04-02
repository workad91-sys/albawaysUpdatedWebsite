const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Fix inputs in Contact section
content = content.replace(/className="w-full bg-black\/20 border border-brand-dark\/10 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:border-blue-500 transition"/g, 'className="w-full bg-white border border-brand-dark/10 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-accent transition"');
content = content.replace(/className="w-full bg-black\/20 border border-brand-dark\/10 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:border-blue-500 transition resize-none"/g, 'className="w-full bg-white border border-brand-dark/10 rounded-xl px-4 py-3 text-brand-dark focus:outline-none focus:border-brand-accent transition resize-none"');

fs.writeFileSync('src/App.tsx', content);
console.log("Contact inputs fixed");
