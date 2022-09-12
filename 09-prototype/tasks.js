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

