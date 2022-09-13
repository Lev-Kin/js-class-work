//======= 1.1 [[Prototype]] =======
// let animal = {
//     eats: true
// };
// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // (*)

// // теперь мы можем найти оба свойства в rabbit:
// alert(rabbit.eats); // true (**)
// alert(rabbit.jumps); // true

//===
// let animal = {
//     eats: true,
//     walk() {
//         alert("Animal walk");
//     }
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// let longEar = {
//     earLength: 10,
//     __proto__: rabbit
// };

// // walk взят из цепочки прототипов
// longEar.walk(); // Animal walk
// alert(longEar.jumps); // true (из rabbit)

//=== Операция записи не использует прототип
// let animal = {
//     eats: true,
//     walk() {
//         /* этот метод не будет использоваться в rabbit */
//     }
// };

// let rabbit = {
//     __proto__: animal
// };

// rabbit.walk = function () {
//     alert("Rabbit! Bounce-bounce!");
// };

// rabbit.walk(); // Rabbit! Bounce-bounce!

//=== Значение «this»
// методы animal
// let animal = {
//     walk() {
//         if (!this.isSleeping) {
//             alert(`I walk`);
//         }
//     },
//     sleep() {
//         this.isSleeping = true;
//     }
// };

// let rabbit = {
//     name: "White Rabbit",
//     __proto__: animal
// };

// // модифицирует rabbit.isSleeping
// rabbit.sleep();

// alert(rabbit.isSleeping); // true
// alert(animal.isSleeping); // undefined (нет такого свойства в прототипе)

//=== Цикл for...in
// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// // Object.keys возвращает только собственные ключи
// alert(Object.keys(rabbit)); // jumps

// // for..in проходит и по своим, и по унаследованным ключам
// for (let prop in rabbit) alert(prop); // jumps, затем eats

//=== Итого
// - В JavaScript все объекты имеют скрытое свойство [[Prototype]], которое является либо другим объектом, либо null.
// - Мы можем использовать obj.__proto__ для доступа к нему
// (исторически обусловленный геттер/сеттер, есть другие способы, которые скоро будут рассмотрены).
// - Объект, на который ссылается [[Prototype]], называется «прототипом».
// - Если мы хотим прочитать свойство obj или вызвать метод, которого не существует у obj, тогда JavaScript попытается найти его в прототипе.
// - Операции записи/удаления работают непосредственно с объектом, они не используют прототип (если это обычное свойство, а не сеттер).
// - Если мы вызываем obj.method(), а метод при этом взят из прототипа, то this всё равно ссылается на obj.
// Таким образом, методы всегда работают с текущим объектом, даже если они наследуются.
// - Цикл for..in перебирает как свои, так и унаследованные свойства.
// Остальные методы получения ключей/значений работают только с собственными свойствами объекта.

//======= 1.2 F.prototype =======
// let animal = {
//     eats: true
// };

// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// alert(rabbit.eats); // true

//=== F.prototype по умолчанию, свойство constructor
// function Rabbit() { }
// // по умолчанию:
// // Rabbit.prototype = { constructor: Rabbit }

// let rabbit = new Rabbit(); // наследует от {constructor: Rabbit}

// alert(rabbit.constructor == Rabbit); // true (свойство получено из прототипа)

//=== Итого
// Свойство F.prototype (не путать с [[Prototype]]) устанавливает[[Prototype]] для новых объектов при вызове new F().
// Значение F.prototype должно быть либо объектом, либо null. Другие значения не будут работать.
// Свойство "prototype" является особым, только когда оно назначено функции-конструктору, которая вызывается оператором new.

//======= 1.3 Встроенные прототипы =======

// let obj = {};

// alert(obj.__proto__ === Object.prototype); // true
// // obj.toString === obj.__proto__.toString === Object.prototype.toStringlet obj = {};

// alert(obj.__proto__ === Object.prototype); // true
// // obj.toString === obj.__proto__.toString === Object.prototype.toString

// alert(Object.prototype.__proto__); // null

// //=== Другие встроенные прототипы
// let arr = [1, 2, 3];

// // наследует ли от Array.prototype?
// alert(arr.__proto__ === Array.prototype); // true

// // затем наследует ли от Object.prototype?
// alert(arr.__proto__.__proto__ === Object.prototype); // true

// // и null на вершине иерархии
// alert(arr.__proto__.__proto__.__proto__); // null

// // === Изменение встроенных прототипов
// if (!String.prototype.repeat) { // Если такого метода нет
//     // добавляем его в прототип

//     String.prototype.repeat = function (n) {
//         // повторить строку n раз

//         // на самом деле код должен быть немного более сложным
//         // (полный алгоритм можно найти в спецификации)
//         // но даже неполный полифил зачастую достаточно хорош для использования
//         return new Array(n + 1).join(this);
//     };
// }

// alert("La".repeat(3)); // LaLaLa

// //=== Заимствование у прототипов
// let obj = {
//     0: "Hello",
//     1: "world!",
//     length: 2,
// };

// obj.join = Array.prototype.join;

// alert(obj.join(',')); // Hello,world!

//=== Итого
// - Все встроенные объекты следуют одному шаблону:
//   - Методы хранятся в прототипах (Array.prototype, Object.prototype, Date.prototype и т.д.).
//   - Сами объекты хранят только данные (элементы массивов, свойства объектов, даты).
// - Примитивы также хранят свои методы в прототипах объектов-обёрток:
// Number.prototype, String.prototype, Boolean.prototype. Только у значений undefined и null нет объектов-обёрток.
// - Встроенные прототипы могут быть изменены или дополнены новыми методами.
// Но не рекомендуется менять их. Единственная допустимая причина – это добавление нового метода из стандарта,
// который ещё не поддерживается движком JavaScript.
// Function.prototype.defer = function (ms) {
//     setTimeout(this, ms);
// };

// function f() {
//     alert("Hello!");
// }

// f.defer(1000); // выведет "Hello!" через 1 секунду

//======= 1.4 Методы прототипов, объекты без свойства __proto__ =======
// let animal = {
//     eats: true
// };

// // создаём новый объект с прототипом animal
// let rabbit = Object.create(animal);

// alert(rabbit.eats); // true

// alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit

// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}

// let animal = {
//     eats: true
// };

// let rabbit = Object.create(animal, {
//     jumps: {
//         value: true
//     }
// });

// alert(rabbit.jumps); // true

// Object.create(proto, [descriptors]) – создаёт пустой объект со свойством [[Prototype]], 
// указанным как proto, и необязательными дескрипторами свойств descriptors.
// Object.getPrototypeOf(obj) – возвращает свойство [[Prototype]] объекта obj.
// Object.setPrototypeOf(obj, proto) – устанавливает свойство [[Prototype]] объекта obj как proto.

// let chineseDictionary = Object.create(null);
// chineseDictionary.hello = "你好";
// chineseDictionary.bye = "再见";

// alert(Object.keys(chineseDictionary)); // hello,bye

// let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

// Ещё методы:
// Object.keys(obj) / Object.values(obj) / Object.entries(obj)
// – возвращают массив всех перечисляемых собственных строковых ключей/значений/пар ключ-значение.
// Object.getOwnPropertySymbols(obj) – возвращает массив всех собственных символьных ключей.
// Object.getOwnPropertyNames(obj) – возвращает массив всех собственных строковых ключей.
// Reflect.ownKeys(obj) – возвращает массив всех собственных ключей.
// obj.hasOwnProperty(key): возвращает true, если у obj есть собственное (не унаследованное) свойство с именем key.

