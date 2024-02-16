import './contentScript.css';

console.log('contentScript/main.ts loaded');

const el = document.createElement('div');
el.textContent = 'This is a content script';
el.id = 'injectedDiv';
document.body.appendChild(el);
