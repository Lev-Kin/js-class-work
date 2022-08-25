"use strict";

// callback
// hof

// function func (a, cb) {
//     return 2 + cb(a);
// }

// function square (b) {
//     return b * b;
// }

// const bar = square;
// bar();

// console.log( func(3, square) );

// let a = 2;

// lexical environment
// const foo = (b) => {
//   return a + b;
// };

// const res = foo(5);
// console.log(res);

// const arr = [
//     {a: 3},
//     {a: 5}
// ];

// let obj = arr[0];
// obj = null;

// console.log(arr[0]);

// let a = 0;

// function foo () {
//     return ++a;
// }

// function bar (b, cb) {
//     let a = 10;

//     return cb();
// }

// console.log( bar(2,foo) );

// let i = 0;
// function foo (){

//    return ++i;

// }

// foo(); //1
// foo(); //2
// foo();
// console.log(foo())

// function bla(){

//     let a = 0;

//     return function () {
//         return ++a;
//     };
// }

// const foo = bla();

// console.log(foo());
// console.log(foo());
// console.log(foo());

// let a = 0;

// function foo () {
//     return ++a;
// }

// let a = 1;

// function foo () {
//     a = a + 1;
//     return a;
// }

// function bar (cb) {
//     let a = 10;

//     return cb();
// }

// console.log( bar(foo) );

// curry paritally applied hof

// function bla () {

//     let a = 0;

//     return function ( ) {
//         a = a + 1;
//         return a;
//     };
// }

// const foo = bla();

// console.log(foo());
// console.log(foo());
// console.log(foo());
// const smth = bla();
// console.log(smth());
// console.log(foo());
// console.log(foo());

// const foo = bla()
// const smth = bla();

// const a = function (a,b) {
//     return a + b;
// };

// const c = a;

// const b = function (a,b) {
//     return a + b;
// };

// const person = {
//     name: 'John'
// }

// const person2 = {
//     name: 'John'
// }

// const person3 = person;

// console.log(person === person2)

// curry paritally applied hof
// FUNCTIONAL PROGRAMMING

// function bla () {
//     let a = 4;

//     return function ooo ( ) {
//         a = a + 1;
//         return a;
//     }
// }

// const ooo = bla();
// const hhh = bla();

// console.log(ooo())
// console.log(hhh())
// console.log(ooo())

// curry

// function add(a, b, c) {
//   return a + b + c;
// }

// add(2, 5, 7);
// add(2)(5)(7);

// const add = (a) => {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     };
//   };
// };

// const onePlus = add(1);
// const onePLusTwoPlus = onePlus(2);
// const res = onePLusTwoPlus(3);

// const add = a => b => c =>  a + b + c;
// console.log( add(1)(2)(3) )

// console.log(onePLusTwoPlus(38));

// const add = (a, b) => c => a + b + c;
// console.log(add(1, 2)(3));

// const add = (a,b) => {
//     a.filter((item) => {
//         item.includes('smth')
//     })
//     .sort(() => {})
//     .map(() => {})

//     return (prefix) => {
//         return prefix + a.join(' ') + b.join(' ');
//     }
// };

// add([1,2,3], ['a','b','c'], 'mr')
// add([1,2,3], ['a','b','c'], 'mrs')

// const partialAdd = add([1,2,3], ['a','b','c']);
// console.log(partialAdd('mr'))
// console.log(partialAdd('mrs'))

// memoizing
// hof
// HIGHER ORDER FUNCTION *****

// function foo(a) {
//   return a * 2;
// }

// function test(cb) {
//   return function (a) {
//     return a / 2;
//   };
// }

function add(a, b) {
  return a + b;
}

function addWithLongging(a, b) {
  console.log(a, b);
  return add(a, b);
}

console.log(addWithLongging(2, 3))

// const wrapWithLogger = (add) => {
//     return (a,b) => {
//         console.log(a,b);
//         return add(a,b);
//     };
// };


const wrapWithLogger = (add) => {
    return (...args) => {
        console.log(...args);
        return add(...args);
    };
};

function sub (a, b) {
    return a - b;
}

function replaceLast (arr, str, length) {
    arr.pop()
    arr.push(str);
    arr.length = length;
    return arr;
}

const addLogger = wrapWithLogger(add);
const subLogger = wrapWithLogger(sub);
const replaceLastLogger = wrapWithLogger(replaceLast)

//console.log(addLogger(2,3));
console.log(subLogger(2, 3));
console.log(replaceLastLogger(['a', 'b', 'c'], 'd', 20));



