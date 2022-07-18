// 1. написать программу в которой пользователя просят ввести числа 5 раз
// причем каждое последующее должно быть больше ПРЕДЫДУЩЕГО
// если пользователь нарушил это правило то прекратить ввод и вывести алертом
// сообщение об ошибке
// если все 5 чисел были больше предыдущего вывести алертом сообщение об суспехе
// let inputNumber;
// let isWork = false;
// let number = 0;
// let count = 1;
// let numСompare = 0;
// while (count !== 5) {
//     do {

//         inputNumber = prompt(`Введите ${count} число. 
//         Каждое число должно быть больше предыдушего.`);

//         if (inputNumber === null || inputNumber === '') {
//             console.log('Надо было вести число а не пустую строку.');
//         } else {

//             number = Number(inputNumber);
//             if (isNaN(number)) {
//                 console.log('Введено не число!\nНадо число.');
//             } else if (!Number.isSafeInteger(number)) {
//                 console.log('Переданное значение НЕ является безопасным целым числом.');

//             } else {

//                 if (count === 1) {
//                     numСompare = number;
//                     break;
//                 } else if (number < numСompare || number === numСompare) {
//                     console.log('Введеное число должно быть больше предыдушего.');
//                     isWork = false;
//                 } else {
//                     numСompare = number;
//                     isWork = true;
//                 }
//             }
//         }

//     } while (isWork === false);

//     count++;

// }
// alert('Успешно введены 5 чисел')

// 2. написать программу заику, пользователь вводит число
// вывести в консоль столько "за" скоклько ввел пользователь
// например пользователь вводит 3
// вывод в консоли "зазазаика"

// let str = '';
// let num = +prompt('enter number');
// for (let i = 0; i < num; i++) {
//     str += 'зa'
// }
// console.log(str + 'ика');

// 3. написать игру. Под диваном живет 100 хомячков, пользователь
// не знает сколько их. Задача пользователя доставать из под дивана хомячков 
// до тех пор, пока их там не останется.
// В конце игры выводим количество попыток за которое пользователь достал
// всех хомячков.
// Если пользователь нажмет "отмена" игра должна прекратиться досрочно
// с выводом сообщения чз алерт.
// Если пользователь пытается достать хомячков больше чем их осталось под 
// диваном то вывести алертом сообщение "нет столько хомячков".

// let quantityHamster = 100;
// let count = 1;
// let inputNum = '';
// let numberСheck = 0;
// while (true) {

//     inputNum = prompt('Сколько достать хомячков');

//     if (inputNum === null) {
//         break;
//     }

//     numberСheck = Number(inputNum);

//     if (numberСheck > quantityHamster) {
//         alert('Столько xомечков нету их меньше чем введеное число')
//     } else if (numberСheck < quantityHamster) {
//         alert('Хомечков больше чем введеное число')
//         quantityHamster -= numberСheck;
//     } else if (numberСheck === quantityHamster) {
//         alert('Вы отгадали количество хомячков!!!\nХомячков под деваном -> ' + 100 +
//             ' Потребовалось попыток ' + count);
//         break;
//     } else {
//         alert('Ошибочный ввод!!!')
//     }
//     count++;
// }


// 4. Написать игру камень ножницы бумага
// игра до 10 побед пользователя либо компа ( при победе выводим имя победителя )
// пользователь должен вводить "камень" "ножницы" либо "бумага"
// компьютер должен рандомно генерировать "камень" "ножницы" либо "бумага"
// после чего выводим сообщение вида
// "вы выиграли ваш выбор: камень, выбор компа: "ножницы""
// и засчитываем очко соответствующему игроку, после чего начинаем следующий раунд
// при ничьей, очко никому не засчитываем

let countWinComp = 0;
let countWinPlayer = 0;
let inputPlayer = '';
let inputComp = 0;
while (true) {

    if (countWinComp === 10 || countWinPlayer === 10) {
        break;
    }

    // 0 - камень; 1 - ножницы; 2 - бумага
    inputComp = Math.floor(Math.random() * 3);

    inputPlayer = prompt('Ввидете:\nкамень или ножницы или бумага');

    if (inputPlayer === null) {
        break;
    }

    switch (inputComp) {
        case 0:
            inputComp = 'камень';
            if (inputComp === inputPlayer) {
                alert('Ничья');
            } else if (inputPlayer === 'ножницы') {
                alert(`вы проиграли ваш выбор: ${inputPlayer}, выбор компа: ${inputComp}`);
                countWinComp++;
            } else if (inputPlayer === 'бумага') {
                alert(`вы выиграли ваш выбор: ${inputPlayer}, выбор компа: ${inputComp}`);
                countWinPlayer++;
            } else {
                alert('ошибка');
            }
            break;

        case 1:
            inputComp = 'ножницы';
            if (inputComp === inputPlayer) {
                alert('Ничья')
            } else if (inputPlayer === 'бумага') {
                alert(`вы проиграли ваш выбор: ${inputPlayer}, выбор компа: ${inputComp}`);
                countWinComp++;
            } else if (inputPlayer === 'камень') {
                alert(`вы выиграли ваш выбор: ${inputPlayer}, выбор компа: ${inputComp}`);
                countWinPlayer++;
            } else {
                alert('ошибка');
            }
            break;

        case 2:
            inputComp = 'бумага';
            if (inputComp === inputPlayer) {
                alert('Ничья')
            } else if (inputPlayer === 'камень') {
                alert(`вы проиграли ваш выбор: ${inputPlayer}, выбор компа: ${inputComp}`);
                countWinComp++;
            } else if (inputPlayer === 'ножницы') {
                alert(`вы выиграли ваш выбор: ${inputPlayer}, выбор компа: ${inputComp}`);
                countWinPlayer++;
            } else {
                alert('ошибка');
            }
            break;

        default:
            alert('ошибка');
            break;
    }
}

if (countWinPlayer === 10) {
    alert('ИГРОК выиграл.\nИгра окончена.');
}

if (countWinComp === 10) {
    alert('КОМП выиграл.\nИгра окончена.');
}
