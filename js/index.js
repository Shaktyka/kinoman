const fs = require('fs');
const rl = require('readline');

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

terminal.question('What is your name?\n>> ', (data) => {
    console.log(data);
    terminal.close();
});
