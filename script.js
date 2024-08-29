alert("Добро пожаловать в игру \"Угадай число\"");

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

function numberCheck(rNum) {
    return function (pNum) {
        if (pNum === 0) {
            alert('Игра окончена');
        } else if (isNumber(pNum) === false) {
            alert('Введи число!');
            randomNumber(+prompt("Угадай число от 1 до 100"));
        } else if (pNum > rNum) {
            alert('Загаданное число меньше')
            randomNumber(+prompt("Угадай число от 1 до 100"));
        } else if (pNum < rNum) {
            alert('Загаданное число больше')
            randomNumber(+prompt("Угадай число от 1 до 100"));
        } else if (pNum === rNum) {
            alert('Поздравляю, Вы угадали!!!');
        }
    }
}

let randomNumber = numberCheck(Math.ceil(Math.random() * 100));

randomNumber(+prompt("Угадай число от 1 до 100"));

console.log(randomNumber);
