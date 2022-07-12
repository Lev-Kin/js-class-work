// const age = 51;

// if (age < 18) {
//     console.log('Hello');
// } else if (age < 30) {
//     console.log('Goodbye!');
// } else if (age < 50) {
//     console.log('OMG!');
// } else {
//     console.log('Hi!');
// }

// const age = 10;

// switch (age) {
//     case 0: // age === 0
//         console.log('ITS a Zero!');
//         break;
//     case 1: // age === 1
//     case 10:
//         console.log('ITS TEN! or one!');
//         break;
//     case 20:
//         console.log('ITS TEN!');
//         break;
//     default:
//         console.log('smth else');
//        // break;
// }

// //const age = 10;

// if (age === 0) {
//     console.log('ITS a Zero!');
// } else if (age === 1 || age === 10) {
//     console.log('ITS a ten! or one!');
// } else if (age === 20) {
//     console.log('its twenty!');
// } else {
//     console.log('not found!!!');
// }

// a ? b : c

// let age = 10;
// console.log(age > 2 ? 'hi' : 'hello');

// if (age > 2) {
// console.log('hi')
// } else {
//     console.log('hello')
// }

// console.log(age < 2 ? 'hi' : age < 10 ? 'hello' : 'hi again');

// const age = prompt('how old are you');

// console.log(`you are ${age} old`);

let age = prompt('how many temes y')

if (isNaN(age)) {
    alert('please enter only num')
} else if (age === '') {
    alert("adfadf")
} else if (age === null) {
    alert('you rej')
} else {
    age = +age;
    alert('nakotec')
}