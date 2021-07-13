let burgerBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu')

burgerBtn.addEventListener('click', function() {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
}) 
