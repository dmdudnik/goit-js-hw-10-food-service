import './sass/main.scss';
import './styles.css';
const menuItems = require('./menu.json');
import menuTpl from '../src/templates/menuItem.hbs';

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

function checkboxState() {
  localStorage.setItem('theme', JSON.stringify(Theme));
  const getThemeItems = localStorage.getItem('theme');
  const themeItems = JSON.parse(getThemeItems);

  if (this.checked === true) {
    document.body.classList.add(themeItems.DARK);
    document.body.classList.remove(themeItems.LIGHT);
  } else {
    document.body.classList.add(themeItems.LIGHT);
    document.body.classList.remove(themeItems.DARK);
  }
}
refs.themeSwitch.addEventListener('change', checkboxState);
