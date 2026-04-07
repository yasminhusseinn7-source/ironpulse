
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('#nav-list');
menu.addEventListener('click', function() {

    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


const navItems = document.querySelectorAll('#nav-list li a');

navItems.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
    });
});