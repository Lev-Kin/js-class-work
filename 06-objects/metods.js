'use strict';

// methods, get, set, property descriptor, 
// this, call, apply, bind, setTimeout, setInterval

function eat (food) {
    console.log(`${this.name} eats ${food} by hands`);
}

// console.log(window);


const begat = (destination) => {
    console.log(`${this.userName} runs to ${destination}`);
};

const person = {
    name: 'John',
    age: 23,
    stack: ['CSS', 'HTML', 'JS'],
    liveInCity: true,
    run: () => {
        console.log('person runs');
    },
    walk (destination) {
        console.log(`${person.name} walks to ${destination}`);
    },
    zhrat: eat
};


const person2 = {
    name: 'Valerchik',
    age: 53,
    stack: ['DIG', 'SOW', 'HARVEST'],
    liveInCity: false,
    run: () => {
        console.log('person runs');
    },
    walk (destination) {
        console.log(`${this.name} walks to ${destination}`);
    },
    zhrat: eat // названия поля сылаются на сушествующюю функциию
};

// this

person.zhrat('ryabchika');
person2.zhrat('kolbasa');

const fly = (dest, speed) => {
    // console.log(this);
    console.log(`${this.name} flies to ${dest} with ${speed}km/h speed`)
};

const bird = {
    name: 'kesha',
    fly (dest, speed) {
        // console.log(this);
        console.log(`${this.name} flies to ${dest} with ${speed}km/h speed`)
    }
}

const ezh = {
    name: 'senya',
    zhrat: eat,
};

bird.fly('west', 100);

// fly.call(ezh, ['north', 200]);
// fly.apply(ezh, ['north', 200]);


function foo () {

    function smth () {
        console.log(this);
    }

    const bar = () => {
        console.log(this);
    };

    bar();
    smth();
}

foo.call(person);

// setTimeout(function () {
//     console.log('IM WORKING');
// }, 2000);

// const foo = person2.walk;
// foo('itstep');

setTimeout(person2.walk, 2000);