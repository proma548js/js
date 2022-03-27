let title = 'New projec';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 548;
let rollback = 20;
let fullPrice = 99999;
let adaptive = true;
//alert("hello world");
//console.log("hi");
//----------lesson2---------------
console.log(typeof (title));
console.log(typeof (fullPrice));
console.log(typeof (adaptive));
console.log(screens.toLowerCase().split(" "));
console.log("Стоимость верстки экранов в рублях:", screenPrice, "Стоимость верстки экранов в долларах:", screenPrice / 3.2, "Стоимость верстки экранов в юанях:", screenPrice / 5);
console.log("Стоимость разработки сайта в рублях:", fullPrice, "Стоимость разработки сайта в долларах:", fullPrice / 3.2, "Стоимость разработки сайта в юанях:", fullPrice / 5);
console.log(screens.toLowerCase());
console.log(fullPrice * (rollback / 100));