const btnAll = document.querySelectorAll(".nav-btn");
const podulAll = document.querySelectorAll(".second-menu");
const arrow = document.querySelectorAll('.arrow');
const divBack = document.querySelector('.div-back');
const section = document.querySelector('section');
const navMenu = document.querySelector('.main-nav')
const sectionMenu = document.querySelector('.section-nav-menu')
const links = document.querySelectorAll('.link');
// Меню бургер
const burgerMenu = document.querySelector('.menu-burger-header');
const menuBody = document.querySelector('.menu__body');
if (burgerMenu) {
	burgerMenu.addEventListener("click", function (e) {
        clear();
        sectionMenu.classList.toggle('menu-activ');
        burgerMenu.classList.toggle('active-burger')
        document.body.classList.toggle('lock');
        divBack.classList.toggle('back-active');
	});
}
links.forEach(link => {
    link.addEventListener("click", function (e) {
        closeee();
    });
});
function closeee() {
    clear();
    sectionMenu.classList.remove('menu-activ');
    burgerMenu.classList.remove('active-burger')
    divBack.classList.remove('back-active')
    document.body.classList.remove('lock');
}

function add(element) {
    clear();
    element.classList.add('active');
    document.body.classList.add('lock');
    element.children[0].classList.add('arrow-active');
    element.parentNode.children[1].classList.add('active-second-menu');
    divBack.classList.add('back-active');
}
function backToMainMenu(){
    podulAll.forEach(el => {
        el.classList.remove('active-second-menu')
    });
    btnAll.forEach(el => {
        el.classList.remove('active')
    });
}
function clear() {
    podulAll.forEach(el => {
        el.classList.remove('active-second-menu')
    });
    arrow.forEach(el => {
        el.classList.remove('arrow-active')
    });
    btnAll.forEach(el => {
        el.classList.remove('active')
    });
}