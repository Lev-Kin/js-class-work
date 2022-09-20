//======== Event loop
//======== Promies
//======== Asunc await

// console.log(1);
// const id = setTimeout(() => {
//     console.log(2);
// }, 1000);
// console.log(3);

// https://www.youtube.com/watch?v=6XyifyzmSMM
// https://www.youtube.com/watch?v=M7WpAbG0rAA
// https://www.youtube.com/watch?v=u1kqx6AenYw

// АРЧИБАЛЬД!
// https://www.youtube.com/watch?v=cCOL7MC4Pl0
// 

// const pr = new Promise(() => { });
// console.log(pr);
// console.log(typeof pr);

// //console.log(typeof new Promise());

// console.log(1);
// new Promise(() => {
//     console.log(2);
// });
// console.log(3);

const pr = 
new Promise((resolve, reject) => {

    resolve('result');

}).then((res) => {

    console.log(res);
    return res;

}).then((res) => {

    console.log(res);

});

pr.then


// setTimeout(() => {
//     console.log('one');
// }, Math.random() * 1000);

// setTimeout(() => {
//     console.log('two');
// }, Math.random() * 1000);

// setTimeout(() => {
//     console.log('tree');
// }, Math.random() * 1000);