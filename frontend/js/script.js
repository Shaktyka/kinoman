const addFilmButton = document.getElementById('add');
const watchButton = document.getElementById('watch');
const bookmarkModal = document.querySelector('.modal--bookmark');

// Открытие окна добавления закладки
const openBookmarkModal = () => {
    bookmarkModal.classList.add('show');
};

// Закрытие окна добавления закладки
const closeBookmarkModal = () => {
    bookmarkModal.classList.remove('show');
};

// Вешаем обработчик на кнопку открытия окна добавить фильм
addFilmButton.addEventListener('click', () => {
    openBookmarkModal();
});
