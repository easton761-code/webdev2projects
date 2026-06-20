

import { films } from "../data/films.js";

const movieGallery = document.querySelector("#movieGallery");
const btnList = document.querySelector("#listView");
const btnGrid = document.querySelector("#gridView");

function formatReleaseDate(releaseDate) {
    const date = new Date(releaseDate);
    return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
}

function getPosterUrl(film) {
    return `https://resources.dgmuvu.com/films/${film.episode_id}.webp`;
}

function createFilmCard(film) {
    const card = document.createElement('article');
    card.className = 'movie-card';
    card.innerHTML = `
        <img class="movie-poster" src="${getPosterUrl(film)}" alt="${film.title} poster">
        <div class="movie-details">
            <h2>${film.title}</h2>
            <p><strong>Director:</strong> ${film.director}</p>
            <p><strong>Producer:</strong> ${film.producer}</p>
            <p><strong>Release Date:</strong> ${formatReleaseDate(film.release_date)}</p>
        </div>
    `;
    return card;
}

function displayFilms(filmList) {
    movieGallery.innerHTML = '';
    filmList.forEach(film => {
        movieGallery.appendChild(createFilmCard(film));
    });
}

function updateToggleButtons(mode) {
    btnList.style.display = mode === 'grid' ? 'inline-flex' : 'none';
    btnGrid.style.display = mode === 'list' ? 'inline-flex' : 'none';
}

function setViewMode(mode) {
    movieGallery.classList.toggle('grid-view', mode === 'grid');
    movieGallery.classList.toggle('list-view', mode === 'list');
    updateToggleButtons(mode);
}

btnList.addEventListener('click', () => setViewMode('list'));
btnGrid.addEventListener('click', () => setViewMode('grid'));

setViewMode('grid');
displayFilms(films);

