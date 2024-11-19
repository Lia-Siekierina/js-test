import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  new Accordion('#faqAccordion', {
    duration: 300, // Animation duration in ms
    showMultiple: false, // Only one item open at a time
    openOnInit: [0], // First item open by default
  });
});