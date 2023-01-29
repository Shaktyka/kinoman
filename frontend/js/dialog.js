// Задание: реализовать функцию-конструктор с методами open и close, для взаимодействия с диалогом.
// Должна возвращать dialog

function Dialog (dialogId, classToSow) {
    this.element = dialogId;
    this.classToShow = classToSow;
    // Метод открытия окна
    this.open = function() {
        let element = document.getElementById(this.element);
        element.classList.add(this.classToShow);
    }
    // Метод закрытия окна
    this.close = function() {
        let element = document.getElementById(this.element);
        element.classList.remove(this.classToShow);
    }
};

let modal = new Dialog('modal-bookmark', 'show-modal');

// modal.open();