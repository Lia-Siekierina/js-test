// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';


//   document.addEventListener('DOMContentLoaded', () => {
//     const accordion = new Accordion('.faq-list', {
//       duration: 300,          // Тривалість анімації (мс)
//       showMultiple: false,    // Тільки один пункт відкритий одночасно
//       openOnInit: [0],        // Відкрити перший пункт за замовчуванням
//       elementClass: 'faq-item',   // Клас для пункту списку
//       triggerClass: 'faq-question', // Клас кнопки для питання
//       panelClass: 'faq-answer',    // Клас панелі для відповіді
//     });
  
//     console.log('Accordion initialized', accordion);
//   });


  // Імпортуємо бібліотеку Accordion (якщо потрібно через npm)
import Accordion from 'accordion-js';

document.addEventListener('DOMContentLoaded', () => {
  // Вибираємо всі елементи FAQ
  const faqItems = document.querySelectorAll('.faq-item');
  
  // Спочатку відкриваємо першу відповідь
  const firstAnswer = faqItems[0].querySelector('.faq-answer');
  firstAnswer.classList.add('show');  // Додаємо клас 'show' для показу першої відповіді

  // Додаємо обробник події для кожного питання
  faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionButton.addEventListener('click', () => {
      // Якщо відповідь вже відкрита, ми її закриваємо
      const isExpanded = answer.classList.contains('show');
      
      // Закриваємо всі відповіді
      faqItems.forEach(i => {
        i.querySelector('.faq-answer').classList.remove('show');
      });

      // Якщо відповідь була закрита, відкриваємо її
      if (!isExpanded) {
        answer.classList.add('show');
      }
    });
  });
});