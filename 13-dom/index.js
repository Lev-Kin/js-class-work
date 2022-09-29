//===============================
// Document
// Oject
// Model
//===============================

// https://learn.javascript.ru/json
// https://learn.javascript.ru/dom-nodes
// https://reqres.in/
// https://reqres.in/api-docs/ - песочница

// console.log(document.body);
// console.log(document.body.children[4].children[0]);
// const h1 = document.body.children[2];

// console.log(h1.nextElementSibling);
// console.log(h1.previousElementSibling);
// console.log(h1.parentElement);

// только getElementById возрощает елемент
// ОСТАЛЬНЫЕ КОЛЕКЦИЮ
// const ul = document.getElementById('list');
// console.log(ul);
// console.log(ul.children);

// const lis = document.getElementsByTagName('li');
// console.log(lis);

// console.log(Array.from(lis));
// console.log([...lis]);

// const lis = document.getElementsByClassName('item');
// console.log(lis);

// const ol = document.getElementById('test');
// console.log(ol.getElementsByClassName('item'));

// const lis = document.querySelector('#list');
// console.log(lis);

// const lis = document.querySelector('#list > li');
// console.log(lis);

// const lis = document.querySelectorAll('#list > li:not(.item)')
// console.log(lis);

// const uls = document.getElementsByTagName('ul');
// [...uls].forEach((ul) => console.log(ul.getElementsByClassName('item')))

// const lisDead = document.querySelectorAll('.item');
// const lisAlive = document.getElementsByClassName('item');

// console.log(lisDead);
// console.log(lisAlive);

// const btr = document.getElementById('btr');
// console.log(btr);

//btr.addEventListener('click'); // btr.onclick();

// const btn = document.getElementById('btn');

// btn.addEventListener('click', function () {
//     console.log('HI THERE!');
// });
// const onBtnClick = function () {
//     console.log('HI THERE AGAIN!');
// };

// btn.addEventListener('click', onBtnClick);
// btn.removeEventListener('click', onBtnClick);

// const btn = document.getElementById('btn');
// function onBtnClick() {
//     console.log("dfadfa");
//     this.removeEventListener('click', onBtnClick);
// };
// btn.addEventListener('click', onBtnClick);

// const btn = document.getElementById('btn');
// const listener = function (event) {
//     console.log('GO event');
// }; 
// btn.addEventListener('click', listener, false);
// btn.removeEventListener('click', listener, false);

// const input = document.getElementById('input');
// input.addEventListener('keydown', function () {
//     console.log(this.value);
// });

// const link = document.getElementById('#');
// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('link click');
// });

// window.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
// });

// const list = document.getElementById('list');
// const lis = [...list.getElementsByTagName('li')];

// function onLiClick({target}){
//     console.log(target);
//     console.log(this);
// }

// //lis.forEach((li) => li.addEventListener('click', onLiClick)); // можно опустить
// list.addEventListener('click', onLiClick);

// buttom[1] buttom[2] buttom[3] 
// ok - 2раза BOOM - 1раз;
// после BOOM кнопки не работают


const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const listener = function (event) {
    if (event) {
        console.log('OK');
    } else {
        console.log('BOOM');
    }
};


btn1.addEventListener('click', listener );
btn1.removeEventListener('click', listener, false);

// нужно считать количесво вызовав и хронить бум




