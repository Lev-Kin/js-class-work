// пользователь водит число до тех пор пока не видет 5
// let num;
// let n;

// do {

//     num = prompt("Введите число 5");
//     n = Number(num);

//// или так
//// nun = +prompt("Введите число 5");

// } while (n !== 5);

// for (;;) {}

// for(let i; i !== 5; ){
//     i = +prompt('ведите число 5')
// }

// for(let i =0; i <= 10; i++){
//     if(i !== 4){
//         console.log(i);
//     }
// }

// for(let i =0; i <= 10; i++){
//     if(i === 4){
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 5; j++) {
//         console.log(`${i}.${j}`);
//     }
// }

// задание
// 1.1
// 1.2
// 1.4
// 2.1
// 2.2
// 2.4
// 4.1
// 4.2
// 4.4
// 5.1
// 5.2
// 5.4

// for (let i = 1; i <= 5; i++) {

//     if (i === 3) {
//         continue;
//     }

//     for (let j = 1; j < 5; j++) {

//         if (j !== 3) {
//             console.log(`${i}.${j}`);
//         }
//     }
// }

// написать программу которая выводит 
// двух значные числа, которые делятся на 4 но не делятся на 6
// let count = 0;
// for (let i = 1; i < 100; i++) {

//     if (i % 4 === 0 && i % 6 !== 0) {
//         console.log(i);
//         count++;
//     }

// }
// console.log("====")
// console.log(count);


// пользователь вводит число n 
// написать цикл который выводит все числа от n до 0
// (n может быть отрицательным)
 let inputNumber;
let isWork = false;
let number = 0;
do {

    inputNumber = prompt("Введите число.\n(число может быть отрицательным)");

    if (inputNumber === null || inputNumber === '') {
        console.log('Надо было вести число а не пустую строку.');
    } else {

        number = Number(inputNumber);
        if (isNaN(number)) {
            console.log('Введено не число!\nНадо число.');
        } else if (!Number.isSafeInteger(number)) {
            console.log('Переданное значение НЕ является безопасным целым числом.');
        } else {
            isWork = true;
        }
    }

} while (isWork === false);

if (number > 0) {
    for (let i = number; i > 0; i--) {
        console.log(i);
    }
} else if (number < 0) {
    for (let i = number; i < 0; i++) {
        console.log(i);
    }
} else {
    console.log('До нуля чисел нет.');
}

// написать прогамму, которая вычисляет сумму чисел от 1 до n 
// (n всегда положительное) + проверить число n на число

// написать программу воторая определяет количество 
// положительных, отрицательных и нулей
// в начале программы пользователь воодит количество чисел которое намерен вводить
// пример вывода в консоли
// положительных: 2
// отрицательных: 4
// нулей: 1




