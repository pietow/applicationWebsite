const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
//Array of items
const navItems = document.querySelectorAll('.menu-nav__item');

//Variable
let showMenu = false;

//if click event then activate function toggleMenu
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  //if showMenu is false
  if (!showMenu) {
    //the menu has the status 'open', that status is used in Sass

    hamburger.classList.add('open');

    nav.classList.remove('closed')
    menuNav.classList.remove('closed')

    nav.classList.add('open');
    menuNav.classList.add('open');

    //loop through each item
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
    //if open, the 'open' status is removed
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');

    nav.classList.add('closed')
    menuNav.classList.add('closed')

    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;

  }
}