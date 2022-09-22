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

// const pr = 
// new Promise((resolve, reject) => {

//     resolve('result');

// }).then((res) => {

//     console.log(res);
//     return res;

// }).then((res) => {

//     console.log(res);

// });

// setTimeout(() => {
//     console.log('one');
// }, Math.random() * 1000);

// setTimeout(() => {
//     console.log('two');
// }, Math.random() * 1000);

// setTimeout(() => {
//     console.log('tree');
// }, Math.random() * 1000);

// let result;

// const pr = new Promise((resolve) => {
//     resolve('result');   
// }).then((res) => {

//     console.log(res);   

//     return res + 'bla';
// }).then((res) => {
//     console.log(res);

//     return res + 'smth';
// }).then((res) => {
//     console.log(res);

//     result = res;
//     return result;
// })

// console.log('result', result);

// console.log(pr);

//=============================

// let result;

// const arr = new Array(1,2,3,4).slice(2,5).slice(1,6)

// const pr = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(20);
// })
// .then((res) => {
//     console.log(res);
//     return res + 'bla';
// })
// .catch((err) => {
//     console.log('SOME ERROR OCCURED', err);

//     return 100;
// })
// .then((res) => {
//     console.log(res);

//     return res + 'smth';
// })
// .then((res) => {
//     console.log(res);
//     return res;
// })
// .catch((err) => {
//     console.log('SECOND CATCH');
//     return 499;
// })
// .finally(() => {
//     console.log('THIS IS FINALLY');
//     // throw 222;
//     return 999;
// })
// .catch((err) => {
//     console.log('AFTER FINALLY WAS REJECTED', err);
// })
// .then((data) => {
//     console.log('THEN AFTER FINALLY', data);
// })


// console.log(pr);


// new Promise((resolve) => {
//     setTimeout(() => {
//         console.log('one');
//         resolve();
//     }, Math.random() * 1000);
// })
// .then(() => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('two');
//             resolve(200);
//         }, 2000);
//     })
//     .then((data) => {
//         throw 2;
//         return 300;
//     })
//     .catch(() => {
//         console.log('TEST CATCH');
//         throw 3;
//     })
// })
// .catch(() => {
//     console.log('SOME CATCH');
// })
// .then((data) => {
//     console.log(data);

//     setTimeout(() => {
//         console.log('three');
//     }, 1000);
// })

const p1 = new Promise((res) =>
    setTimeout(() => res(1), 500));
const p2 = new Promise((res) =>
    setTimeout(() => res(2), 1000));
const p3 = new Promise((res) =>
    setTimeout(() => res(3), 700));

// Promise.all([p1,p2,p3])
// .then((res) => {
//     console.log('AFTER ALL PROMISES', res);
// })

// Promise.allSettled([p1,p2,p3])
// .then((data) => {
//     console.log(data);
// })

// Promise.race([p1,p2,p3])
// .then((data) => {
//     console.log(data);
// })

// Promise.any([p1,p2,p3])
// .then((data) => {
//     console.log(data);
// })



// async await

// const foo2 = async function () {};
// async function foo3 () {}

// const p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//         rej(10);
//         // throw new Error();
//     }, 1000);
// })


// const foo = async () => {

//     let result = await p1;

    // try {
    //     result = await p1;
    // } catch (err) {
    //     console.log(err);
    // }
  
    // throw new Error(12);

//     console.log('HI!', result);

//     console.log('FINALLY');
    
//     return result;
// };

// foo()
// .catch((err) => {
//     console.log(err);
// });


// const bar = async () => {
//     const obj = await foo();
// };



