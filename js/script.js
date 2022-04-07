'use strict';
//console.dir(document.childNodes);//список узлов
//console.dir(document.body);//сразу к узлу body
//const title = document.getElementById('title');
//console.dir(title.textContent);//




const title = document.getElementsByTagName('h1')[0];
const buttonCountingDumping = document.getElementsByClassName('handler_btn');
const buttonPlus = document.querySelector('.screen-btn');
//const allOtherItems = document.querySelectorAll('.other-items ');
//const otherItemsPercent = document.allOtherItems.querySelectorAll('.number');
//const otherItemsNumber = document.allOtherItems.querySelectorAll('.percent');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');
const rollback = document.querySelector('.rollback input');
const span = document.querySelector('.rollback span');
const Input = document.getElementsByClassName('total-input')[0];
const Input1 = document.getElementsByClassName('total-input')[1];
const Input2 = document.getElementsByClassName('total-input')[2];
const Input3 = document.getElementsByClassName('total-input')[3];
const Input4 = document.getElementsByClassName('total-input')[4];
let screen = document.querySelectorAll('screen');



console.log(title);
console.log(buttonCountingDumping);
console.log(buttonPlus);
console.log(otherItemsPercent);
console.log(otherItemsNumber);
console.log(rollback);
console.log(span);
console.log(Input);
console.log(Input1);
console.log(Input2);
console.log(Input3);
console.log(Input4);

/*
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
*/