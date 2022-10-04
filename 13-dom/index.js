//===============================
// Document
// Oject
// Model
//===============================
// === http://old.code.mu/ === some solution can look outdated.

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

// === Version 1 ===
// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const btn3 = document.getElementById('btn3');

// function ok() {
//     console.log('OK!');
//     this.style.backgroundColor = 'green';
//     this.removeEventListener('click', ok);
// }

// function boom() {
//     console.log('BOOM!');
//     this.style.backgroundColor = 'red';
//     btn1.setAttribute('disabled', 'disabled');
//     btn2.setAttribute('disabled', 'disabled');
//     btn3.setAttribute('disabled', 'disabled');
// }

// btn1.addEventListener('click', ok);
// btn2.addEventListener('click', ok);
// btn3.addEventListener('click', ok);

// function mine() {
//     let select = Math.floor(Math.random() * 3) + 1;
//     if (select === 1) {
//         btn1.removeEventListener('click', ok);
//         btn1.addEventListener('click', boom)
//     }
//     else if (select === 2) {
//         btn2.removeEventListener('click', ok);
//         btn2.addEventListener('click', boom);
//     }
//     else {
//         btn3.removeEventListener('click', ok);
//         btn3.addEventListener('click', boom);
//     }
// }
// mine();

// === Version 2 ===
(function mine() {
    const buttons = [
        document.getElementById('btn1'),
        document.getElementById('btn2'),
        document.getElementById('btn3')
    ];

    function ok() {
        console.debug('OK!');
        this.style.backgroundColor = 'green';
        this.removeEventListener('click', ok);
    }

    function boom() {
        console.debug('BOOM!');
        this.style.backgroundColor = 'red';
        buttons.forEach((button) => button.setAttribute('disabled', 'disabled'));
    }

    buttons.forEach((button) => button.addEventListener('click', ok));

    const explodeButton = buttons[Math.floor(Math.random() * 3)];
    explodeButton.removeEventListener('click', ok);
    explodeButton.addEventListener('click', boom)

})();


