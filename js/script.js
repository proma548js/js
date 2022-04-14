'use strict';

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCounRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');


const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 20,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function () {
        this.addTitle();
        appData.start();
        startBtn.addEventListener('click', appData.start);
        buttonPlus.addEventListener('click', appData.addScreenBlock);

    },
    addTitle: function () {
        document.title = title.textContent;
    },
    start: function () {

        appData.addScreens();
        appData.addServices();
        //  appData.asking();
        //  appData.addPrices();
        //  appData.getFullPrice();
        //  appData.getServicePercentPrices();
        //  appData.getTitle();
        //  appData.logger();
    },

    addScreens: function () {
        screens = document.querySelectorAll('.screen')
        screens.forEach(function (screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;
            //console.log(select.value);
            //console.log(input.value);
            //console.log(select.options[select.selectedIndex].textContent);
            appData.screens.push({
                id: index,
                name: selectName,
                price: +select.value * +input.value
            });
        });


    },
    addServices: function () {
        otherItemsPercent.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            console.log(check);
            console.log(label);
            console.log(input);
            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        })
        otherItemsNumber.forEach(function (item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');
            console.log(check);
            console.log(label);
            console.log(input);
            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }

        });
        console.log(appData);
    },
    addScreenBlock: function () {
        const cloneScreen = screens[0].cloneNode(true);

        //console.log(cloneScreen);
        screens[screens.length - 1].after(cloneScreen);
    },
    asking: function () {

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?');
            let price = 0;

            do {
                price = prompt('Сколько это будет стоить');
            } while (!appData.isNamber(price));
            appData.services[name] = +price;
        }



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

appData.init();
