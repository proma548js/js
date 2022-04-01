'use strict';
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', "пример: 12000");
let adaptive = window.confirm("Нужен ли адаптив на сайте");
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let rollback = 20;
let fullPrice;
let servicePercentPrice;
let allServicePrices;

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

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2;
};
function getFullPrice() {
    return screenPrice + allServicePrices;
}

const getTitle = function (str) {
    //return str.replace(/^ +| +$|( ) +/g, "$1").charAt(0).toUpperCase();
    //return title.toUpperCase();
    //return str[0,1].toUpperCase().replace(/^ +| +$|( ) +/g, "$1");
   // return str.trim().toUpperCase()+ str.slice(1);
   return str.trim()[0].toUpperCase() + str.trim().substr(1).toLowerCase(1);
};
const getServicePercentPrices = function(){
    return fullPrice - (fullPrice - (fullPrice * (rollback / 100))); 
};


allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
title = getTitle(title);
servicePercentPrice =getServicePercentPrices();

showTypeof(title);
showTypeof(screenPrice);
showTypeof(adaptive);


console.log(servicePercentPrice);
console.log(getRollbackMessage(fullPrice));
console.log(allServicePrices);
console.log(fullPrice);
console.log(title);
