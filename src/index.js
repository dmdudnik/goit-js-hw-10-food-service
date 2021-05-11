import './sass/main.scss';
import './styles.css';
const menuItems = require('./menu.json');
import menuTpl from './templates/menuItem.hbs';

const refs = {
  menuContainer: document.querySelector('.js-menu'),
  themeSwitch: document.querySelector('#theme-switch-toggle'),
};

const cardsMarkup = createCardsMarkup(menuItems);

refs.menuContainer.insertAdjacentHTML('beforeend', cardsMarkup);
function createCardsMarkup(menuItems) {
  return menuItems.map(menuItem => menuTpl(menuItem)).join('');
}

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const getThemeItems = localStorage.getItem('theme');
const themeItems = JSON.parse(getThemeItems);
document.body.classList.add(themeItems);

if (themeItems === 'dark-theme') {
  refs.themeSwitch.setAttribute('checked', checkedToggle);
  localStorage.setItem('checkbox1', refs.themeSwitch.checked);
  const checkedToggle = JSON.parse(localStorage.getItem('checkbox1'));
}

function changeTheme() {
  event.preventDefault();
  if (this.checked) {
    localStorage.setItem('theme', JSON.stringify(Theme.DARK));
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    localStorage.setItem('theme', JSON.stringify(Theme.LIGHT));
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }
}

refs.themeSwitch.addEventListener('change', changeTheme);
