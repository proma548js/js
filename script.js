'use strict';
const appData = {
    title: "",
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger();
    },
    isNamber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    asking: function () {
        do {
            appData.title = prompt('Как называется ваш проект?', "1");
        }
        while (appData.isNamber(appData.title));

        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt('Какие типы экранов нужно разработать?');
            }
            while (appData.isNamber(name));





            let price = 0;

            do {
                price = prompt('Сколько будет стоить данная работа?', "9999");
            }
            while (!appData.isNamber(price));

            appData.screens.push({ id: i, name: name, price: price });
        }


        for (let i = 0; i < 2; i++) {
            let name;
            do {
                name = prompt('Какой дополнительный тип услуги нужен?');
            }
            while (appData.isNamber(name));


            let price = 0;

            do {
                price = prompt('Сколько это будет стоить');
            } while (!appData.isNamber(price));
            appData.services[name] = +price;
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте");

    },
    addPrices: function () {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
        }
        for (let key in appData.screenPrice) {
            appData.allServicePrices += appData.screenPrice[key];
        }
    },


    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice - (appData.fullPrice * (appData.rollback / 100)));
    },
    getTitle: function () {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase();
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
        console.log(appData.screens);
    },

};

appData.start();







