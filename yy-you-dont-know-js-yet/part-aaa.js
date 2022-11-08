"use strict"

const partAaa = () => {
    //=======================================================================

    // !=== Значения и ссылки
    // Если вы присваиваете/передаете само значение,
    // то это значение копируется.
    var myName = "Kyle";
    var yourName = myName;
    myName = "Frank";
    console.log(myName);        // Frank
    console.log(yourName);      // Kyle

    // В JS только объектные значения (массивы, объекты, функции и т. д.)
    // рассматриваются как ссылки.
    // Примитивы хранятся по значению, а объекты — по ссылке.
    var myAddress = {
        street: "123 JS Blvd",
        city: "Austin",
        state: "TX"
    };
    var yourAddress = myAddress;        // Переезжаем по новому адресу!
    myAddress.street = "456 TS Ave";
    console.log(yourAddress.street);    // 456 TS Ave

    // !=== Многоликие функции
    // Несколько форм объявлений:
    // Объявление функции-генератора
    function* two() { }

    // Объявление асинхронной функции
    async function three() { }

    // Объявление асинхронной функции-генератора
    async function* four() { }

    // Объявление экспортируемой именованной функции
    // (модули ES6)
    // export function five() { }

    // Eще несколько из(многих) форм функциональных выражений:
    // IIFE
    (function () { })();
    (function namedIIFE() { })();

    // asynchronous IIFE
    (async function () { })();
    (async function namedAIIFE() { })();

    // arrow function expressions
    var f;
    f = () => 42;
    f = x => x * 2;
    f = (x) => x * 2;
    f = (x, y) => x * y;
    f = x => ({ x: x * 2 });
    f = x => { return x * 2; };
    f = async x => {
        var y = await doSomethingAsync(x);
        return y * 2;
    };

    // Функции также могут задаваться в определениях классов и определениях 
    // объектных литералов. В этих формах они обычно называются методами.
    class SomethingKindaGreat {
        // class methods
        coolMethod() { } // без запятых!
        boringMethod() { }
    }

    var EntirelyDifferent = {
        // object methods
        coolMethod() { }, // с запятыми!
        boringMethod() { },
        // свойство с (анонимным) функциональным
        // выражением
        oldSchool: function () { }
    };

    // !=== Условное сравнение с преобразованием типа
    var x = 1;
    if (x) {
        // будет выполнено!
    }
    while (x) {
        // будет выполнено один раз!
        x = false;
    }

    // Эти условные выражения можно интерпретировать так:
    var x = 1;
    if (x == true) {
        // будет выполнено!
    }

    while (x == true) {
        // будет выполнено один раз!
        x = false;
    }

    // В этом конкретном случае — когда значение x равно 1 — эта модель работает,
    // но в более общем случае она теряет точность.
    var x = "hello";
    if (x) {
        // будет выполнено!
    }
    if (x == true) {
        // не будет выполнено :(
    }

    // Нехорошо.Что же в действительности происходит в команде if?
    // Более точная мысленная модель выглядит так:
    var x = "hello";
    if (Boolean(x) == true) {
        // будет выполнено
    }

    // что то же самое, что:
    if (Boolean(x) === true) {
        // будет выполнено
    }

    // !=== Прототипические классы
    var Classroom1 = {
        welcome() {
            console.log("Welcome, students!");
        }
    };
    var mathClass = Object.create(Classroom1);
    mathClass.welcome(); // Welcome, students!

    // Паттерн «Прототипический класс» отнес бы поведение делегирования к наследованию 
    // и мог бы определить его (с таким же поведением) следующим образом:
    function Classroom2() {
        // ..
    }
    Classroom2.prototype.welcome = function hello() {
        console.log("Welcome, students!");
    };
    var mathClass = new Classroom2();
    mathClass.welcome(); // Welcome, students!

    // В настоящее время паттерн «прототипический класс»
    // настоятельно не рекомендуется использовать. 
    // Ему на смену пришел механизм классов ES6:
    class Classroom3 {
        constructor() {
            // ..
        }
        welcome() {
            console.log("Welcome, students!");
        }
    }
    var mathClass = new Classroom3();
    mathClass.welcome(); // Welcome, students!
}

export default partAaa;
