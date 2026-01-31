// CSS loaded via link tag in HTML
import { initCanvas } from './canvas.js';
import { typeWriter, initScrollReveal } from './ui.js';

console.log('Portfolio Loaded');

document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    typeWriter("Artificial Intelligence Undergraduate", "typing-text");
    initScrollReveal();
});
