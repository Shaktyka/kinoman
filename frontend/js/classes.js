const addBookmarkButton = document.getElementById('add');
const closeBookmarkButton = document.getElementById('bookmark-cancel');

// Вешаем обработчик на кнопку открытия окна добавить фильм
addBookmarkButton.addEventListener('click', () => {
    dialog.open();
});

closeBookmarkButton.addEventListener('click', () => {
    dialog.close();
});

/*
class User {
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    sayHi() {
        console.log(this.name, this.role);
    }
}

const user = new User('Елена', 'Тимлид');

user.sayHi();
*/

class ApiService {
    constructor () {
        this.db = {};
        this.lastId = 1;
    }

    create (movieRecord) {
        this.db[ this.lastId ] = movieRecord;
        const result = {
            ...movieRecord,
            id: this.lastId
        }
        this.lastId++;
        return result;
    }
}

const apiService = new ApiService();

class Dialog {
    constructor(dialogId, classToSow, onSaveClick) {
        this.element = document.getElementById(dialogId);
        this.classToShow = classToSow;
        this.submitButton = document.getElementById('bookmark-submit');
        this.bookmarkAddForm = document.forms.bookmarkCreate;

        if ( typeof onSaveClick === 'function' ) {
            this.submitButton.addEventListener('click', (evt) => {
                onSaveClick();
            })
        }
    }

    // Метод открытия окна
    open() {
        this.element.classList.add(this.classToShow);
    }
    // Метод закрытия окна
    close() {
        this.element.classList.remove(this.classToShow);
        this.bookmarkAddForm.reset();
    }
}

// Обработчик клика по кнопке отправки
const onSaveClick = () => {
    const movieRecord = {
       id: null,
       name: "Убить Билла часть 2"
    };

    const result = apiService.create(movieRecord);
    console.log(result);
};

const dialog = new Dialog('modal-bookmark', 'show-modal', onSaveClick);

// dialog.open();
