'use strict';
const appData = {
    title: "",
    screens: "",
    screenPrice: 0,
    adaptive: true,
    rollback: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: "",
    service2: "",
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', "1");
        appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные", "1");

        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?', "9999");
        }
        while (!appData.isNamber(appData.screenPrice));

        appData.adaptive = window.confirm("Нужен ли адаптив на сайте", "1");

    },
    isNamber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    getAllServicePrices: function () {
        let sum = 0;

        for (let i = 0; i < 2; i++) {
            let price = 0;

            if (i === 0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i === 1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }
            do {
                price = prompt('Сколько это будет стоить');
            } while (!appData.isNamber(price));
            sum += +price;
        }
        return sum;
    },
    getRollbackMessage: function (cena) {
        if (cena > 30000) {
            return 'Даем скидку в 10%';
        } else if (15000 <= cena && 30000 >= cena) {
            return 'Даем скидку в 5%';
        } else if (0 <= cena && 15000 > cena) {
            return ('Скидка не предусмотрена');
        } else {
            return 'Что то пошло не так';
        }

    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function () {
        return appData.fullPrice - (appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },
    getTitle: function () {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
    },
    logger: function () {

        for (let key in appData) {
            if (typeof (appData[key]) === 'object') {

                for (let i in appData[key]) {
                    console.log(`Свойство ${i} имеет значение ${appData[key][i]}`);
                }
            }
            else {
                console.log(`Свойство ${key} имеет значение ${appData[key]}`);
            }
        }

    },

    start: function () {
        appData.asking();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.logger();
    },


};

appData.start();







