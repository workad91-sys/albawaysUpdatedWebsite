const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Extract the Footer component
const footerStart = content.indexOf('const Footer = () => {');
const footerEnd = content.indexOf('export default function App() {');

let footerContent = content.substring(footerStart, footerEnd);

// Replace text-brand-dark with text-white in the footer
footerContent = footerContent.replace(/text-brand-dark/g, 'text-white');
// Except for the logo text? Wait, the logo text is "ALBAWAYS".
// <span className="font-display font-bold text-xl tracking-wide">ALBAWAYS</span>
// It doesn't have a color class, so it inherits from body.
// We should add text-white to the footer wrapper so everything inherits it.
// <footer className="bg-brand-dark pt-24 pb-12 px-6 md:px-16 border-t border-brand-dark/5 relative overflow-hidden text-white">

// Wait, the footer has `text-brand-dark/60`, `text-brand-dark/40`, `border-brand-dark/10`, `bg-brand-dark/5`.
// Let's replace them back to white in the footer.
footerContent = footerContent.replace(/text-brand-dark\/60/g, 'text-white/60');
footerContent = footerContent.replace(/text-brand-dark\/40/g, 'text-white/40');
footerContent = footerContent.replace(/border-brand-dark\/10/g, 'border-white/10');
footerContent = footerContent.replace(/border-brand-dark\/5/g, 'border-white/5');
footerContent = footerContent.replace(/bg-brand-dark\/5/g, 'bg-white/5');
footerContent = footerContent.replace(/hover:text-brand-dark/g, 'hover:text-white');

// Also add text-white to the footer tag
footerContent = footerContent.replace('<footer className="bg-brand-dark', '<footer className="bg-brand-dark text-white');

content = content.substring(0, footerStart) + footerContent + content.substring(footerEnd);

fs.writeFileSync('src/App.tsx', content);
console.log("Footer fixed");
