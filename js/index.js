const fs = require('fs');
const rl = require('readline');
const ctp = require('console-table-printer');
const csvToObject = require('./csv-to-object');

// const result = csvToObject(fs.readFileSync('db.csv', 'utf-8'));

// const str = fs.readFileSync('strings.txt', 'utf-8');
// console.log(str);

// Перезаписывает файл
// fs.writeFileSync('strings.txt', 'Новый текст');

// Добавляет в файл
// fs.appendFileSync('strings.txt', 'Новый текст');

const terminal = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

const showTable = (filePath) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const csvAsObject = csvToObject(fileContent);
    ctp.printTable(csvAsObject);
};

terminal.question('Введите команду:\n>> ', (commandName) => {
    if (commandName === 'show') {
        terminal.question('Введите путь до файла:\n>> ', (filePath) => {
            terminal.close();
            showTable(filePath);
        });
    };
    
    if (commandName === 'save') {
        terminal.question('Введите данные:\n>> ', (data) => {
            terminal.question('Введите путь до файла:\n>> ', (filePath) => {
                terminal.close();
                
                const tableRow = data.split(' ').join(',') + '\n';
                fs.appendFileSync(filePath, tableRow);
                showTable(filePath);
            });
        });
    }
});
