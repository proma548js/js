'use strict';

let isNumber = function (number) {
    return !isNaN(parseFloat(number)) && isFinite(number);
};

let numberRandom = function (min, max) {
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    return rand;
};

let RandomNumber = function (numberFunc) {

    let NumberY = numberFunc;
    console.log(NumberY);

    let Input = function () {
        let numberX = prompt('Угадай чисто от 1 до 100');

        if (numberX === null) {
            alert('Игра окончена');
            return;
        }

        if (!isNumber(numberX)) {
            alert('Введи число');
        } else if (numberX > NumberY) {
            alert('Загаданное число меньше');
        } else if (numberX < NumberY) {
            alert('Загаданное число больше');
        } else if (numberX == NumberY) {
            confirm('Поздравляю, Вы угадали!!!');
            return;
        }
        Input();
    };

    return Input;
};

let z = RandomNumber(numberRandom(1, 100));
z();
