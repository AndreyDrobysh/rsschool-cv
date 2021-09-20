const burgerWrapper = document.querySelector('.burger_menu');
const burgerMenu = document.querySelector('.btn_menu')
const burgerLine = document.querySelector('.line_menu')
const nav = document.querySelector('nav')

burgerWrapper.addEventListener('click', burger)


let checkMenu = false;

function burger() {
  if (!checkMenu) {
    burgerMenu.classList.add('active');
    burgerLine.classList.add('active_line');
    nav.style.display = "block"
    checkMenu = true;
  } else {
    burgerMenu.classList.remove('active');
    burgerLine.classList.remove('active_line');
    nav.style.display = "none"
    checkMenu = false;
  }
}

console.log("Все условия не указанные в 'Минусы:' выполнены");

console.log("Минусы:");
console.log("Нет видеорезюме (- 10 баллов)");

console.log("Последний пункт про дизайн оформления СV не ниже чем в примерах. На выбор проверяющего :)");
