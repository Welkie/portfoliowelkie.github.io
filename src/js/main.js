import '../css/style.css';
import { initCanvas } from './canvas.js';
import { typeWriter, initScrollReveal } from './ui.js';

console.log('Portfolio Loaded');

document.addEventListener('DOMContentLoaded', () => {
    initCanvas();
    typeWriter("Artificial Intelligence Undergraduate", "typing-text");
    initScrollReveal();
});
