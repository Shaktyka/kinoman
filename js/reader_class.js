
class Reader {
    constructor(fio, libraryCardNum, facultyName, dateOfBirth, phone) {
        this.fio = fio;
        this.libraryCard = libraryCardNum;
        this.faculty = facultyName;
        this.dateOfBirth = dateOfBirth;
        this.phone = phone;
    }

    // Если передать число, то покажется сообщение в консоль, 
    // о том что конкретный читатель взял или вернул столько-то книг
    // Если передать строку, то покажется что читатель взял или вернул книгу под названием и имя книги
    takeBook(value) {
        let message;
        if ( typeof value === 'number' ) {
            message = `Читатель ${this.fio} взял(а) книги. Количество: ${value}.`;
        } else if ( typeof value === 'string' ) {
            message = `Читатель ${this.fio} взял(а) книгу под названием «${value}».`;
        }
        console.log(message);
    }

    returnBook(value) {
        let message;
        if ( typeof value === 'number' ) {
            message = `Читатель ${this.fio} вернул(а) книги. Количество: ${value}.`;
        } else if ( typeof value === 'string' ) {
            message = `Читатель ${this.fio} вернул(а) книгу под названием «${value}».`;
        }
        console.log(message);
    }
};

const reader = new Reader('Елена', '555', 'Биология', new Date(2023, 1, 10), '+79174700506');

// reader.takeBook(2);
// reader.returnBook(1);
// reader.returnBook("Мастер и Маргарита");
