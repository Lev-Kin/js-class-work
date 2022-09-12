


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
    #creditPayments = [2,3,5,7,8];

    constructor (userName) {
        this.userName = userName;
        
    }
    #calculateAverage () {
        return this.#creditPayments.reduce((sum, item) => sum + item) / this.#creditPayments.length;
    }
    showAveragePayment () {
        console.log(this.#calculateAverage())
    }
    set age(val) {
        if(val > 0 && val < 100){
            this.#age = val
        }
    }
    get age () {
        return this.#age;
    }

    eat = () => {
        console.log('EAT!')  //так оно идет в инстанс
    }

    run () {
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
    constructor(stack, ...args){ //args это все аргументы персона
        super(...args); //аналог Person.call(this), с его помощью запускаем конструтор персона, чтобы здесь хранились все его данные
        this.stack = stack;
    }

    code () {
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

    static getSmooze (frontender){
        frontender.smoozie = true;
    }  //прикручен к !!!классу. а не инстансу

    run () {     //method override - сохранили старое и добавили что-то свое, названия в этом случае одинаковые, и он вызвался раньше в цепочке прототипов
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