import {createSearchMarkup} from './components/search.js';
import {createRankMarkup} from './components/rank.js';
import {createMenuMarkup} from './components/menu.js';
import {createCardMarkup} from './components/card.js';
import {createShowmoreMarkup} from './components/showmore.js';
import {createPopupMarkup} from './components/popup.js';
import {createFilmsContainerMarkup} from './components/films-container.js';

const render = (container, markup) => {
  container.insertAdjacentHTML(`beforeend`, markup);
};

const CARDS = {
  listed: 5,
  topRated: 2,
  mostCommented: 2
};

const headerElement = document.querySelector(`.header`);
const mainElement = document.querySelector(`.main`);

render(headerElement, createSearchMarkup());
render(headerElement, createRankMarkup());

render(mainElement, createMenuMarkup());
render(mainElement, createFilmsContainerMarkup());

const films = document.querySelector(`.films`);

const filmsList = films.querySelector(`.films-list`);
const filmsListContainer = filmsList.querySelector(`.films-list__container`);

const filmsListTopRatedContainer = films.querySelectorAll(`.films-list--extra`)[0].querySelector(`.films-list__container`);
const filmsListMostCommentedContainer = films.querySelectorAll(`.films-list--extra`)[1].querySelector(`.films-list__container`);

for (let i = 0; i < CARDS.listed; i++) {
  render(filmsListContainer, createCardMarkup());
};

render(filmsList, createShowmoreMarkup());

for (let i = 0; i < CARDS.topRated; i++) {
  render(filmsListTopRatedContainer, createCardMarkup());
};

for (let i = 0; i < CARDS.mostCommented; i++) {
  render(filmsListMostCommentedContainer, createCardMarkup());
};
