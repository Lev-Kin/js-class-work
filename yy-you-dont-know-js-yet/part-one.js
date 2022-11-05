"use strict"

const partOne = () => {
    //=======================================================================
    const me = {
        "first": "Poul",
        last: "Anderson",
        age: 42,
        specialties: ["JS", "Table Tennis"]
    };
    console.log(`My name is ${me.first}.`);
    console.log(me["last"]);

    console.log(typeof 42); // number
    console.log(typeof "abc"); // string
    console.log(typeof true); // "boolean"
    console.log(typeof undefined); // "undefined"
    console.log(typeof null); // "object" -- ошибка языка! (ожидалось null)
    console.log(typeof { "a": 1 }); // "object"
    console.log(typeof [1, 2, 3]); // "object"
    console.log(typeof function hello() { }); // "function"

    function greeting(myName) {
        console.log(`Hello, ${myName}!`);
    }
    greeting("Kyle"); // Hello, Kyle!

    function hello(myName) {
        return `Hello, ${myName}!`;
    }

    var msg = hello("Inna");
    console.log(msg); // Hello, Inna!

    var whatToSay = {
        greeting() {
            console.log("Hello!");
        },
        question() {
            console.log("What's your name?");
        },
        answer() {
            console.log("My name is Easy.");
        }
    };
    whatToSay.greeting();
    whatToSay.question();
    whatToSay.answer();

    // === оператор строгого равенства
    console.log(3 === 3.0);             // true
    console.log("yes" === "yes");       // true
    console.log(null === null);         // true
    console.log(false === false);       // true
    console.log(42 === "42");           // false
    console.log("hello" === "Hello");   // false
    console.log(true === 1);            // false
    console.log(0 === null);            // false
    console.log("" === null);           // false
    console.log(null === undefined);    // false
    console.log(NaN === NaN);           // false - лучше не использовать
    console.log(0 === -0);              // false - лучше не использовать
    // лучше использовать слудушее
    console.log(Number.isNaN(NaN));
    console.log(Object.is(-0));

    // === оператор строгого равенства
    console.log([1, 2, 3] === [1, 2, 3]);       // false
    console.log({ a: 42 } === { a: 42 });       // false
    console.log((x => x * 2) === (x => x * 2)); // false

    var x = [1, 2, 3];
    // Присваивание выполняется копированием ссылки,
    // поэтому y ссылается на *тот же* массив, что и x,
    // а не на его новую копию.
    var y = x;
    console.log(y === x);               // true
    console.log(y === [1, 2, 3]);       // false
    console.log(x === [1, 2, 3]);       // false

    // == оператор свободного равенства
    console.log(42 == "42");    // true
    console.log(1 == true);     // true

    // преобразование типов при вычислении
    var arr = ["1", "10", "100", "1000"];
    for (let i = 0; i < arr.length && arr[i] < 500; i++) {
        console.log(arr[i]);
    }

    var x = "10";
    var y = "9";
    console.log(x < y);     // осторожно, true!

    // !=== Организация кода JS ===!
    // Классы
    class Page {
        constructor(text) {
            this.text = text;
        }
        print() {
            console.log(this.text);
        }
    }
    class Notebook {
        constructor() {
            this.pages = [];
        }
        addPage(text) {
            var page = new Page(text);
            this.pages.push(page);
        }
        print() {
            for (let page of this.pages) {
                page.print();
            }
        }
    }
    var mathNote = new Notebook();
    mathNote.addPage("Arithmetic: + - * / ...");
    mathNote.addPage("Trigonometry: sin cos tan ...");
    mathNote.print();

    // Наследование классов
    class Publication {
        constructor(title, author, pubDate) {
            this.title = title;
            this.author = author;
            this.pubDate = pubDate;
        }
        print() {
            console.log(
                `Title: ${this.title}\nBy: ${this.author}\n${this.pubDate}`
            );
        }
    }
    class Book extends Publication {
        constructor(bookDetails) {
            super(
                bookDetails.title,
                bookDetails.author,
                bookDetails.publishedOn
            );
            this.publisher = bookDetails.publisher;
            this.ISBN = bookDetails.ISBN;
        }
        print() {
            super.print();
            console.log(
                `Publisher: ${this.publisher}\nISBN: ${this.ISBN}`
            );
        }
    }
    class BlogPost extends Publication {
        constructor(title, author, pubDate, URL) {
            super(title, author, pubDate);
            this.URL = URL;
        }
        print() {
            super.print();
            console.log(this.URL);
        }
    }

    var YDKJS = new Book({
        title: "You Don't Know JS",
        author: "Kyle Simpson",
        publishedOn: "June 2014",
        publisher: "O'Reilly",
        ISBN: "123456-789"
    });
    YDKJS.print();

    var forAgainstLet = new BlogPost(
        "For and against let",
        "Kyle Simpson",
        "October 27, 2014",
        "https://davidwalsh.name/for-and-against-let"
    );
    forAgainstLet.print();
}

export default partOne;