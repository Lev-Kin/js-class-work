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

// function average(a, b, c, d) {
//     return (average(a + b + c + d) / 4);
// };

// console.log(average(1, 2, 3, 4));

// Задача с темы функции.
// написать функцию которая возвращает среднее арифметическое 
// n чисел
// const average = arr => arr.reduce((a, b) => a + b)/arr.length;

// arrTest = [2, 1, 5, 144, 95, 49];
// const average = function (...arrN) {

//     let sum = 0;
//     let arrResult = arrN.flat();

//     for (let i = 0; i < arrResult.length; i++) {
//         sum += arrResult[i];
//     }

//     return sum / arrResult.length;
// };

// console.log(average(arrTest));

// function average (...blablaArr) {
//     console.log(c);
//     console.log(blablaArr.slice())
// const blablaArr = [2,324,23,42,342,34,2,3,42,34];
//    const argumentsArr = [...arguments];

// return (a+b+c+d)/4;
// }


// average(2,324,23,42,342,34,2,3,42,34);


// recursive obj copy
// hoisting func expression

// hoisting
// temporary dead zone

// foo()

// function foo () {
//     console.log('IM FOO');

//     console.log(aaaaa);
//     const aaaaa = 20;
// }

// const bar = function () {
//     console.log('IM BAR');
// };

// console.log(a);
// let a = 2;

// console.log(a);
// var a = 2;

// anonymous self invoking function


// (function () {
//     console.log('IM FOO');
// }) ();


// (function () {
//     console.log('IM BAR');
// }) ();


// console.log();


// function SCOPE, block SCOPE

// let a = 2;
// var b = 3;

// if (true) {
//     let a = 4;
//     var b = 5;
// }

// console.log(b);

// let i;

// for (i = 0; i < 10; i++) {
//     console.log('blabla');
// }

// console.log(i);


// let a = 2;

// function foo () {
//     a = 3;
//     console.log(a);
    
//     function bar () {
//         let a = 4;    
//         console.log(a);
//     }

//     bar();
// }

// console.log(a);
// foo();

// console.log(a);

// let a = 10;

// function foo () {
//     function bar () {
//         a = 3;
//         console.log(a);
//     }
//     bar();
//     a = 2;
//     console.log(a);
// }

// foo();
// console.log(a);



// recursive obj copy
// setTimeout + let + scope

