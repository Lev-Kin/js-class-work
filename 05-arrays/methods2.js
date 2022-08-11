// arrow function

// function add(a, b) {
//     return a + b;
// }


// const div = function (a, b) {
//     return a / b;
// };

// const div = (a, b) => { // стрелочная функция
//     return a / b;
// };
// console.log(div(4, 2));

// const div1 = a => { // если один аргумент, то () можно не ставить
//     return a / 2;
// };
// console.log(div1(4));

// const div2 = a =>  a / 2; // если одно действие, то можно убрать {} и return
// console.log(div2(4));

const arr = [
    'John', 
    'Valerchik', 
    'Peter', 
    'Semen', 
    'Oleg', 
    'Samuil', 
    'Innokentij'];

// for (let item of arr) {
//     console.log(item);
// }

//arr.forEach(() => {}); // функция запишется для каждого элемента
// arr.forEach((item, index, mass) => {
//     console.log(item + ':' + index);
//     console.log(mass);
//     mass[index] = 1; // смутирует массив и перезапишет на указанное значение
//     item = 1; // не перезапишет
// });
// console.log(arr);

// function foo(val) {
//     val = 1;
// }
// foo(arr[0]);
// console.log(arr); // не перезапишет массив

// function foo(val) {
//     val[0] = 1;
// }
// foo(arr);
// console.log(arr); // перезапишет массив, на первом элементе станет 1


// function foo (mass) {
//     mass = null;
// }
// foo(arr);
// console.log(arr); // не перезапишет массив

// function foo (mass) {
//     mass.push(100)
// }
// foo(arr);
// console.log(arr); // перезапишет массив, добавит 100


// arr.map((item, index, mass) => { // создает новый массив
//     console.log(item);
// }); 
// const newArr = arr.map((item, index, mass) => { 
//    return 'Mr.' + item;
// }); 
// console.log(newArr);

// const newArr = arr.map((userName) => { 
//    return {
//     userName,
//     age: Math.round(Math.random()*100)   
//    }
// }); 
// console.log(newArr);


// const result = arr.some((item, index, mass) => { // проверяет есть ли хоть одно правдивое значение, то вернет true
//     return  item.length > 7;
// });
// console.log(result);

// const result = arr.some((item) => item[0] === 'S') // проверяем есть ли элементы начинающиеся на указанную букву
// console.log(result);


// const result = arr.every((item) => item.length > 3); // проверет выполняется ли условие для всех элементов
// console.log(result);


// const result = arr.filter((item) => { // возвращает новый массив c элементами выполняющими заданное условие
//     //return item.length > 5;
// }); 
// console.log(result);

// const result = arr.filter((item) => item[0] === 'S'); 
// console.log(result);


// const userToFind = 'Oleg';
// const result = arr.find((item) => item === userToFind); // находит искомый элемент в массиве и выводит его
// console.log(result);

const persons = [
    {userName: 'Oleg',age: 36},
    {userName: 'Semen', age: 33},
    {userName: 'Peter', age: 23},
    {userName: 'Oleg', age: 53},
    {userName: 'Innokentij', age: 13},
    {userName: 'Samuil', age: 38},
];

//const userToFind = 'Oleg';
//const result = persons.find((item) => item.userName === userToFind);
//result.userName = 'Olezha';
//console.log(persons); // перезапишет на новое имя

// const result = persons.findIndex((item) => item.userName === userToFind);
// console.log(result);


// let counter = 0;
// const res = persons.sort((a,b) => {
//     console.log(++counter, a);
//     console.log(counter, b);
// })


// const res = persons.sort((person1, person2) => {
//     return person1.age - person2.age; // cортирует по второму значению объекта, выведет объект в порядке возрастания по возрастанию
//     return person2.age - person1.age; // cортирует по второму значению объекта, выведет объект в порядке возрастания по убыванию
// });
// console.log(res);

// const numbers = [99,2,3,5,6,74,6,2];
// const result = numbers.reduce((sum, number) => {
// console.log(sum); // reduce стартует с первого элемента, а не с нулевого
//     return sum + number;
// });
// console.log(result); // посчитает сумму всех чисел


// const numbers = [99,2,3,5,3,74,6,2,74];
// const result = numbers.reduce((acc, number, index, mass) => {
//     if (
//     //mass.indexOf(number, index + 1) !== -1 &&
//     mass.includes(number, index + 1) && // или так
//     !acc.includes(number)
//     ) {
//         acc.push(number)
//     }
//     return acc
// }, []);
// console.log(result);


//или запись в одну строку:
// const numbers = [99,2,3,5,3,74,6,2,74];
// const result = numbers.reduce((acc, number, index, mass) => mass.includes(number, index + 1) &&  !acc.includes(number) ? [...acc, number] : acc, []);
// console.log(result);

