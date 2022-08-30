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

// function add(a, b) {
//   return a + b;
// }

// function addWithLongging(a, b) {
//   console.log(a, b);
//   return add(a, b);
// }

// console.log(addWithLongging(2, 3))

// const wrapWithLogger = (add) => {
//     return (a,b) => {
//         console.log(a,b);
//         return add(a,b);
//     };
// };

// const wrapWithLogger = (add) => {
//     return (...args) => {
//         console.log(...args);
//         return add(...args);
//     };
// };

// function sub (a, b) {
//     return a - b;
// }

// function replaceLast (arr, str, length) {
//     arr.pop()
//     arr.push(str);
//     arr.length = length;
//     return arr;
// }

// const addLogger = wrapWithLogger(add);
// const subLogger = wrapWithLogger(sub);
// const replaceLastLogger = wrapWithLogger(replaceLast)

// //console.log(addLogger(2,3));
// console.log(subLogger(2, 3));
// console.log(replaceLastLogger(['a', 'b', 'c'], 'd', 20));

// ===========================================================
// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).

// function toggleMe() {
//   let a = true;
//   return function foo() {
//     return a = !a;
//   };
// }

// let toggler = toggleMe();

// console.log(toggler());
// console.log(toggler());
// console.log(toggler());
// console.log(toggler());
// console.log(toggler());
// console.log(toggler());

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 10, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 10, то функция считает
// количество от этого числа до 0

function funcCounter(num) {
  let count = num;
  return function () {
    if (num > 10) {
      return count++;
    } else {
      return count--;
    }
  };
}

let c = funcCounter(11);

// while(c() > 10){
//   console.log(c());
// }

console.log(c());
console.log(c());
console.log(c());
console.log(c());


// console.log(funcCounter(9));
// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

// classNameEditor('active', true) // добавляем класс ====>>>>> 'active'
// classNameEditor('test', true) // =====>>>>> 'active test'
// classNameEditor('btn', true) // =====>>>>> 'active test btn'
// classNameEditor('test', false) // =====>>>>> 'active btn'
// classNameEditor('blabla', false) // =====>>>>> 'active btn'

// .split()
// .join()

// 4. Создать функцию, которая принимает массив и callback. Функция
// должна каждый элемент массива обрабатывать callback’ом.

// arr.map(() => {})
// map(arr, () => {})

// 5. Создать функцию sumTo, которая принимает два числа и callback.
// Задача функции складывать 2 числа, а задача callback’a заставлять
// функцию sumTo возвращать результат в виде числа, строки или
// логического типа данных.

// function toString (val) { return val + ''; }

// sumTo(2,3, someCallback)

// 6. Создать функцию checkLogin, которая принимает 4 параметра. 1
// параметр - это логин, введенный пользователем, 2 –
// правильный логин, 3 – callback, который вызовется если логин
// верный, 4 – callback, который вызовется если логин ложный.

// 7. Создать объект
// kurochka = {
// 	name: 'Ryaba',
// 	isAlive: true,
// 	isZazharena: false
// }

// измените объект так, чтобы после изменения поля isZazharena = true, поле isAlive автоматически стало false,
// поле isAlive должно быть доступно только для чтения. После изменения isZazharena - это поле должно стать доступно только для чтения
