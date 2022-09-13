// tasks - classes
// === I ===
// Координаты
// Напишите функцию, которая вычисляет длину линий в
// стандартной двухмерной системе координат. Координаты
// начала и конца линий должны храниться в объектах.
//  Создайте три линии.
//  Вычислите их длины с помощью функции
//  Проверьте, могут ли три линии сформировать
// треугольник
// Помните:
// Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина
// каждой стороны треугольника должны быть меньше суммы
// длин остальных сторон

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Line {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  static canTriangleExist(l1, l2, l3) {
    const areAllInstances = [...arguments].every(
      (line) => line instanceof Line
    );

    if(!areAllInstances){
        return 'figushki';
    }

    return (
      l1.lengh < l2.lengh + l3.lengh &&
      l2.lengh < l1.lengh + l3.lengh &&
      l3.lengh < l1.lengh + l2.lengh
    );
  }

  get lengh() {
    return Math.sqrt((this.p1.x - this.p2.x) ** 2 + (this.p1.y - this.p2.y));
  }
}

// class Line {
//   constructor(point1, point2) {
//     this.point1 = point1;
//     this.point2 = point2;
//   }

// }

// const arrPoint = [];
// for (let i = 0; i < 6; i++) {
//   arrPoint[i] = new Point(
//     Math.floor(Math.random() * 10),
//     Math.floor(Math.random() * 10)
//   );
// }

// console.log(
//   arrPoint.forEach((element) => {
//     console.log(element);
//   })
// );

// const triniagle = [];
// let j = 0;
// for (let i = 0; i < 3; i++) {

//         triniagle[i] = new Line(arrPoint[j++], arrPoint[j++]);

// }

// console.log(
//   triniagle.forEach((element) => {
//     console.log(element);
//   })
// );

const p1 = new Point(1, 2);
const p2 = new Point(5, 5);
const p3 = new Point(3, 8);
const p4 = new Point(2, 1);
const p5 = new Point(0, 4);
const p6 = new Point(3, 6);

const l1 = new Line(p1, p2);
const l2 = new Line(p3, p4);
const l3 = new Line(p5, p6);

console.log(Line.canTriangleExist(l1, l2, l3));
// Line.prototype.getLineLenght = function () {
//   return Math.sqrt(
//     Math.pow(this.point1.x + this.point2.x, 2) +
//       Math.pow(this.point2.y - this.point2.y, 2)
//   );
// };

// console.log(getLineLenght);
// Line.canTriniagle = function (line1, line2, line3) {
//   const lineLenght1 = line1.getLineLenght();
//   const lineLenght2 = line2.getLineLenght();
//   const lineLenght3 = line3.getLineLenght();

//   if (
//     lineLenght1 < lineLenght2 + lineLenght2 &&
//     lineLenght2 < lineLenght1 + lineLenght3 &&
//     lineLenght3 < lineLenght1 + lineLenght2
//   ) {
//     return console.log(`lines can make triniagle`);
//   } else {
//     return console.log(`lines can't make triniagle`);
//   }
// };

// Line.canTriniagle(line1, line2, line3);

// === II ===
// На этом изображении показано как нужно организовать наследование между классами.
// Требования:
// Human должен принимать параметры name,аде.
// Все представители этого класса должны иметь метод ,sayHi(), который возвращает строку с приветствием.
// Programmer должен принимать параметр technologies (массив строк) с названиями любых технологий (пример: ['HTML', 'CSS', 'JS']).
// Все представители этого класса долны иметь метод .startCodingO, который возвращает строку вида 'David is coding using HTML, CSS, JS'.
// Имя 'David' и названия технологий должны меняться в зависимости оттого, каким объектом был вызван метод.
// Sportsman должен принимать параметр medals, который характеризует количество медалей у спортсмена.
// FootballPlayer должен принимать параметр team (строка) с названием команды где играет футболист.
// Все представители этого класса должны иметь метод .run(speed), где speed это число характеризующее скорость бега.
//  Метод .run(б) должен возвращать строку вида 'John is running б kmph', где имя 'John' может меняться в зависимости от объекта вызывающего метод ,run().
// HockeyPlayer должен принимать параметр weight (число) характеризующим массу хоккеиста.
// Все представители этого класса должны иметь метод .pushOpponent(opponentName), который должен возвращать строку вида 'Bill pushed Brandon and used 123kgs',
// имя 'Bill' и количество кг могут меняться в зависимости от объекта запустившего метод. Имя 'Brandon' может меняться в зависимости от opponentName
// переданного в момент вызова метода.

// class Human {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//     }
//     sayHi(){
//         return `Hello, ${this.name}`
//     }
// }

// class Programmer extends Human {
//     constructor (technologies, ...args){
//         super(...args);
//         this.technologies = technologies;
//     }
//     startCoding(){
//         return `${this.name} is coding using ${this.technologies}`
//     }
// }

// const personProgrammer = new Programmer(['HTML', 'CSS', 'JS'], 'Evan', 32);

// class Sportsman extends Human {
//     constructor(medals, ...args){
//         super(...args);
//         this.medals = medals;
//     }
// }

// class FootballPlayer extends Sportsman {
//     constructor(team, ...args){
//         super(...args);
//         this.team = team;
//     }
//     run(speed){
//         return `${this.name} is running ${speed} kmph`
//     }
// }

// const footballist = new FootballPlayer ('Royal team', '4 medals', 'Rick', 25)

// class HockeyPlayer extends Sportsman{
//     constructor(weight, ...args){
//         super(...args);
//         this.weight = weight;
//     }
//     pushOpponent(opponentName){
//         return `${this.name} pushed ${opponentName} and used ${this.weight}kgs`
//     }
// }
// const hockeyist = new HockeyPlayer (56, '5 medals', 'Joji', 48)
// console.log(hockeyist.pushOpponent('Richik'))
