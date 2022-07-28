// array methods


// const arr = [23, 4, 56, 43, 0, 54, -23, 34, 23];
// const arr2 = ['one', 'two', 'three'];
// const arr3 = [false, true, true, false, true];

// const resultArr = arr.concat([]); // копия массива
// console.log(arr2.concat('hello world', false));

// const resultArr = arr.concat(arr2); 
// const resultResultArr = resultArr.concat(arr3);

// const arr = [ 4, 56, 34, 43, 0, 54, -23, 34, 23];
// const arr2 = ['one', 'two', 'three'];
// const arr3 = [false, true, true, false, true];
// const arr4 = [ 1,51,2,56, 89, 45, 1,3,4,5 ];

// const result = arr2.push(100);
// const result = arr2.pop();
// const result = arr2.shift();
// const result = arr2.unshift('smth', 'smth else');

// console.log(arr2.indexOf('two'));
// сортировки
// http://mathhelpplanet.com/static.php?p=javascript-algoritmy-sortirovki

// .indexOf()
// .lastIndexOf()

// arr2.reverse();

// arr2.reverse();
// arr.sort();
// const result  = arr2.slice(2);

//console.log(result);

// // Number.MAX_SAFE_INTEGER - нечетное
// let limNum = Number.MAX_SAFE_INTEGER;
// if (limNum % 2 == 0) {
//     console.log('Четное');
// } else {
//     console.log('Не четное');
// }

// arr2.join();
// console.log(arr2.toString());

// STRING METHOD!!!!!!!!!!

// const str = 'i love ITSTEP';

// console.log(str.split(' '));


// const arr2 = ['one', 'two', 'three', 'two', 'zzzzz', 'xxxxx', 'ccccc', 'vvvvvv'];
// const arr4 = [ 1,51,2,56, 89, 45, 1,3,4,5 ];

// rest, spread, destructuring
// console.log( Math.max( ...arr4 ) );

//  let one = arr2[0];
//  console.log(arr2);
//  arr2[0] = 'lllllll';
//  arr3 = arr2;
//  console.log(arr2);
//  console.log(arr3);
//  console.log(typeof arr3);

//  arr3[0] = 33333;
//  console.log(arr2);


// // внизу ошибка
// console.log([10,20,30].slice(1).concat([1,2,3]).push(10,20).splice(1,1));

// const test = [];

// // const a = arr[0];
// // const b = arr[1];
// // const c = arr[2];

// let [ a = 'default value for a', b = 'default value' ] = test;

// console.log(a);

// Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// let inputName = prompt("Введите имя");
// if(people1.includes(inputName)) {
//     people2.push(inputName);
// }
// console.log(people2);

// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// let inputName = prompt("Введите имя");
// if(people2.includes(inputName)) {
//     people2.splice(people2.indexOf(inputName), 1);
// }
// console.log(people2);

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.
// let arrResult = [];
// for (let i = 0; i < people1.length; i++) {
//     if (people2.includes(people1[i])) {
//         arrResult.push(people1[i]);
//     }
// }
// console.log(arrResult);

// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// let arrResult = []
// for (let i = 0; i < people1.length; i++) {
//     if (!people2.includes(people1[i])) {
//         arrResult.push(people1[i]);
//     }
// }

// arrResult.push(...people2);
// // for (let i = 0; i < people2.length; i++) {
// //     //if (!arrResult.includes(people2[i])) {
// //         arrResult.push(people2[i]);
// //     //}
// // }

// console.log(arrResult);

// // 5. Отсортируйте получившийся массив по алфавиту
// arrResult.sort();
// console.log(arrResult);

// 1. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Вырезать из массива "David", "Lambert", "Eddie" и записать их в отдельный массив
// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arrResult = [];
// arrResult.push(arr.splice(arr.indexOf('David'), arr.indexOf('Eddie') - 1));
// console.log(arrResult);
// console.log(arr);

// 2. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Переставить "Janett", "Franz" в начало массива
// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr = arr.slice(arr.indexOf("Janett"), arr.indexOf("Franz") + 1).concat(arr.slice(0, arr.indexOf("Janett")));
// console.log(arr);

// 3. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// Заменить "Eddie", "Janett" на "Oleg","Valerchik"
// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.splice(arr.indexOf("Eddie"), 1, "Oleg");
// arr.splice(arr.indexOf("Janett"), 1, "Valerchik");
// console.log(arr);

// 4. Дан массив ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// "Перевернуть" массив, заменить первые 4 элемента на Митрофанов ("Mitrofan")
// let arr = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// arr.reverse();
// arr.splice(0, 4, "Mitrofan", "Mitrofan", "Mitrofan", "Mitrofan");
// console.log(arr);

// 5. Даны два массива
// let arr1 = ["John", "Peter", "David", "Lambert", "Eddie", "Janett", "Franz"];
// let arr2 = ["Nikodim", "Evlampij", "Aristarkh", "Drogolub", "Vitalij"];

// взять из второго массива все имена начина с "Aristarkh" (включительно)
// и добавить их в 1ый массив (не должно получится двумерного массива)

// arr1 = arr1.concat(arr2.slice(arr2.indexOf("Aristarkh")));
// console.log(arr1);