// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const buttons = document.querySelectorAll('.count-products__item');
if(buttons.length) {
   buttons.forEach(button => {
      button.addEventListener('click', function() {
         button.classList.toggle('_active');
      })
   });
}
