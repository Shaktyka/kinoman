const moviesList = document.querySelector('.movies__list');

// Рендеринг одной карточки фильма
const renderMovieCard = (data) => {
    const genresString = data.genres.join(', ');
    // С состоянием кнопок разобраться

    return `<li class="movies__item">
        <article class="movie">
            <div class="movie__img-wrap">
                <img class="movie__img" src="${data.poster_url}" alt="${data.title}">
            </div>
            <div class="movie__info">
                <span class="movie__year">${data.year}</span>
                <h3 class="movie__title">${data.title}</h3>
                <p class="movie__genres">${genresString}</p>
                <div class="movie__buttons">
                    <button class="button-round button-like" type="button" name="add-to-favorite">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.34255 3.7779C1.5687 3.23194 1.90017 2.73586 2.31804 2.31799C2.7359 1.90012 3.23198 1.56865 3.77795 1.3425C4.32392 1.11635 4.90909 0.999954 5.50004 0.999954C6.09099 0.999954 6.67616 1.11635 7.22213 1.3425C7.7681 1.56865 8.26417 1.90012 8.68204 2.31799L10 3.63599L11.318 2.31799C12.162 1.47407 13.3066 0.999966 14.5 0.999966C15.6935 0.999966 16.8381 1.47407 17.682 2.31799C18.526 3.16191 19.0001 4.30651 19.0001 5.49999C19.0001 6.69347 18.526 7.83807 17.682 8.68199L10 16.364L2.31804 8.68199C1.90017 8.26413 1.5687 7.76805 1.34255 7.22208C1.1164 6.67611 1 6.09095 1 5.49999C1 4.90904 1.1164 4.32387 1.34255 3.7779Z" fill="transparent" stroke="#34343E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                    <button class="button-done" type="button" name="watched">
                        <span>
                            Просмотрено
                            <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.125 9.125L6.625 13.625L17.875 2.375" stroke="#FDFDFD" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </article>
    </li>`;
};

// Отдаёт сообщение, что закладки отсутствуют
const renderEmptyMessage = () => {
    return `<p class="error-message">Пока нет ни одной закладки. Добавьте одну.</p>`;
};

// Рендерит список карточек на страницу:
const renderMovieCards = (container, movies) => {
    container.textContent = '';
    const moviesLength = movies.length;

    if (moviesLength === 0) {
        container.innerHTML = renderEmptyMessage();
    } else {

        movies.forEach((movie, i) => {
            const movieCard = renderMovieCard(movie);
            container.innerHTML += movieCard;
        });

    }
};

// Запуск 
const start = () => {
    // Получение списка фильмов из БД
    // Отрисовка списка карточек фильмов
    renderMovieCards(moviesList, movies);
};

start();
