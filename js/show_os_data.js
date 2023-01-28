const os = require('os');
const rl = require('readline');
const ctp = require('console-table-printer');

/*
Написать программу, которая выводит данные о состоянии компьютера:

Время работы компьютера (uptime)   os.uptime();
Количество свободной ОЗУ к количеству всей ОЗУ. Например, 15Гб из 16Гб.   os.freemem(); os.totalmem();
Количество ядер процессора   os.cpus(); длина массива
Модель процессора   os.cpus() из объекта, ключ model
Архитектура процессора   os.arch();
Название хостовой машины   os.hostname(); 

Сделаю 2 варианта: показать значение конкретного параметра и список всех предусмотренных параметров
*/

// Параметры, которые можно получить:
const params = {
    uptime: 'uptime',
    freemem: 'freemem',
    cores: 'cores',
    procmodel: 'procmodel',
    arch: 'arch',
    hostname: 'hostname'
};

// Инициализация терминала:
const terminal = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Выводит в консоль данные в виде таблицы:
const showTable = (dataObject) => {
    ctp.printTable(dataObject);
};

// Вычисляет значение для переданного параметра:
const getParamValue = (param) => {
    let paramValue;

    if (param === 'uptime') {
        paramValue = os.uptime();

    } else if (param === 'freemem') {
        paramValue = `${os.freemem() / 1000000000}Гб из ${os.totalmem() / 1000000000}Гб`;

    } else if (param === 'cores') {
        paramValue = os.cpus().length;

    } else if (param === 'procmodel') {
        paramValue = os.cpus()[0].model;

    } else if (param === 'arch') {
        paramValue = os.arch();

    } else if (param === 'hostname') {
        paramValue = os.hostname();

    } else {
        paramValue = 'Неизвестно';
    }

    return paramValue;
};

// Собирает массив данных:
const getParamsArray = (param) => {
    const paramsArr = [];
    let paramObj = {};

    // Передан параметр:
    if (param) {
        paramObj[param] = getParamValue(param);
        paramsArr.push(paramObj);

    // Вывести все:
    } else {
        paramObj = { ...params };
        for (let param in paramObj) {
            paramObj[param] = getParamValue( paramObj[param] );
        }
        paramsArr.push( paramObj );
    }
    
    return paramsArr;
};

// Получить запрос пользователя:
terminal.question(
    'Введите "all", если хотите увидеть все параметры, или название определённого параметра:\n>> ', 
    (text) => {

    if (text === 'all') {

        terminal.close();

        // Сбор массива объектов параметров
        const paramsArray = getParamsArray();
        // Выводит таблицу:
        showTable( paramsArray );

    } else {

        terminal.close();

        // Проверка существования параметра
        if (params[text]) {

            // Расчёт значения и вывод таблицы:
            const paramsArray = getParamsArray( params[text] );
            showTable( paramsArray );

        } else {
            console.log('Такого параметра не существует');
        }

    }
});
