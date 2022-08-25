// === Part I ===

// 1. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// const arrayName = [
//   "Олег",
//   "Игорь",
//   "Семен",
//   "Дмитрий",
//   "Антон",
//   "Семен",
//   "Андрей",
// ];

// let checkName = arrayName.some((element) => element === "Семен");
// console.log(checkName);

// 2. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// const arrNumber = [2, 1, 3, 111, 2, 2, 42, 123];
// let sum = arrNumber.reduce((acc, item) => (item % 2 ? acc : acc + item), 0);
// console.log(sum);

// 3. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

// let arrNumber = [];
// for (let i = 0; i < 10; i++) {
//   arrNumber.push(prompt("Pleace enter number"));
// }
// console.log(arrNumber);

// const result = arrNumber.every((item) => !isNaN(item) && item);
// console.log(result);

// 4. Создать объект check с двумя методами:
// .checkNameLength()
// .checkIsAdult()
// создать два объекта person1 и person2 с полями name и age (задать самостоятельно)
// вызвать методы из объекта check и передать в них в качестве контекста
// person1 или person2.
// checkNameLength() должен возвращать true если поле name у объекта больше 4
// checkIsAdult() должен возвращать true если поле объекта age больше или равно 18

// const check = {
//     checkNameLength() {
//         return this.name.length > 4;
//     },
//     checkIsAdult() {
//         return this.age >= 18;
//     }
// };

// const person1 = {
//     name: 'Oleg',
//     age: 32,
// };

// const person2 = {
//     name: 'Vasenlisa',
//     age: 16,
// };

// console.log(check.checkNameLength.call(person1));
// console.log(check.checkNameLength.call(person2));
// console.log(check.checkIsAdult.call(person1));
// console.log(check.checkIsAdult.call(person2));

// 5. Создать объект person с полем name и методом eat.
// Создать массив строк food в котором перечисляется любая еда (не менее 4 наименований)
// Метод eat должен принимать строку food с названием еды и возвращать строку вида
// person.name + " eats " + food
// Используя setTimeout или setInterval запустите метод eat объекта person раз в секунду,
// передавая при этом каждый раз следующее название еды из массива.

// const person = {
//     name: 'Lena',
//     eat(food) {
//         return `${person.name} eats ${food}`;
//     },
// }

// let food = ['sushi', 'salad', 'vodka', 'strawberry'];
// let count = 0;
// let id = setInterval(() => {
//     console.log(person.eat(food[count++]));
// }, 1000);

// setTimeout(() => { clearInterval(id) }, 4000);

// === Part II ===

// 1. Создать функцию которая принимает массив футболистов
// Функция должна "пробегать" по массиву и выяснять какие футболисты играют в одинаковых командах.
// функция должна возвращать двумерный массив футболистов сформированный по принципу: 1 массив - 1 команда.

// const players = [
//     { name: "Ronaldo", team: "Juventus" },
//     { name: "Messi", team: "Barcelona" },
//     { name: "Pedro", team: "Chelsea" },
//     { name: "Rico", team: "PSG" },
//     { name: "Suarez", team: "Barcelona" },
//     { name: "Buffon", team: "Juventus" },
//     { name: "Zuma", team: "Chelsea" },
//     { name: "Gonsalo", team: "Juventus" },
// ];

// const playersByTeams = players.reduce((teamsObj, item) => {
//     if (teamsObj[item.team]) {
//         teamsObj[item.team].push(item);
//     } else {
//         teamsObj[item.team] = [item];
//     }

//     return teamsObj;
// }, {});

// const result = Object.keys(playersByTeams).map((teamName) => playersByTeams[teamName]);

// console.log(result);

// 2. Данные - задания 2
const car1 = {
    model: 'tesla',
    adress: {
        country: {
            city: {
                name: 'gomel',
                street: {
                    name: 'pushkina',
                    numbre: 2
                }
            }
        },
        region: ['gomel', 'brest', 'minsk']
    },
    specs: {
        price: {
            low: 2000,
            mid: 3000,
            hight: 5000
        },
        engine: {
            power: 400,
            lowPower: 100
        }
    }
};

const car2 = {
    model: 'lada',
    adress: {
        country: {
            city: {
                name: 'gomel',
                street: {
                    name: 'pushkina',
                    numbre: 2
                }
            }
        },
        region: ['minsk', 'grodno', 'eremino']
    },
    specs: {
        price: {
            low: 100,
            mid: 2000,
            hight: 2500
        },
        engine: {
            power: 200,
            lowPower: 100
        }
    }
};

const car3 = {
    model: 'bmw',
    adress: {
        country: {
            city: {
                name: 'boston',
                street: {
                    name: 'pushkina',
                    numbre: 2
                }
            }
        },
        region: ['new york', 'berlin', 'bacelona']
    },
    specs: {
        price: {
            low: 100000,
            mid: 150000,
            hight: 200000
        },
        engine: {
            power: 1000,
            lowPower: 500
        }
    }
};

const arrCars = [car1, car2, car3];

// 2.1 отфильтровать авто так чтобы в результирующий массив вошли
// только машины из региона гомель

const { adress: { region: [a, b, c] } } = car1;
const filerRegionGomelCar = arrCars.filter(({ adress: { region } }) => region.includes('gomel'));
console.log(filerRegionGomelCar);

// 2.2 просуммировать общую стоимость авто по наивысшей цене

const { specs: { price: { hight } } } = car1;
const countHigthPriceCar = arrCars.reduce((acc, { specs: { price: { hight } } }) => acc + hight, 0);
console.log(countHigthPriceCar);

// 2.3 найти хотя бы одно авто мощность двигателя которого больше 500

const { specs: { engine: { power } } } = car1;
const findMaxPowerCar = arrCars.find(({ specs: { engine: { power } } }) => power > 500);
console.log(findMaxPowerCar);

// 2.4 найти самое дешевое авто по наименьшей цене

const { specs: { price: { low } } } = car1;

const findLowerPriceCar = arrCars.
    find(({ specs: { price: { low } } }) =>
        low === arrCars.
            reduce((acc, { specs: { price: { low } } }) =>
                (acc < low ? acc : low), low));

console.log(findLowerPriceCar);

// ==============================================================================
// === Доп задания ===
// 3. Дана строка 'Мама мыла раму';
// Написать функцию toWash(str, thing);
// Где str - это строка в которой надо поменять последнее
// слово, а thing - это, то самое слово которое надо вставить в конец строки.
// Функция должна возвращать строку.
// Например:
// document.write( toWash(str, ’машину’) );
// ‘Мама мыла машину’
// document.write( toWash(str, ’рябину’) );
// ‘Мама мыла рябину’

// let str = 'Мама мыла раму';
// let thing = 'машину';
// function toWash(str, thing) {
//     return str.split(' ').slice(0, 2).concat([thing]).join(' ');
//     //return [].concat(str.split(' ')).slice(0, 2).join(' ') + ' ' + thing;
// }
// console.log(typeof toWash(str, thing));
// document.write(toWash(str, thing));

// 4. Взять массив футболистов из задачи 1.
// Напишите функцию addAbility(array), которая добавляет к каждому
// объекту массива функцию run(), при запуске которой
// // выводится сообщение (“ИМЯ_ФУТБОЛИСТА is running”)

// const players = [
//     { name: "Ronaldo", team: "Juventus" },
//     { name: "Messi", team: "Barcelona" },
//     { name: "Pedro", team: "Chelsea" },
//     { name: "Rico", team: "PSG" },
//     { name: "Suarez", team: "Barcelona" },
//     { name: "Buffon", team: "Juventus" },
//     { name: "Zuma", team: "Chelsea" },
//     { name: "Gonsalo", team: "Juventus" },
// ];

// function addAbility(array) {
//     array.forEach(element => {
//         element.run = function run() {
//             console.log(`${this.name} is running`);
//         }
//     });

//     return array;
// }

// addAbility(players);
// players.forEach(element => { element.run() });

