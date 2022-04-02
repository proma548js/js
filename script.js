'use strict';
let title;
let screens;
let screenPrice;
let adaptive;

let rollback = 20;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

let service1;
let servicePrice1;
let service2;
let servicePrice2;

const isNamber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function () {
    title = prompt('Как называется ваш проект?', "1");
    screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные", "1");

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?', "9999");
    }
    while (!isNamber(screenPrice));

    let adaptive = window.confirm("Нужен ли адаптив на сайте", "1");

}

const getAllServicePrices = function () {

    let sum = 0;
    let sum2 = 0;
    let sum3;
    for (let i = 0; i < 2; i++) {
        if (i === 0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i === 1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }
        if (i === 0) {
            do { sum = prompt('Сколько это будет стоить'); }
            while (!isNamber(sum));
        } else if (i === 1) {
            do { sum2 = prompt('Сколько это будет стоить'); }
            while (!isNamber(sum2));
        }
        sum = +sum;
        sum2 = +sum2;
        sum3 = sum + sum2;
    }
    return sum3;

};


const showTypeof = function (variable) {
    console.log(variable, typeof variable);
};

const getRollbackMessage = function (cena) {
    if (cena > 30000) {
        return 'Даем скидку в 10%';
    } else if (15000 <= cena && 30000 >= cena) {
        return 'Даем скидку в 5%';
    } else if (0 <= cena && 15000 > cena) {
        return ('Скидка не предусмотрена');
    } else {
        return 'Что то пошло не так';
    }

};


function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle = function (str) {
    return str.trim()[0].toUpperCase() + str.trim().substr(1).toLowerCase();
};
const getServicePercentPrices = function () {
    return fullPrice - (fullPrice - (fullPrice * (rollback / 100)));
};

asking();
screenPrice = +screenPrice;
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle(title);
servicePercentPrice = getServicePercentPrices();

showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);

console.log("allServicePrices", allServicePrices);
console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log(allServicePrices);
console.log(fullPrice);
console.log(title);
console.log(typeof allServicePrices);






