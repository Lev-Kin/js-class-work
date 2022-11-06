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










}

export default partTwo;