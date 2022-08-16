'use strict';

// // methods, get, set, property descriptor, 
// // this, call, apply, bind, setTimeout, setInterval

// function eat(food) {
//     console.log(`${this.name} eats ${food} by hands`);
// }

// // console.log(window);


// const begat = (destination) => {
//     console.log(`${this.userName} runs to ${destination}`);
// };

// const person = {
//     name: 'John',
//     age: 23,
//     stack: ['CSS', 'HTML', 'JS'],
//     liveInCity: true,
//     run: () => {
//         console.log('person runs');
//     },
//     walk(destination) {
//         console.log(`${person.name} walks to ${destination}`);
//     },
//     zhrat: eat
// };


// const person2 = {
//     name: 'Valerchik',
//     age: 53,
//     stack: ['DIG', 'SOW', 'HARVEST'],
//     liveInCity: false,
//     run: () => {
//         console.log('person runs');
//     },
//     walk(destination) {
//         console.log(`${this.name} walks to ${destination}`);
//     },
//     zhrat: eat // названия поля сылаются на сушествующюю функциию
// };

// // this

// person.zhrat('ryabchika');
// person2.zhrat('kolbasa');

// const fly = (dest, speed) => {
//     // console.log(this);
//     console.log(`${this.name} flies to ${dest} with ${speed}km/h speed`)
// };

// const bird = {
//     name: 'kesha',
//     fly(dest, speed) {
//         // console.log(this);
//         console.log(`${this.name} flies to ${dest} with ${speed}km/h speed`)
//     }
// }

// const ezh = {
//     name: 'senya',
//     zhrat: eat,
// };

// bird.fly('west', 100);

// fly.call(ezh, ['north', 200]);
// fly.apply(ezh, ['north', 200]);


// function foo() {

//     function smth() {
//         console.log(this);
//     }

//     const bar = () => {
//         console.log(this);
//     };

//     bar();
//     smth();
// }

// foo.call(person);

// setTimeout(function () {
//     console.log('IM WORKING');
// }, 2000);

// const foo = person2.walk;
// foo('itstep');


// setTimeout(person2.walk.bind(person2), 2000);

// setTimeout(function () {
//     person2.walk('bar');
// }, 2000);

// clearTimeout(id);

// выведите в консоль с интервалом в 1 сек числа от 1 до 10
// после 10 вызовы должны прекратиться

// let count = 0;

// const id = setInterval(() => {
//     console.log(++count);
// }, 500);

// setTimeout(() => {
//     clearInterval(id);
// }, 5000);

// const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
// };

// person.city = 'Gomel';
// Object.defineProperty(person, 'firstName', {
//     writable: false
// });

// Object.defineProperty(person, 'city', {
//     value: 'Gomel',
//     writable: true
// });

// Object.defineProperties(person, {
//     city: {
//         value: 'Eremino',
//         writable: false
//     },
//     busNo: {
//         value: 43,
//         writable: false
//     }
// });

// console.log(Object.getOwnPropertyDescriptors(person))

// const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
// };

// Object.defineProperty(person, 'fullName', {
//     get () {
//         return `${this.firstName} ${this.lastName}`;
//     },
//     set(val){
//         const nameArr = val.split(' ');
//         this.firstName = nameArr[0];
//         this.lastName = nameArr[1];
//     },
//     enumerable: true,
//     configurable: true,
// });

// person.fullName = 'Valerchik Ivanov';

// console.log(person.fullName);
// console.log( person );

// const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
// };

// Object.defineProperty(person, 'goTo', {
//     get () {
//         return run.bind(this);
//     }
// })

// setTimeout(person.goTo, 1000);


// const person = {
//     firstName: 'John',
//     lastName: 'Jhonson',
//     _age: 0
// };

// Object.defineProperty(person, '_age', {enumerable:false});


// Object.defineProperty(person, 'age', {
//     get(){
//         return this._age;
//     },
//     set(val){
//         if ( 
//             typeof val === 'number' &&
//             val > 0 &&
//             val < 95
//         ) {
//             this._age = val;
//         }

//     },
//     enumerable: true

// }); 

// person.age = 5;
// console.log(person.age);
// console.log(person);
// console.log(person._age);

// // Object.keys(person).forEach((objKey) => {
// //     console.log(objKey)
// // })

const person = {
    firstName: 'John',
    lastName: 'Jhonson',
};

// Object.preventExtensions(person);
// Object.isExtensible(person)

// Object.seal(person);
// Object.isSealed(person);

// Object.freeze(person);
// Object.isFrozen(person);

person.city = 'Gomel';
delete person.firstName;
person.lastName = 1000;

console.log();



