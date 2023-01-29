// Отдаёт имя и фамилию одной строкой
function getFullName () {
    return this.firstName + ' ' + this.lastName;
}

// Отдаёт инициалы человека:
function getInitials () {
    return `${this.firstName[0]}.${this.lastName[0]}.`; ;
}

function User (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = getFullName;
    this.getInitials = getInitials;
};

const newUser = new User('Елена', 'Петренко');

// console.log(newUser.getInitials());

const transformTo = (obj, typeName) => {
    let valueOfNewType;

    if (typeName === 'string') {
        valueOfNewType = String(obj);
    } else if (typeName === 'number') {
        valueOfNewType = Number(obj);
    } else if (typeName === 'boolean') {
        valueOfNewType = Boolean(obj);
    } else {
        valueOfNewType = 'Метод неизвестен';
    }

    console.log(valueOfNewType);
};

// transformTo("123", "number");
// transformTo(345, "string");
// transformTo(345, "boolean");

// Напишите функцию, которая может найти элемент и добавить ей атрибуты с помощью переданного объекта.
const findAndSet = (selector, attributes) => {

    const element = document.querySelector(selector);

    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }

    return element;
};

// const elem1 = findAndSet(".copy", {
//     title: "Hyper Text Markup Language",
//     id: "HTML-addr"
// });

/*
Напишите две функции:

Которая создает элемент и возвращает его, принимая первым аргументов название тега, 
а вторым - объект с атрибутами.
const element = makeElement("div", {
	class: "Hello",
	id: "hi"
})
*/

const makeElement = ( tagName, params ) => {
    const element = document.createElement(tagName);

    for (let key in params) {
        element.setAttribute(key, params[key]);
    }

    return element;
};

const element = makeElement("div", {
	class: "Hello",
	id: "hi"
});

// console.log(element);

/*
Которая принимает первым параметром элемент, в который нужно добавить элемент, переданный вторым параметром.
mount(containerElement, childElement)
*/
const mount = (container, childElement) => {
    if (container) {
        container.append(childElement);
    }
};
