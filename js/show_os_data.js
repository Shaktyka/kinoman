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

// Выводит в консоль данные:
const showTable = (dataObject) => {
    ctp.printTable(dataObject);
};

// Вычисляет значение для переданного параметра
const getParamValue = (param) => {
    let paramObj = {};

    if (param === 'uptime') {
        paramObj[param] = os.uptime();

    } else if (param === 'freemem') {
        paramObj[param] = `${os.freemem() / 1000000000}Гб из ${os.totalmem() / 1000000000}Гб`;

    } else if (param === 'cores') {
        paramObj[param] = os.cpus().length;

    } else if (param === 'procmodel') {
        paramObj[param] = os.cpus()[0].model;

    } else if (param === 'arch') {
        paramObj[param] = os.arch();

    } else if (param === 'hostname') {
        paramObj[param] = os.hostname();

    } else {
        paramObj[param] = 'Неизвестно';
    }

    return paramObj;
};

// Собирает массив данных
const getParamsData = (param) => {
    const paramsArr = [];
    let paramObj;

    // Передан параметр:
    if (param) {
        paramObj = getParamValue(param);
        paramsArr.push(paramObj);

    // Если надо вывести все:
    } else {
        for (let oneParam in params) {
            paramObj = getParamValue(params[oneParam]);
            paramsArr.push(paramObj);
        }
    }
    
    return paramsArr;
};

// Получить запрос пользователя:
terminal.question('Введите "all", если хотите увидеть все параметры, или название определённого параметра:\n>> ', (text) => {

    if (text === 'all') {

        terminal.close();

        // Сбор массива объектов параметров
        const paramsArray = getParamsData();
        // Выводит таблицу:
        showTable( paramsArray );

    } else {

        terminal.close();

        // Проверка существования параметра
        if (params[text]) {
            // Если есть, то расчёт значения и вывод таблицы:
            const paramsArray = getParamsData(params[text]);

            showTable( paramsArray );
        } else {
            console.log('Такого параметра не существует');
        }

    }
});
