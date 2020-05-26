// открытие/закрытие меню
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.page-header__toggle');
var colorHeader = document.querySelector(".page-header__control");

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('page-header__toggle--nojs');
colorHeader.classList.add('page-header__background');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.add('page-header__toggle--opened');
    colorHeader.classList.remove("page-header__background");
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.remove('page-header__toggle--opened');
    colorHeader.classList.add("page-header__background");
  }
});
