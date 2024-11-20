
import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', () => {
  
  const faqItems = document.querySelectorAll('.faq-item');

  const firstAnswer = faqItems[0].querySelector('.faq-answer');
  const firstArrow = faqItems[0].querySelector('.faq-arrow');
  firstAnswer.classList.add('show');
  firstArrow.classList.add('open');  


  faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const arrow = item.querySelector('.faq-arrow');

    questionButton.addEventListener('click', () => {
      const isExpanded = answer.classList.contains('show');
      
      
      faqItems.forEach(i => {
        i.querySelector('.faq-answer').classList.remove('show');
        i.querySelector('.faq-arrow').classList.remove('open');
      });

      
      if (!isExpanded) {
        answer.classList.add('show');
        arrow.classList.add('open');
      }
    });
  });
});