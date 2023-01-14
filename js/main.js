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
