// const person = [34, 'Gomel', 51];

// const person = {
//     name: 'John',
//     age: 23,
//     city: 'Gomel',
//     isProgrammer: true,
//     stack: ['HTML', 'CSS', 'JS'],
//     size: {
//         width: 23,
//         height: 200,
//         weight: 100,
//     }
// };

// const person3 = {
//     pogremuha: 'lobzik',
//     hodki: 6
// }

// const person2 = {
//     ...person3,
//     ...person,
//     a: 2
// };

// console.log(person2)


// ===
// for (let key in person) {
//     person2[key] = person[key];
// }

// person.name = 'LLLLLLL';

// console.log(person2);
// rest stread desctructuring
// const arr = [5, 4, 33,  65, 6];
// const [a, b] = arr;

// const { age } = person; // это тоже самое что и в низу
// const age = person.age;

// const { 
//     age: johnAge = 100,
//     city,
//     lastName = 'Ivanov',
//     size: {
//         height
//     } = {height: 999}
// } = person;

// console.log(size);

// const person2 = {};

// for ( let key in person ) {

//     if (Array.isArray(person[key])) {
//         person2[key] = [...person[key]];
//         continue;
//     }

//     person2[key] = person[key];
// }

// person.stack.push('React');
// person.size.width = 30;

// console.log(person2.size === person.size)

// const person2 = {};

// for (let key in person) {
//     person2[key] = person[key];
// };

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

// person.name = 'Valerchik';
// person.lastName = 'Ivanov';

// console.log('isProgrammer' in person);
// console.log(person);

// console.log(person.hasOwnProperty('isProgrammer'));

// delete person.age;

// console.log(person);


// var str = ['city', 'smity', 'pitty'];

// const person = {
//     name: 'Valerchik',
//     [str[2]]: 'Gomel',
// };

// const { [str[2]]: smth } = person;

// console.log(smth);

// let nick = 'Bobik';

// const dog = {
//     age: 23,
//     nick, // nick: nick
//     city: 'Gomel'
// };

// const person2 = {
//     ...person,
//     stack: [ ...person.stack ],
//     size: { ...person.size }
// };


// const person3 = {
//     pogremuha: 'lobzik',
//     hodki: 6
// }

// const person2 = {
//     ...person3,
//     ...person,
//     a: 2
// };

// console.log(person2)


// ===
// for (let key in person) {
//     person2[key] = person[key];
// }


// person.name = 'LLLLLLL';

// console.log(person2);


// 1. создать объект subscribers с полями oldSubscribers и newSubscribers
// добавьте в объект поле allSubscribers которое должно
// хранить сумму oldSubscribers + newSubscribers
// если число allSubscribers > 700 вывести you are famous, иначе try harder

// const subscribers = {
//     oldSubscribers: 100,
//     newSubscribers: 200,
// };

// subscribers.allSubscribers = subscribers.oldSubscribers + subscribers.newSubscribers;
// if (subscribers.allSubscribers > 700) {
//     console.log('you are famous');
// } else {
//     console.log('try harder');
// }

// 2. дан массив объектов[{
//     a: 2,
//     b: 1
// }, {
//     a: 5,
//     b: 12
// }, {
//     a: 95,
//     b: 7
// }]
// используя методы массивов и циклы
// вывести в консоль 'its valid', если во всех объектах поле a > b

// const arr = [{
//     a: 2,
//     b: 1
// }, {
//     a: 5,
//     b: 12
// }, {
//     a: 95,
//     b: 7
// }]

// let count = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].a > arr[i].b) {
//         count++;
//     }
// }

// if (count === arr.length) {
//     console.log('its valid');
// };

// 3. на основе исходного массива создать массив таких же объектов, но поле b
// должно быть возведено в квадрат
// пример: [{
//     a: 2,
//     b: 1
// }, {
//     a: 5,
//     b: 144
// }, {
//     a: 95,
//     b: 49
// }]

// const arr = [{
//     a: 2,
//     b: 1
// }, {
//     a: 5,
//     b: 144
// }, {
//     a: 95,
//     b: 49
// }]

// const arr2 = [];
// for (let i = 0; i < arr.length; i++) {
//     arr2.push({ ...arr[i] });
//     arr2[i].b = Math.pow(arr[i].b, 2);
// }

// console.log(arr);
// console.log(arr2);

// 4. создать массив на основе предыдущего, в котором
// поля a и b будут последовательно помещены в массив
// пример: [2, 1, 5, 144, 95, 49]

// const arr3 = [];
// for (let i = 0; i < arr2.length; i++) {
//     arr3.push(arr2[i].a, arr2[i].b);
// }
// console.log(arr3);

// Задача с темы функции.
// написать функцию которая возвращает среднее арифметическое 
// n чисел
// const average = arr => arr.reduce((a, b) => a + b)/arr.length;

arrTest = [2, 1, 5, 144, 95, 49];
const average = function (...arrN) {

    let sum = 0;
    let arrResult = arrN.flat();

    for (let i = 0; i < arrResult.length; i++) {
        sum += arrResult[i];
    }

    return sum / arrResult.length;
};

console.log(average(arrTest));


