const openMenu = document.querySelector('.menu-open');
const closeMenu = document.querySelector('.menu-close');
const nav = document.querySelector('.nav');

openMenu.addEventListener('click', menuTog);
closeMenu.addEventListener('click', menuTog);

function menuTog(e) {
    nav.classList.toggle('active');
}