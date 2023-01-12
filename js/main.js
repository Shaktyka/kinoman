// Отдаёт имя и фамилию одной строкой
function getFullName () {
    return this.firstName + ' ' + this.lastName;
}

// Отдаёт инициалы человека:
function getInitials () {
    return this.lastName;
}

function User (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getFullName = getFullName;
    this.getInitials = getInitials;
};

const newUser = new User('Елена', 'Петренко');

console.log(newUser.getFullName());