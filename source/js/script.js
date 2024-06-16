let header = document.querySelector('.header');
let headerNavigation = document.querySelector('.header__navigation');
let headerButton = document.querySelector('.header__button');


header.classList.remove('header--nojs');
headerNavigation.classList.add('header__navigation--closed');
headerButton.classList.add('header__button--open');


headerButton.addEventListener('click', function() {
  if (headerNavigation.classList.contains('header__navigation--closed'))
  {
    headerButton.classList.remove('header__button--open')
    headerButton.classList.add('header__button--closed')
    headerNavigation.classList.add('header__navigation--open')
    headerNavigation.classList.remove('header__navigation--closed')
  } else
  {
    headerButton.classList.remove('header__button--closed');
    headerButton.classList.add('header__button--open');
    headerNavigation.classList.remove('header__navigation--open')
    headerNavigation.classList.add('header__navigation--closed')
  }
});
