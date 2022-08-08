// 1. Написать функцию, которая принимает массив и степень. 
// Функция возвращает массив, в котором каждое число 
// массива возведено в указанную степень
// let arr = new Array(10);
// let max = 100;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random() * 100 + 1);
// }

// let power = 2;

// // raiseArrayElementInPower
// const arrResult = function (arr, power) {
//     let array = [];
//     for (let i = 0; i < arr.length; i++) {
//         array[i] = Math.pow(arr[i], power);
//     }
//     return array;
// };

// console.log(arr);
// console.log(arrResult(arr, power));

// 2. Написать функцию, которая принимает число дня недели и возвращает 
// его название, если введено число больше 7 или меньше 1 вернуть 
// сообщение об ошибке. Пример работы функции: dayOfWeek(3) вернет 
// «Среда». Вызов dayOfWeek(8) вернет «Нет такого дня недели».

// const dayOfWeek = function (numberDay) {

//     switch (numberDay) {
//         case 1:
//             return 'Понедельник.';

//         case 2:
//             return 'Вторник.';

//         case 3:
//             return 'Среда.';

//         case 4:
//             return 'Четверг.';

//         case 5:
//             return 'Пятница.';

//         case 6:
//             return 'Суббота.';

//         case 7:
//             return 'Воскресенье.';

//         default:
//             return 'Нет токой цифры для дня недели\nМожет быть от (1 - 7)';

//     }
// };

// console.log(dayOfWeek(3));
// console.log(dayOfWeek(8));

// 3. Написать функцию, которая принимает два числа (n1 и n2) и 
// возвращает массив (8 элементов) из этих чередующихся чисел. 
// Например, передаем два числа arrMaker(2,5), функция вернет массив 
// [2,5,2,5,2,5,2,5]

// const arrayAlternatingNumbers = function (n1, n2) {
//     let arr = new Array(8);

//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             arr[i] = n1;
//         } else {
//             arr[i] = n2;
//         }
//     }

//     return arr;
// };

// console.log(arrayAlternatingNumbers(2, 5));


// 4. Написать функцию, которая возвращает годовую оценку по предмету. 
// Функция принимает 4 оценки за четверти и возвращает годовую. В 
// начале программы пользователя спршивают оценки за четверти в 
// виде «введите оценку за 1 четверть», «введите оценку за 2 четверть» и 
// т.д. В конце работы программы выводится сообщение «ваша годовая 
// оценка N»

//calculate an annual grade for a subject

// let arrGrade = [];
// let count = 0;
// do {
//     arrGrade[count] = +prompt(`Введите оценку за ${count + 1} четверть`);

//     if (arrGrade[count] != 0 && !isNaN(arrGrade[count])) {
//         count++;
//     } else {
//         alert(`Некорректный ввод числа!`)
//     }

// } while (count != 4);

// function calculateSubjectGradeOfTheYear([...arrGrade]) {

//     let sum = 0;
//     for (let index = 0; index < arrGrade.length; index++) {
//         sum += arrGrade[index];
//     }

//     return Math.round(sum / arrGrade.length);
// }

// let result = calculateSubjectGradeOfTheYear(arrGrade);
// console.log(`Ваша годовая оценка ${result}.`);

// 5. Напишите функцию, которая возвращает процент побед и процент
// поражений в контру или доту. Функция принимает два параметра:
// первый это количество побед, а второй это количество поражений.
// Функция возвращает результативность в процентах. Пример работы:
// myStats(352,211), это значит было 352 победы и 211 поражений.
// Функция возвращает сообщение «ваш процент побед - 62%,
// поражений – 38%».

// function myStats(win, lose) {
//     let onePersentAllGames = (win + lose) / 100;

//     let str = `ваш процент побед - ${Math.floor(win / onePersentAllGames)}%, ` +
//         `поражений – ${Math.ceil(lose / onePersentAllGames)}%`;

//     return str;
// }

// console.log(myStats(352, 211));

// 6. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. Массив, который возвращает
// функция [1,4,6,74]
// [1, 1, 2, 2, 3].filter((element, index, array) => array.indexOf(element) !== index) // [1, 2]
// let arr = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];

// function leaveOnlyDuplicateNumbers([...arr]) {

//     let arrTemp = [];
//     for (var i = 0; i < arr.length - 1; i++) {
//         if (!(arrTemp.indexOf(arr[i]) > -1) && !(arr[i] != arr[i + 1])) {
//             arrTemp.push(arr[i]);
//         }
//     }

//     return arrTemp;
// }

// console.log(leaveOnlyDuplicateNumbers(arr));
// console.log(arr);

// 7. Написать функцию, которая принимает случайный
// двумерный массив (разной длины) из 8 элементов. Функция
// возвращает тот массив сумма элементов которого
// наибольшая

// ---- V I ----
// let n = Math.floor(Math.random() * 8) + 2; // строк
// let m = Math.abs(Math.ceil(8 - n)); // столбцов

// let arr = [];
// let max = 100;
// let min = -100;
// let countElement = 8;
// for (let i = 0; i < n; i++) {
//     if (countElement === 0) { break; }

//     arr[i] = [];
//     for (let j = 0; j < Math.ceil(Math.random() * m + 1) + countElement; j++) {
//         if (countElement === 0) { break; }

//         arr[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;;
//         countElement--;
//     }
// }
// console.log(arr);

// ---- V II ----
// let arr = [];
// let max = 100;
// let min = -100;
// let countElement = 8;
// for (let i = 0; ; i++) {
//     if (countElement === 0) { break; }

//     arr[i] = [];
//     for (let j = 0; j < Math.floor(Math.random() * 7) + 1; j++) {
//         if (countElement === 0) { break; }

//         arr[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;;
//         countElement--;
//     }
// }
// console.log(arr);

// function getArrayMaxSum([...arr]) {

//     let arrResult = [];
//     let arrSum = [];
//     let k = 0;
//     for (let i = 0; i < arr.length; i++) {
//         arrSum[k] = 0;
//         for (let j = 0; j < arr[i].length; j++) {
//             arrSum[k] += arr[i][j];
//         }
//         k++;
//     }

//     let indexMaxSumArray = arrSum.indexOf(Math.max(...arrSum));

//     for (let i = 0; i < arr[indexMaxSumArray].length; i++) {
//         arrResult.push(arr[indexMaxSumArray][i]);
//     }

//     return arrResult;
// }

// console.log(getArrayMaxSum(arr));

// 8. Написать программу, которая спрашивает у пользователя сколько ему
// лет. В программе должна присутствовать функция validator(), которая
// проверяет введенное число. Если validator() вернет true, то возраст
// можно выводить на экран в виде “Вам N лет”. Функция validator()
// должна проверять, чтобы введенный возраст не был отрицательным,
// меньше 5 лет и больше 100, чтобы возраст не был строкой, и не был
// null или undefined.

// let age = prompt(`Сколько вам лет?`);

// function validator(value) {

//     if (isNaN(Number(value)) || Number(value) < 5 || Number(value) > 100) {
//         return false;
//     }

//     if (value === null || value === '') {
//         return false;
//     }

//     return true;
// }

// if (validator(age)) {
//     alert(`Вaм ${age} лет.`)
// }

// 9. Написать компьютерную игру «отгадай число». Игра на двух игроков.
// Сначала игрок1 указывает максимальное число(max) до которого
// можно загадывать. Потом игрок2 указывает число n от 1 до max.
// Игрок1 пытается отгадать число n, если не угадал выводится
// сообщение «Загаданное число меньше указанного вами» или
// «Загаданное число больше указанного вами». Выигрывает тот игрок,
// который за наименьшее количество попыток отгадает число.

// function isValid(value) {
//     if (isNaN(+value) || +value <= 0 ||
//         value === null || value === '') {
//         return false;
//     }

//     return true;
// }

// function getNumber(message) {
//     let inputUserNumber;
//     do {
//         inputUserNumber = prompt(message);
//     } while (!isValid(inputUserNumber));

//     return Number(inputUserNumber);
// }

// function getMessageAboutYouNumber(secretNumber, number) {
//     if (secretNumber < number) {
//         return 'Загаданное число меньше указанного вами.';
//     } else if (secretNumber > number) {
//         return 'Загаданное число больше указанного вами.';
//     }

//     return 'Введенное число равно загаданному числу.';
// }

// function startGameGuessNumber() {

//     const playerOneMaxNumber =
//         getNumber(`Игрок1 укажите максимальное число(max)\n` + `до которого можно загадывать.`);

//     let playerTwoSecretNumber;
//     do {
//         playerTwoSecretNumber =
//             getNumber(`Игрок2 укажите число n от 1 до ${playerOneMaxNumber}.\nКоторое нужно отгадывать.`);

//         if (playerTwoSecretNumber > playerOneMaxNumber) {
//             alert(`Число должно быть меньше ${playerOneMaxNumber} (max)`);
//         }

//     } while (playerTwoSecretNumber > playerOneMaxNumber);

//     let timesGuess = 1;
//     while (true) {

//         let playerGuessNumber;
//         do {
//             playerGuessNumber = prompt(`Угадай число.`);

//             if (playerGuessNumber === null) {
//                 alert('Вы проиграли!\nВы сдались.');
//                 return;
//             }

//         } while (!isValid(playerGuessNumber));

//         playerGuessNumber = Number(playerGuessNumber);
//         if (
//             getMessageAboutYouNumber(playerTwoSecretNumber, playerGuessNumber) ===
//             'Введенное число равно загаданному числу.'
//         ) {

//             if (
//                 confirm
//                     (
//                         `Вы выиграли!\n` +
//                         `Вы сделали ${timesGuess} попытки.\n` +
//                         `Начать новую игру нажмите ОК.\n` +
//                         `Завершить игру нажмите ОТМЕНА.`
//                     )
//             ) {
//                 return startGameGuessNumber();
//             } else {
//                 return;
//             }

//         } else {
//             alert(getMessageAboutYouNumber(playerTwoSecretNumber, playerGuessNumber));
//         }

//         timesGuess++;
//     }
// }

// startGameGuessNumber();

