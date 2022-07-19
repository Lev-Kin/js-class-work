// const team = [
//     'John',
//     'Valerchik',
//     'Vovanchik',
//     'Olezha',
//     'Glebushka',
//     'Messi'
// ];

// for (let i = 0; i < team.length; i++) {
//     console.log(`Mr. ${team[i]}`);
// }

// let numbers = [2,31,2,4,5];

// const team2 = new Array(10, 11);
// console.log(team2);


// console.log(team.length); 

// team[0] = 'Evlampij';
// team[3] = 'Evlampij';

// length нетрогать НИКОГДА.
// team.length = 3;

// const someArr = [];
// const userInput = 35;
// someArr.length = userInput;

// console.log(team)

// 1. Дан массив 10 чисел 
// вывести в консоль сумму всех елементов масива



// homework array
// 1. дан массив 10 чисел. вывести в консоль сумму всех элементов массива

// let arr = [];
// let sum = 0;
// let i = 0;
// while (arr.length !== 10) {
//     arr[i] = Math.floor(Math.random() * 10);
//     sum += arr[i];
//     i++;
// }
// console.log(arr);
// console.log(sum);

// 2. найти среднее арифметическое всех элементов массива, которые стоят 
// на четных местах (0,2,4...)

// let arr = [];
// let sum = 0;
// let averageMean = 0;
// let count = 0;
// for (let i = 0; arr.length !== 10; i++) {
//     arr[i] = Math.floor(Math.random() * 10);
//         if (i % 2 === 0) {
//             sum += arr[i];
//             count++;
//         }
//     }
// }
// console.log(arr);
// console.log(count);
// console.log(sum / count);

// 3. дан исходный массив [2,-65,7,-1,26,48,-93,58,9] 
// создать новый массив, элементы которого противоположны по знакам исходного
// let arr = [2, -65, 7, -1, 26, 48, -93, 58, 9];
// let arr2 = new Array(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     arr2[i] = -arr[i]
// }
// console.log(arr2); 
// console.log(arr);

// 4. создать пустой массив длиной 10
// автоматически заполнить массив нулями и единицами, начиная с единицы
// let arr = new Array(10);
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 0) {
//         arr[i] = 1;
//     } else {
//         arr[i] = 0;
//     }
// }
// console.log(arr);
// 5. заполнить массив последовательными нечетными числами (длина 10)
// let arr = new Array(10);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = 2 * i + 1;
// }
// console.log(arr);

// 6. с помощью цикла создать массив, каждый элемент которого равен
// квадрату своего номера (длина 10)
// let arr = new Array(10);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.pow(i, 2);
// }
// console.log(arr);

// 7. дан массив 10 чисел. вывести в консоль количество четных
// элементов из этого массива
// let arr = new Array(10);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random() * 10);
//     if (arr[i] % 2 === 0) {
//         console.log(i);
//     }
// }
// console.log(arr);

// 8. дан массив 10 чисел. вывести наибольшее число из этого массива
// let arr = new Array(10);
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = Math.floor(Math.random() * 10);
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(arr);
// console.log(max);

// 9. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// найдите количество элементов массива, которые отличны от наибольшего 
// не больше чем на 10%
let arr = new Array(10);
let max = 0;
for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100);
    if (arr[i] > max) {
        max = arr[i];
    }
}

let tenPercentOfMax = max / 100 * 10;
let minimumFromMaximum = max - tenPercentOfMax;

console.log(arr);
console.log(max);
console.log(tenPercentOfMax);

let count = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > minimumFromMaximum && arr[i] !== max) {
        count++;
        console.log(arr[i]);
    }
}
console.log(count);

// 10. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// выведите на экран наибольший ЧЕТНЫЙ элемент массива
// 11. дан массив из 10 случайных чисел (НЕ ПОСЛЕДОВАТЕЛЬНЫХ)
// пользователь вводит число n, вывести в консоль элемент массива
// который наиболее близок к n (если таких элементов несколько, вывести несколько)