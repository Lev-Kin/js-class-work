// const wrapper = document.getElementById('wrapper');
// const list = document.getElementById('list');
// const firstItem = document.getElementById('fitem');
// const pItem = document.getElementById('pitem');

// wrapper.addEventListener('click', () => {
//     console.log('WRAPPER');
// });

// list.addEventListener('click', () => {
//     console.log('LIST');
// });//true

// const liListener = (event) => {
//     //event.stopPropagation();
//    //event.stopImmadiatetePropagation();
//     console.log('LI');
// };


// firstItem.addEventListener('click', liListener);
// firstItem.addEventListener('click', liListener, true);

// pItem.addEventListener('click', () => {
//     console.log('P');
// });

// const pItem = document.getElementById('pitem');
// const list = document.getElementById('list');

// console.log(list.innerHTML);

// pItem.innerText ='<h1>hello</h1>';

// pItem.addEventListener('click', () => {
// pItem.setAttribute('style', 'color: red;');
// pItem.setAttribute('wasClicked', 'true');
// console.log(pItem.getAttribute('wasClicked'));
// const pItemCopy = pItem.cloneNode();
// console.log(pItemCopy);
// console.log(pItem);
// pItem.dataset.test = 'ppppp';
// Object.keys(pItem.dataset).forEach();
// console.dir(pItem);
//     pItem.remove();
//     console.log(pItem);
// });

// const list = document.getElementById('list');
// const pItem = document.getElementById('pitem');

// list.addEventListener('click', () => {
// const newLi = document.createElement('li');
// //console.log(newLi); // нода целая
// newLi.innerText = 'some text TEXT';
// const bratik = list.getElementsByTagName('li')[2];

// const item3 = list.getElementsByTagName('li')[2];

// list.append(item3.cloneNode(true));

// list.insertBefore(newLi, bratik );

// list.insertBefore(newLi, bratik);

// list.append(newLi);
// list.prepend(newLi);
// list.insertAdjacentElement('afterBegin', newLi);
// list.before(newLi); // предпочтителен
// list.insertAdjacentHTML('afterBegin', '<h1>Hello</h1>');
// });

const list = document.getElementById('list');
const pItem = document.getElementById('pitem');

pItem.addEventListener('click', () => {
    // pItem.style.backgroundColor = 'red';
    // pItem.classList.add('active');
    // pItem.classList.remove('two');
    // pItem.classList.contains('one');
    pItem.classList.toggle('active');
});

