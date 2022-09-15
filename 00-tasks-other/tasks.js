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

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// class Line {
//   constructor(p1, p2) {
//     this.p1 = p1;
//     this.p2 = p2;
//   }

//   static canTriangleExist(l1, l2, l3) {
//     const areAllInstances = [...arguments].every(
//       (line) => line instanceof Line
//     );

//     if (!areAllInstances) {
//       return 'figushki';
//     }

//     return (
//       l1.lengh < l2.lengh + l3.lengh &&
//       l2.lengh < l1.lengh + l3.lengh &&
//       l3.lengh < l1.lengh + l2.lengh
//     );
//   }

//   get lengh() {
//     return Math.sqrt((this.p1.x - this.p2.x) ** 2 + (this.p1.y - this.p2.y));
//   }
// }

// const p1 = new Point(1, 2);
// const p2 = new Point(5, 5);
// const p3 = new Point(3, 8);
// const p4 = new Point(2, 1);
// const p5 = new Point(0, 4);
// const p6 = new Point(3, 6);

// const l1 = new Line(p1, p2);
// const l2 = new Line(p3, p4);
// const l3 = new Line(p5, p6);

// console.log(Line.canTriangleExist(l1, l2, l3));


// === II ===
// На этом изображении показано как нужно организовать наследование между классами.
// Требования:
// - Human должен принимать параметры name,аде.
// Все представители этого класса должны иметь метод ,sayHi(), который возвращает строку с приветствием.
// - Programmer должен принимать параметр technologies (массив строк) с названиями любых технологий 
// (пример: ['HTML', 'CSS', 'JS']).
// Все представители этого класса долны иметь метод .startCodingO, который возвращает строку вида
// 'David is coding using HTML, CSS, JS'.
// Имя 'David' и названия технологий должны меняться в зависимости оттого, каким объектом был вызван метод.
// - Sportsman должен принимать параметр medals, который характеризует количество медалей у спортсмена.
// - FootballPlayer должен принимать параметр team (строка) с названием команды где играет футболист.
// Все представители этого класса должны иметь метод .run(speed), где speed это число характеризующее скорость бега.
// Метод .run(б) должен возвращать строку вида 'John is running б kmph',
// где имя 'John' может меняться в зависимости от объекта вызывающего метод ,run().
// - HockeyPlayer должен принимать параметр weight (число) характеризующим массу хоккеиста.
// Все представители этого класса должны иметь метод .pushOpponent(opponentName),
// который должен возвращать строку вида 'Bill pushed Brandon and used 123kgs',
// имя 'Bill' и количество кг могут меняться в зависимости от объекта запустившего метод.
// Имя 'Brandon' может меняться в зависимости от opponentName
// переданного в момент вызова метода.

// class Human {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     return `Hi , ${this.name}!`;
//   }
// }
// const human = new Human('Oleg', 32);
// console.log("=== I ===");
// console.log(human.sayHi());

// class Programmer extends Human {
//   constructor(technologies, ...args) {
//     super(...args);
//     this.technologies = technologies;
//   }
//   startCoding() {
//     return `${this.name} is coding using ${this.technologies.join(", ")}.`;
//   }
// }
// const programmer = new Programmer(['HTML', 'CSS', 'JS'], 'David');
// console.log("=== II ===");
// console.log(programmer.startCoding());

// class Sportsman extends Human {
//   constructor(medals, ...args) {
//     super(...args);
//     this.medals = medals;
//   }
// }
// const sportsman = new Sportsman(10);
// console.log("=== III ===");
// console.log(sportsman.medals);

// class FootballPlayer extends Sportsman {
//   constructor(team, ...args) {
//     super(...args);
//     this.team = team;
//   }
//   run(speed) {
//     return `${this.name} is running ${speed} kmph`;
//   }
// }
// const footballPlayer = new FootballPlayer('Gomel', 5, 'Easy', 25);
// console.log("=== IV ===");
// console.log(footballPlayer);
// console.log(footballPlayer.run(6));

// class HockeyPlayer extends Sportsman {
//   constructor(weight, ...args) {
//     super(...args);
//     this.weight = weight;
//   }
//   pushOpponent(opponentName) {
//     return `${this.name} pushed ${opponentName} and used ${this.weight}kgs.`;
//   }
// }
// const hockeyPlayer1 = new HockeyPlayer(90, 2, 'Schwartz', 31);
// const hockeyPlayer2 = new HockeyPlayer(123, 3, 'Bill', 38);
// console.log("=== V ===");
// console.log(hockeyPlayer1.pushOpponent('Brandon'));
// console.log(hockeyPlayer2.pushOpponent('Funtik'));


// === III ===
// Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100). Создать класс Device,
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две
// батарейки). Создать класс Gamepad, который наследует от
// Device. Класс Gamepad должен содержать поле model, поле
// isConnected (boolean) и методы connectTo(), который
// принимает название другого девайса и выводит сообщение
// типа “gamepadModel connected to TV”, метод disconnect(),
// который отключает Gamepad и метод play(), который
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно
// поле batteryType у Device и type у Battery не совпадают, то
// вывести сообщение что батарейки не вставлены.
// Подключить один девайс к другому можно только если есть
// 2 батарейки. Подключить Gamepad можно только если
// isConnected == false. Если заряд батареек == 0, то метод
// play вернет сообщение с требованием замены батареек.

// class Battery {
//   constructor(type, energy = 100) {
//     this.type = type;
//     this.energy = energy;
//   }
// }

// class Device {
//   constructor(batteryType) {
//     this.batteryType = batteryType;
//   }

//   insertBattery(batteryOne, batteryTwo) {
//     if (batteryOne.type === this.batteryType && batteryTwo.type === this.batteryType) {
//       this.batteryOne = batteryOne;
//       this.batteryTwo = batteryTwo;
//       return 'Батарейки вставлены.';
//     } else {
//       return 'Батарейки не вставлены.';
//     };
//   }
// }

// class Gamepad extends Device {
//   constructor(model, ...args) {
//     super(...args);
//     this.model = model;
//     this.isConnected = false;
//   }

//   connectTo(device) {

//     if (this.batteryOne.energy != 0) {
//       this.isConnected = true;
//     } else {
//       this.isConnected = false;
//     }

//     if (this.isConnected) {
//       console.log(device + " connected to TV");
//     }
//   }

//   disconnect() {
//     this.isConnected = false;
//     console.log('Устройство отключено.');
//   }

//   play() {
//     this.batteryOne.energy -= 10;
//     this.batteryTwo.energy -= 10;

//     if (this.batteryOne.energy === 0 && this.batteryTwo.energy === 0) {
//       this.isConnected == false;
//       console.log('замените батарейки');
//     }
//   }
// }

// const battery1 = new Battery('AAA');
// const battery2 = new Battery('AAA');
// const battery3 = new Battery('AAA');
// const battery4 = new Battery('AAA');
// const battery5 = new Battery('AA');

// console.log(battery1.energy);

// const xboxGamepad = new Gamepad('xbox', 'AAA');
// console.log(xboxGamepad.insertBattery(battery1, battery2));
// xboxGamepad.connectTo(xboxGamepad.model);
// xboxGamepad.disconnect();
// xboxGamepad.connectTo('PC');
// xboxGamepad.play();
// xboxGamepad.play();
// xboxGamepad.play();
// xboxGamepad.play();
// console.log(battery1.energy);
// xboxGamepad.play();
// xboxGamepad.play();
// xboxGamepad.play();
// console.log(battery1.energy);
// xboxGamepad.play();
// xboxGamepad.play();
// xboxGamepad.play();
// console.log(xboxGamepad.insertBattery(battery3, battery4));
// console.log(battery3.energy);
// xboxGamepad.play();
// xboxGamepad.play();
// xboxGamepad.play();
// console.log(battery4.energy);

//======= Преподователь решение ==========
class Battery {
  #energy = 100;

  constructor(type) {
    this.type = type;
  }

  consumeEnergy(amount) {
    if (Math.abs(amount) <= this.#energy) {
      this.#energy -= amount;
    }
  }

  get energy() {
    return this.#energy;
  }

  recharge() {
    this.#energy = 100;
  }
}

class Device {
  #batteries = [];

  constructor(batteryType) {
    this.batteryType = batteryType;
  }

  insertBatteries(bt1, bt2) {
    if (bt1?.type !== this.batteryType || bt2?.type !== this.batteryType) {
      throw new BatteryError(`You passed battery type ${bt1.type} and ${bt2.type} 
          but device is ${this.batteryType} type`);
    } else if (this.#batteries.length) {
      console.log('batteries are already set');
    } else {
      this.#batteries = [bt1, bt2];
    }
  }

  removeBatteries() {
    this.#batteries = [];
  }

  consumeEnergy(percent) {
    this.#batteries.forEach((bt) => bt.consumeEnergy(percent));
  }

  areBatteriesCharged() {
    return this.#batteries.every((bt) => bt.energy);
  }

  hasBatteries() {
    return Boolean(this.#batteries.length);
  }
}

class BatteryError extends Error { }

class Gamepad extends Device {
  #isConnected = false;

  constructor(model, batteryType) {
    super(batteryType);
    this.model = model;
  }

  connectTo(device) {
    if (this.hasBatteries() && !this.#isConnected) {
      console.log(`${this.model} has been connected to ${device}`);
      this.#isConnected = true;
    } else {
      console.log(`This ${this.model} doesn't have batteries or is already connected`);
    }
  }

  disconnect() {
    this.#isConnected = false;
  }

  play() {
    if (this.areBatteriesCharged() && this.hasBatteries()) {
      this.consumeEnergy(10);
      console.log(`you are playing`);
    } else {
      this.#isConnected = false;
      console.log(`Please change/insert batteries`);
    }
  }
}

const bt1 = new Battery('AA');
const bt2 = new Battery('BB');
const bt3 = new Battery('AA');
const xboxGamepad = new Gamepad('Xbox Gamepad', 'AA');

try {
  xboxGamepad.insertBatteries(bt1, bt2);
} catch (err) {
  if (err instanceof BatteryError) {
    xboxGamepad.insertBatteries(bt1, bt3);
  } else {
    throw err;
  }
}

xboxGamepad.connectTo('Playstation');
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.play();
xboxGamepad.removeBatteries();
xboxGamepad.play();
xboxGamepad.play();
//===========================================
