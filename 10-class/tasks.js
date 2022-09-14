//======= 1.1 Класс: базовый синтаксис =======

// class MyClass {
//     // методы класса
//     constructor() { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...
// }

// class User {

//     constructor(name) {
//         this.name = name;
//     }

//     sayHi() {
//         alert(this.name);
//     }

// }

// // Использование:
// let user = new User("Иван");
// user.sayHi();

// class User {
//     constructor(name) { this.name = name; }
//     sayHi() { alert(this.name); }
// }

// // класс - это функция
// alert(typeof User); // function

// // ...или, если точнее, это метод constructor
// alert(User === User.prototype.constructor); // true

// // Методы находятся в User.prototype, например:
// alert(User.prototype.sayHi); // alert(this.name);

// // в прототипе ровно 2 метода
// alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

//=== Class Expression
// "Named Class Expression"
// (в спецификации нет такого термина, но происходящее похоже на Named Function Expression)
// let User = class MyClass {
//     sayHi() {
//         alert(MyClass); // имя MyClass видно только внутри класса
//     }
// };

// new User().sayHi(); // работает, выводит определение MyClass

// alert(MyClass); // ошибка, имя MyClass не видно за пределами класса

//=== Геттеры/сеттеры, другие сокращения
// class User {

//     constructor(name) {
//         // вызывает сеттер
//         this.name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value.length < 4) {
//             alert("Имя слишком короткое.");
//             return;
//         }
//         this._name = value;
//     }

// }

// let user = new User("Иван");
// alert(user.name); // Иван

// user = new User(""); // Имя слишком короткое.

//=== Итого
// class MyClass {
//     prop = value; // свойство
//     constructor(...) { // конструктор
//         // ...
//     }
//     method(...) { } // метод
//     get something(...) { } // геттер
//     set something(...) { } // сеттер
//     [Symbol.iterator]() { } // метод с вычисляемым именем (здесь - символом)
//     // ...
// }


//===
//======= 1.2 Наследование классов =======

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//     stop() {
//         this.speed = 0;
//         alert(`${this.name} стоит.`);
//     }
// }

// // Наследуем от Animal указывая "extends Animal"
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} прячется!`);
//     }
// }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.hide(); // Белый кролик прячется!

//=== Переопределение методов
// class Animal {

//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }

//     run(speed) {
//         this.speed = speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }

//     stop() {
//         this.speed = 0;
//         alert(`${this.name} стоит.`);
//     }

// }

// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} прячется!`);
//     }

//     stop() {
//         super.stop(); // вызываем родительский метод stop
//         this.hide(); // и затем hide
//     }
// }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!
// class Rabbit extends Animal {
//     stop() {
//         setTimeout(() => super.stop(), 1000); // вызывает родительский stop после 1 секунды
//     }
// }

//=== Переопределение конструктора
// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     // ...
// }

// class Rabbit extends Animal {

//     constructor(name, earLength) {
//         this.speed = 0;
//         this.name = name;
//         this.earLength = earLength;
//     }

//     // ...
// }

// // Не работает!
// let rabbit = new Rabbit("Белый кролик", 10); // Error: this is not defined.

//=== Итого
// - Чтобы унаследовать от класса: class Child extends Parent:
//  - При этом Child.prototype.__proto__ будет равен Parent.prototype, так что методы будут унаследованы.
// - При переопределении конструктора:
//  - Обязателен вызов конструктора родителя super() в конструкторе Child до обращения к this.
// - При переопределении другого метода:
//  - Мы можем вызвать super.method() в методе Child для обращения к методу родителя Parent.
// - Внутренние детали:
//  - Методы запоминают свой объект во внутреннем свойстве [[HomeObject]].
//    Благодаря этому работает super, он в его прототипе ищет родительские методы.
//  - Поэтому копировать метод, использующий super, между разными объектами небезопасно.

// Также:
// - У функций-стрелок нет своего this и super, поэтому они «прозрачно» встраиваются во внешний контекст.


//===
//======= 1.3 Статические свойства и методы =======
// class User {
//     static staticMethod() {
//         alert(this === User);
//     }
// }

// User.staticMethod(); // true

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }

//     static compare(articleA, articleB) {
//         return articleA.date - articleB.date;
//     }
// }

// // использование
// let articles = [
//     new Article("HTML", new Date(2019, 1, 1)),
//     new Article("CSS", new Date(2019, 0, 1)),
//     new Article("JavaScript", new Date(2019, 11, 1))
// ];

// articles.sort(Article.compare);

// alert(articles[0].title); // CSS

// class Article {
//     constructor(title, date) {
//         this.title = title;
//         this.date = date;
//     }

//     static createTodays() {
//         // помним, что this = Article
//         return new this("Сегодняшний дайджест", new Date());
//     }
// }

// let article = Article.createTodays();

// alert(article.title); // Сегодняшний дайджест

//=== Статические свойства
// class Article {
//     static publisher = "Илья Кантор";
// }

// alert(Article.publisher); // Илья Кантор

//=== Наследование статических свойств и методов
// class Animal {

//     constructor(name, speed) {
//         this.speed = speed;
//         this.name = name;
//     }

//     run(speed = 0) {
//         this.speed += speed;
//         alert(`${this.name} бежит со скоростью ${this.speed}.`);
//     }

//     static compare(animalA, animalB) {
//         return animalA.speed - animalB.speed;
//     }

// }

// // Наследует от Animal
// class Rabbit extends Animal {
//     hide() {
//         alert(`${this.name} прячется!`);
//     }
// }

// let rabbits = [
//     new Rabbit("Белый кролик", 10),
//     new Rabbit("Чёрный кролик", 5)
// ];

// rabbits.sort(Rabbit.compare);

// rabbits[0].run(); // Чёрный кролик бежит со скоростью 5.

//=== Итого
// Статические методы используются для функциональности, принадлежат классу «в целом», а не относятся к конкретному объекту класса.
// Например, метод для сравнения двух статей Article.compare(article1, article2) или фабричный метод Article.createTodays().
// В объявлении класса они помечаются ключевым словом static.
// Статические свойства используются в тех случаях, когда мы хотели бы сохранить данные на уровне класса, а не какого-то одного объекта.
// Синтаксис:
// class MyClass {
//     static property = ...;

//     static method() {
//       ...
//     }
// }
// Технически, статическое объявление – это то же самое, что и присвоение классу:

// MyClass.property = ...
// MyClass.method = ...

// Статические свойства и методы наследуются.
// Для class B extends A прототип класса B указывает на A: B.[[Prototype]] = A.
// Таким образом, если поле не найдено в B, поиск продолжается в A.

//===
//======= 1.4 Приватные и защищённые методы и свойства =======
// class CoffeeMachine {
//     _waterAmount = 0;

//     set waterAmount(value) {
//         if (value < 0) throw new Error("Отрицательное количество воды");
//         this._waterAmount = value;
//     }

//     get waterAmount() {
//         return this._waterAmount;
//     }

//     constructor(power) {
//         this._power = power;
//     }

// }

// // создаём новую кофеварку
// let coffeeMachine = new CoffeeMachine(100);

// // устанавливаем количество воды
// coffeeMachine.waterAmount = -10; // Error: Отрицательное количество воды

// class CoffeeMachine {
//     #waterLimit = 200;

//     #checkWater(value) {
//         if (value < 0) throw new Error("Отрицательный уровень воды");
//         if (value > this.#waterLimit) throw new Error("Слишком много воды");
//     }
// }

// let coffeeMachine = new CoffeeMachine();

// // снаружи  нет доступа к приватным методам класса
// coffeeMachine.#checkWater(); // Error
// coffeeMachine.#waterLimit = 1000; // Error

// class CoffeeMachine {

//     #waterAmount = 0;

//     get waterAmount() {
//         return this.#waterAmount;
//     }

//     set waterAmount(value) {
//         if (value < 0) throw new Error("Отрицательный уровень воды");
//         this.#waterAmount = value;
//     }
// }

// let machine = new CoffeeMachine();

// machine.waterAmount = 100;
// alert(machine.#waterAmount); // Error

//=== Итого
// В терминах ООП отделение внутреннего интерфейса от внешнего называется инкапсуляция.
// Это даёт следующие выгоды:

// --- Защита для пользователей, чтобы они не выстрелили себе в ногу
// Представьте себе, что есть команда разработчиков, использующая кофеварку.
// Она была изготовлена компанией «Лучшие Кофеварки» и работает нормально, но защитный кожух был снят.
// Внутренний интерфейс стал доступен извне.
// Все разработчики культурны – они используют кофеварку по назначению.
// Но один из них, Джон, решил, что он самый умный, и сделал некоторые изменения во внутренностях кофеварки.
// После чего кофеварка вышла из строя через два дня.
// Это, конечно, не вина Джона, а скорее человека, который снял защитный кожух и позволил Джону делать свои манипуляции.
// То же самое в программировании. Если пользователь класса изменит вещи, не предназначенные для изменения извне – последствия непредсказуемы.

// --- Поддерживаемость
// Ситуация в программировании сложнее, чем с реальной кофеваркой, потому что мы не просто покупаем её один раз.
// Код постоянно подвергается разработке и улучшению.

// --- Если мы чётко отделим внутренний интерфейс, то разработчик класса сможет свободно менять
// его внутренние свойства и методы, даже не информируя пользователей…
// Если вы разработчик такого класса, то приятно знать, что приватные методы можно безопасно переименовывать,
// их параметры можно изменять и даже удалять, потому что от них не зависит никакой внешний код.
// В новой версии вы можете полностью всё переписать, но пользователю будет легко обновиться, если внешний интерфейс остался такой же.

// --- Сокрытие сложности
// Люди обожают использовать простые вещи. По крайней мере, снаружи. Что внутри – это другое дело.
// Программисты не являются исключением.

// --- Всегда удобно, когда детали реализации скрыты, и доступен простой, хорошо документированный внешний интерфейс.
// Для сокрытия внутреннего интерфейса мы используем защищённые или приватные свойства:
// Защищённые поля имеют префикс _. Это хорошо известное соглашение, не поддерживаемое на уровне языка. 
// Программисты должны обращаться к полю, начинающемуся с _, только из его класса и классов, унаследованных от него.
// Приватные поля имеют префикс #. JavaScript гарантирует, что мы можем получить доступ к таким полям только внутри класса.
// В настоящее время приватные поля не очень хорошо поддерживаются в браузерах, но можно использовать полифил.

//===
//======= 1.5 Расширение встроенных классов =======
// добавим один метод (можно более одного)
// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// alert(arr.isEmpty()); // false

// let filteredArr = arr.filter(item => item >= 10);
// alert(filteredArr); // 10, 50
// alert(filteredArr.isEmpty()); // false

// class PowerArray extends Array {
//     isEmpty() {
//         return this.length === 0;
//     }

//     // встроенные методы массива будут использовать этот метод как конструктор
//     static get [Symbol.species]() {
//         return Array;
//     }
// }

// let arr = new PowerArray(1, 2, 5, 10, 50);
// alert(arr.isEmpty()); // false

// // filter создаст новый массив, используя arr.constructor[Symbol.species] как конструктор
// let filteredArr = arr.filter(item => item >= 10);

// // filteredArr не является PowerArray, это Array
// alert(filteredArr.isEmpty()); // Error: filteredArr.isEmpty is not a function


//===
//======= 1.6 Проверка класса: "instanceof" =======
// class Rabbit { }
// let rabbit = new Rabbit();

// // это объект класса Rabbit?
// alert(rabbit instanceof Rabbit); // true

// // вместо класса
// function Rabbit() { }

// alert(new Rabbit() instanceof Rabbit); // true

// let arr = [1, 2, 3];
// alert(arr instanceof Array); // true
// alert(arr instanceof Object); // true

//=== Итого
// Давайте обобщим, какие методы для проверки типа мы знаем:
//              работает для	возвращает
// typeof	      примитивов	строка
// {}.toString	примитивов, встроенных объектов, объектов с Symbol.toStringTag	строка
// instanceof	    объектов	true/false

// Как мы можем видеть, технически {}.toString «более продвинут», чем typeof.
// А оператор instanceof – отличный выбор, когда мы работаем с иерархией классов и хотим делать проверки с учётом наследования.


//===
//======= 1.7 Примеси =======
// примесь
// let sayHiMixin = {
//     sayHi() {
//         alert(`Привет, ${this.name}`);
//     },
//     sayBye() {
//         alert(`Пока, ${this.name}`);
//     }
// };

// // использование:
// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // копируем методы
// Object.assign(User.prototype, sayHiMixin);

// // теперь User может сказать Привет
// new User("Вася").sayHi(); // Привет, Вася!

// let sayMixin = {
//     say(phrase) {
//         alert(phrase);
//     }
// };

// let sayHiMixin = {
//     __proto__: sayMixin, // (или мы можем использовать Object.create для задания прототипа)

//     sayHi() {
//         // вызываем метод родителя
//         super.say(`Привет, ${this.name}`); // (*)
//     },
//     sayBye() {
//         super.say(`Пока, ${this.name}`); // (*)
//     }
// };

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // копируем методы
// Object.assign(User.prototype, sayHiMixin);

// // теперь User может сказать Привет
// new User("Вася").sayHi(); // Привет, Вася!


// let eventMixin = {
//     /**
//      * Подписаться на событие, использование:
//      * menu.on('select', function(item) { ... }
//      */
//     on(eventName, handler) {
//         if (!this._eventHandlers) this._eventHandlers = {};
//         if (!this._eventHandlers[eventName]) {
//             this._eventHandlers[eventName] = [];
//         }
//         this._eventHandlers[eventName].push(handler);
//     },

//     /**
//      * Отменить подписку, использование:
//      * menu.off('select', handler)
//      */
//     off(eventName, handler) {
//         let handlers = this._eventHandlers && this._eventHandlers[eventName];
//         if (!handlers) return;
//         for (let i = 0; i < handlers.length; i++) {
//             if (handlers[i] === handler) {
//                 handlers.splice(i--, 1);
//             }
//         }
//     },

//     /**
//      * Сгенерировать событие с указанным именем и данными
//      * this.trigger('select', data1, data2);
//      */
//     trigger(eventName, ...args) {
//         if (!this._eventHandlers || !this._eventHandlers[eventName]) {
//             return; // обработчиков для этого события нет
//         }

//         // вызовем обработчики
//         this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
//     }
// };

// Создадим класс
// class Menu {
//     choose(value) {
//         this.trigger("select", value);
//     }
// }
// // Добавим примесь с методами для событий
// Object.assign(Menu.prototype, eventMixin);

// let menu = new Menu();

// // Добавить обработчик, который будет вызван при событии "select":
// menu.on("select", value => alert(`Выбранное значение: ${value}`));

// // Генерирует событие => обработчик выше запускается и выводит:
// menu.choose("123"); // Выбранное значение: 123

//=== Итого
// Примесь – общий термин в объектно-ориентированном программировании: класс, который содержит в себе методы для других классов.
// Некоторые другие языки допускают множественное наследование. JavaScript не поддерживает множественное наследование, 
// но с помощью примесей мы можем реализовать нечто похожее, скопировав методы в прототип.
// Мы можем использовать примеси для расширения функциональности классов, например, для обработки событий, как мы сделали это выше.
// С примесями могут возникнуть конфликты, если они перезаписывают существующие методы класса.
// Стоит помнить об этом и быть внимательнее при выборе имён для методов примеси, чтобы их избежать.

//============================================================================
//============================================================================
//============================================================================
//es5

// const person = {
//     userName: 'Bob',
//     age: 25,
//     brain: true,
// };
// const programmer = {
//     userName: 'Valerchik',
//     age: 25,
//     brain: true,
//     stack: ['HTML', 'CSS']
// }

// function Person (userName, age) {
//     console.log(this)
//     //return this   ----- автоматчески будет возвращать пустой обьект
//     this.userName = userName;
//     this.age = age;
//     this.brain = true;
// }

// const person2 = new Person('Mooly', 66)
// console.log(new Person ('holly', 5)) //здесь this это пустой обьект класса person, пользуемся функцией как конструктором и классом

// //инстанс - это обьект созданный с помощью конструктора(класса) (инстанс persona например)
// console.log(person2 instanceof Person);
// // не стоит добавлять поля в получившиеся обьекты
// //класс это обычная функция
// //!!! через new функция всегда должна возвращать обьект!!!



// //prototype - это обьект
// console.log(Person.prototype)  //в прототипе персон хранит ссылку на самого себя, это обычный обьект
// const person3 = new Person.prototype.constructor('Peter, 20')
// // const Programmer = () => {
// //     this.a = 2;
// // };
// // console.log(new Programmer()) //так работать не будет, так как у стрелочной функции нет своего This

// Person.prototype.constitution = 'bla bla bla';

// //одна функция- один прототип
// console.log(person.__proto__) //как либо менять прото нельзя


// const obj = Object.create({a: 2}) //один раз при рождении обьекта можем присвоить ему прототип, если передать null. то у него не будет прототипов и это будет чистый обьект
// console.log(obj)

// Person.prototype.run = function (){   //создаем одну функцию для всех дальнейших обьектов
//     console.log(`${this.userName} run`)
// }


//--------------------------------------------------------------------//

//Наследование
// function Person (userName, age) {
//     this.userName = userName
//     this.age = age
//     this.hasBrain = true
// }
// Person.prototype.run = funciton () {
//     console.log(`${this.userName} runs`);
// }
// function Programmer (stack, ...args) {
//     Person.call(this, ...args)
//     this.stack = stack;
// }
// Programmer.prototype = Object.create(Person.prototype);
// Programmer.prototype.code = function () {
//     console.log(`${this.userName} code`)
// }
// const p1 = new Programmer(['HTML', 'CSS'], 'John', 61);
// const person = new Person ('Valerchik', 12)
// person.code()

//--------es6

class Person {
    hasBrain = true;
    #age = 0;   //приватное поле, недоступно снаружи, доступ можно получить только внутри класса
    #creditPayments = [2, 3, 5, 7, 8];

    constructor(userName) {
        this.userName = userName;

    }
    #calculateAverage() {
        return this.#creditPayments.reduce((sum, item) => sum + item) / this.#creditPayments.length;
    }
    showAveragePayment() {
        console.log(this.#calculateAverage())
    }
    set age(val) {
        if (val > 0 && val < 100) {
            this.#age = val
        }
    }
    get age() {
        return this.#age;
    }

    eat = () => {
        console.log('EAT!')  //так оно идет в инстанс
    }

    run() {
        console.log(`${this.userName} runs`);  //а так в прототип
    }
}

const p1 = new Person('Valerchik', 12)
p1.age = 25;
p1.showAveragePayment()

//приватное поле
//приватные методы

//наследование

class Programmer extends Person {   //расширяем класс персонб программер такой же как и персон только + еще что-то, все что есть в персоне будет и здесь
    constructor(stack, ...args) { //args это все аргументы персона
        super(...args); //аналог Person.call(this), с его помощью запускаем конструтор персона, чтобы здесь хранились все его данные
        this.stack = stack;
    }

    code() {
        console.log(`${this.userName} codes`);
    }
}

const p2 = new Programmer(['HTML', 'JS'], 'Yuri')

class jsProgrammer extends Programmer {
    smoozie = true

    //по умолчанию сделает
    // constructor(){  //только значения аргументов будут Undefind
    //     super()
    // }

    static getSmooze(frontender) {
        frontender.smoozie = true;
    }  //прикручен к !!!классу. а не инстансу

    run() {     //method override - сохранили старое и добавили что-то свое, названия в этом случае одинаковые, и он вызвался раньше в цепочке прототипов
        console.log('In a fahsion way');
        super.run();  //заимствование метода
    }
}
const jsp = new jsProgrammer(['CSS', 'JS'], 'OLEG')


//статические методы класса 
jsProgrammer.getSmooze(jsp)

//тоже самое что и 
jsProgrammer.getSmooze = function (frontender) {
    frontender.smoozie = true;

}