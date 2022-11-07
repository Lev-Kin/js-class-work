"use strict"

const partTwo = () => {
    //=======================================================================
    // === Потребление итераторов

    // Имеется итератор для некоторого источника данных:
    var it = 'aaaaaaaa';
    // последовательный перебор его результатов
    for (let val of it) {
        console.log(`Iterator value: ${val}`);
    }

    // spred and rest (...)
    // Распределение в массив:
    // распределение итератора в массив,
    // каждое значение в переборе занимает
    // отдельный элемент (позицию) в массиве.
    // var vals = [ ...it ];

    // Распределение при вызове функции:
    // распределение итератора в вызов функции,
    // каждое значение в переборе занимает
    // отдельный аргумент (позицию).
    // doSomethingUseful( ...it );

    // === Итерируемые значения
    // массив является итерируемым значением
    var arr = [10, 20, 30];
    for (let val of arr) {
        console.log(`Array value: ${val}`);
    }

    var arrCopy = [...arr];
    console.log(arrCopy);

    var greeting = "Hello world!";
    var chars = [...greeting];
    console.log(chars);

    // Структура данных Map 
    // (карта, словарь, ассоциативный массив)
    // использует объекты в качестве ключей
    // Два элемента DOM, `btn1` и `btn2`
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const textBtn1 = document.createTextNode(" === 1 === ");
    const textBtn2 = document.createTextNode(" === 2 === ");
    btn1.appendChild(textBtn1);
    btn2.appendChild(textBtn2);
    document.body.appendChild(btn1);
    document.body.appendChild(btn2);

    var buttonNames = new Map();
    buttonNames.set(btn1, "Button 1");
    buttonNames.set(btn2, "Button 2");
    for (let [btn, btnName] of buttonNames) {
        btn.addEventListener("click", function onClick() {
            console.log(`Clicked ${btnName}`);
        });
    }

    // потреблять только значения из приведенной выше карты
    for (let btnName of buttonNames.values()) {
        console.log(btnName);
    }

    // получить индекс и значение для перебора массива
    var arr = [10, 20, 30];
    for (let [idx, val] of arr.entries()) {
        console.log(`[${idx}]: ${val}`);
    }

    // Для всех встроенных итерируемых значений в JS доступны три формы 
    // итераторов: только для ключей (keys()), 
    // только для значений (values()) и для записей (entries()).


    // !=== Замыкания ===!
    {
        function greeting(msg) {
            return function who(name) {
                console.log(`${msg}, ${name}!`);
            };
        };
        var hello = greeting("Hello");
        var howdy = greeting("Howdy");
        hello("Kyle");      // Hello, Kyle!
        hello("Sarah");     // Hello, Sarah!
        howdy("Grant");     // Howdy, Grant!

        function counter(step = 1) {
            var count = 0;
            return function increaseCount() {
                count = count + step;
                return count;
            };
        }
        var incBy1 = counter(1);
        var incBy3 = counter(3);
        console.log(incBy1()); // 1
        console.log(incBy1()); // 2
        console.log(incBy3()); // 3
        console.log(incBy3()); // 6
        console.log(incBy3()); // 9

        // Внешняя область видимости не обязана быть функцией 
        // — обычно она ей является, но не всегда.
        // Важно лишь то, чтобы во внешней области видимости была
        // как минимум одна переменная, к которой происходит обращение
        // из внутренней функции.
        var buttons = new Map();
        buttons.set(btn1, buttons.size);
        buttons.set(btn2, buttons.size);
        for (let [btn, idx] of buttons.entries()) {
            btn.addEventListener("click", function onClick() {
                console.log(`Clicked on button (${idx})!`);
            });
        }

        // Замыкания чаще всего встречаются при работе с асинхронным кодом
        // — например, обратными вызовами.
        function getSomeData(url) {
            return (url, function onResponse(resp) { // ajax <--- return
                console.log(
                    `Response (from ${url}): ${resp}`
                );
            });
        }
        getSomeData("https://some.url/wherever");
        // Response (from https://some.url/wherever): ...
    } globalThis;


    // !=== this
    function classroom(teacher) {
        return function study() {
            console.log(
                `${teacher} says to study ${this.topic}`
            );
        };
    }
    var assignment = classroom("Kyle");
    // assignment(); // ошибка

    // Копия ссылки на функцию assignment назначается как свойство объекта
    // homework, после чего она вызывается выражением homework.assignment().
    // Это означает, что this для этого вызова функции будет указывать на объект
    // homework. Следовательно, this.topic преобразуется в "JS".
    var homework = {
        topic: "JS",
        assignment: assignment
    };
    homework.assignment();          // Kyle says to study JS

    // Vетод call(..), который получает объект (otherHomework в данном случае),
    // используемый для назначения ссылки this для вызова функции.
    // Свойство this.topic преобразуется в "Math".
    var otherHomework = {
        topic: "Math"
    };
    assignment.call(otherHomework); // Kyle says to study Math

    // !=== Прототипы
    var homework = {
        topic: "JS"
    };

    var otherHomework = Object.create(homework);
    console.log(homework.topic);        // "JS"
    console.log(otherHomework.topic);   // "JS"

    otherHomework.topic = "Math";
    console.log(otherHomework.topic);   // "Math"
    console.log(homework.topic);        // "JS" -- не "Math"

    var homework = {
        study() {
            console.log(`Please study ${this.topic}`);
        }
    };
    // Делегирование поведения объектов
    var jsHomework = Object.create(homework);
    jsHomework.topic = "JS";
    jsHomework.study();     // Please study JS

    var mathHomework = Object.create(homework);
    mathHomework.topic = "Math";
    mathHomework.study();   // Please study Math
}

export default partTwo;
