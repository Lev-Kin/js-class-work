// let arr = [24,1,4,4,23,43,23,4,23];
// let sum = 0;
// let avg = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i];
//         avg++;
//     }
// }


// function add (a, b) {
//     if (typeof a === 'number' && typeof b === 'number') {
//         console.log(a + b);
//     } else {
//         console.log('NOT VALID DATA');
//     }   
// }

// add(); // запуск функции

// function expression
// let result = function add (a, b, c = 0) {
//     console.log(a + b + c);
// };


// function add () {
//     let a = 0;
//     console.log(++a);
// }

// add();
// add();
// add();

// function add (a, b) {
//     const res = a + b;

//     return res;
// }

// // const calc = 10 / add(2,3);
// // console.log(calc);

// // console.log( add(5,1) );

// const arr = [add(5,90), add(1,2)];

// console.log(arr);

// function expression
// const foo = function () {
//     console.log('IM FOOO!');
// };

// function add (a, b) {
//     return [a + b];    
// }


// console.log( add(2,3).slice() )

// написать функцию которая возвращает среднее арифметическое 
// 4х чисел

function average(a, b, c, d) {
    return (average(a + b + c + d) / 4);
};

console.log(average(1, 2, 3, 4));
