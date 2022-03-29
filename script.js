'use strict';
let title = prompt('Как называется ваш проект?');
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
let screenPrice = +prompt('Сколько будет стоить данная работа?', "пример: 12000");
let rollback = 20;
let adaptive = window.confirm("Нужен ли адаптив на сайте");
let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = +prompt('Сколько это будет стоить?');
let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2 = +prompt('Сколько это будет стоить?');
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let servicePercentPrice = (fullPrice - 100);
//alert("hello world");
//console.log("hi");
//----------lesson2---------------
/*console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.length);
console.log("Стоимость верстки экранов в рублях:", screenPrice, "Стоимость верстки экранов в долларах:", screenPrice / 3.2, "Стоимость верстки экранов в юанях:", screenPrice / 5);
console.log("Стоимость разработки сайта в рублях:", fullPrice, "Стоимость разработки сайта в долларах:", fullPrice / 3.2, "Стоимость разработки сайта в юанях:", fullPrice / 5);
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));*/
//-----------lesson3---------------
console.log(title);
console.log(screens);
console.log(parseFloat(screenPrice));
console.log(adaptive);
console.log(service1);
console.log(parseFloat(servicePrice1));
console.log(service2);
console.log(parseFloat(servicePrice2));
console.log(parseFloat(fullPrice));
console.log(Math.round(servicePercentPrice));
if (fullPrice > 30000) {
    console.log('Даем скидку в 10%');
} else if (15000 <= fullPrice && 30000 >= fullPrice) {
    console.log('Даем скидку в 5%');
} else if (0 <= fullPrice && 15000 >= fullPrice) {
    console.log('Скидка не предусмотрена');
} else   {
    console.log('Что то пошло не так');
}


