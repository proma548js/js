const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const adv = document.querySelectorAll('.adv');
const body = document.querySelector('body');
const booksThree =book[4].querySelector('h2 a');
const booksOne =book[0].querySelectorAll('li');
const booksThreeLi =book[5].querySelectorAll('li');
const booksSixLi =book[2].querySelectorAll('li');
const cloneElement =booksThreeLi[2].cloneNode(true);

book[0].before(book[1]);
book[2].before(book[4]);
book[5].before(book[2]);
book[2].before(book[5]);
body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';
booksThree.innerHTML = 'Книга 3. this и Прототипы Объектов';
adv[0].remove();
booksOne[3].after(booksOne[6]);
booksOne[6].after(booksOne[8]);
booksOne[9].after(booksOne[2]);

booksThreeLi[1].after(booksThreeLi[9]);
booksThreeLi[9].after(booksThreeLi[3]);
booksThreeLi[3].after(booksThreeLi[4]);
booksThreeLi[7].after(booksThreeLi[5]);
cloneElement.textContent ='Глава 8: За пределами ES6';
book[2].append(cloneElement);
booksSixLi[8].after(cloneElement);



console.log(books);
console.log(book);
console.log(body);
console.log(booksThree);
console.log(booksOne);
console.log(booksThreeLi);
console.log(cloneElement);
console.log(booksSixLi);