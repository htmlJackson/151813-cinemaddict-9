import {searchMarkup} from './components/search.js';
import {rankMarkup} from './components/rank.js';
import {menuMarkup} from './components/menu.js';
import {cardMarkup} from './components/card.js';
import {showmoreMarkup} from './components/showmore.js';
import {popupMarkup} from './components/popup.js';
import {filmsContainerMarkup} from './components/films-container.js';

const renderElement = (container, markup) => {
  container.insertAdjacentHTML(`beforeend`, markup);
};

const CARDS = {
  listed: 5,
  topRated: 2,
  mostCommented: 2
};

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

renderElement(headerElement, searchMarkup);
renderElement(headerElement, rankMarkup);

renderElement(mainElement, menuMarkup);
renderElement(mainElement, filmsContainerMarkup);

const films = document.querySelector(`.films`);

const filmsList = films.querySelector(`.films-list`);
const filmsListContainer = filmsList.querySelector(`.films-list__container`);

const filmsListTopRatedContainer = films.querySelectorAll(`.films-list--extra`)[0].querySelector(`.films-list__container`);
const filmsListMostCommentedContainer = films.querySelectorAll(`.films-list--extra`)[1].querySelector(`.films-list__container`);

for (let i = 0; i < CARDS.listed; i++) {
  renderElement(filmsListContainer, cardMarkup);
};

renderElement(filmsList, showmoreMarkup);

for (let i = 0; i < CARDS.topRated; i++) {
  renderElement(filmsListTopRatedContainer, cardMarkup);
};

for (let i = 0; i < CARDS.mostCommented; i++) {
  renderElement(filmsListMostCommentedContainer, cardMarkup);
};
