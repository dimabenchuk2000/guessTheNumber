'use strict'

alert("Добро пожаловать в игру \"Угадай число\"");

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function numberCheck(rNum, attempts) {
    return function (pNum) {

        if (pNum === 0) {
            alert('Игра окончена');
        } else if (attempts === 1) {
            if (confirm('Попытки закончились. Хотели бы сыграть еще?')) {
                rNum = Math.ceil(Math.random() * 100);
                attempts = 10;
                randomNumber(+prompt("Угадай число от 1 до 100"));
            } else {
                alert('Игра окончена');
            }
        } else if (isNumber(pNum) === false) {
            alert('Введи число!');
            randomNumber(+prompt("Угадай число от 1 до 100"));
        } else if (pNum > rNum) {
            attempts--;
            alert('Загаданное число меньше, осталось попыток: ' + attempts);
            randomNumber(+prompt("Угадай число от 1 до 100"));
        } else if (pNum < rNum) {
            attempts--;
            alert('Загаданное число больше, осталось попыток: ' + attempts);
            randomNumber(+prompt("Угадай число от 1 до 100"));
        } else if (pNum === rNum) {
            if (confirm('Поздравляю, Вы угадали!!!. Хотели бы сыграть еще?')) {
                rNum = Math.ceil(Math.random() * 100);
                attempts = 10;
                randomNumber(+prompt("Угадай число от 1 до 100"));
            } else {
                alert('Игра окончена');
            }
        }

    }
}

let randomNumber = numberCheck(Math.ceil(Math.random() * 100), 10);

randomNumber(+prompt("Угадай число от 1 до 100"));