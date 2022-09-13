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

//======= 1.3 Статические свойства и методы =======
// class User {
//     static staticMethod() {
//         alert(this === User);
//     }
// }

// User.staticMethod(); // true




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