let mainNav = document.querySelector('.main-nav');
let openMenu = document.querySelector('.bar-menu');

openMenu.addEventListener('click', function () {
    mainNav.classList.toggle('display');
})