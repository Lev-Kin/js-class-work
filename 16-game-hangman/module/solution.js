const solution = () => {
    
    const word = document.getElementById('word');
    const letter = document.getElementById('letter');
    const btn = document.getElementById('btn');
    const man = document.getElementById('man');
    const manwrapper = document.getElementById('wrapper');
    const body = document.getElementById('body');

    btn.disabled = false;
    letter.disabled = false;

    const words = ['GORRILLA', 'PERSON', 'GENERATOR', 'FATHER', 'FRIEND'];


    let count = startCounter()

    function startCounter() {
        let count = 2;
        return function (a = undefined) {
            if (a) {
                count = 2;
            }
            else {
                return count > 5 ? 5 : count++;
            }
        }
    }


    function spawnWord() {
        let num = Math.round(Math.random() * 4);
        return words[num].split('');
    }

    let wordMass = spawnWord();

    function spanGenerate(mass) {
        for (let i = 0; i < mass.length; i++) {
            word.append(document.createElement('span'));
            word.lastChild.textContent = '_';
        }
    }
    spanGenerate(wordMass);

    console.log(wordMass)

    function letterEnter({ key }) {
        if (key === 'Enter') {
            enterLetter();
        }
    }

    function enterLetter() {
        let buf = [];
        if (!wordMass.some((_, i) => word.children[i].textContent.toUpperCase() === letter.value.toUpperCase())) {
            buf = wordMass.reduce((acc, item, index) => {
                if (letter.value.toUpperCase() === item.toUpperCase()) {
                    acc.push(index);
                }
                return acc;
            }, []);
        }

        if (buf.length === 0) {
            let checkCount = count();
            man.src = `img/${checkCount}.png`;
            if (checkCount === 4) {
                lose();
            }
        }
        else {
            buf.forEach((_, i) => { word.children[buf[i]].textContent = `${letter.value}`.toUpperCase(); })
        }
        letter.value = '';
        if (wordMass.every((item, i) => item.toUpperCase() === word.children[i].textContent.toUpperCase())) {
            win();
        }
    }


    function win() {
        const winWord = document.createElement('div');
        const btnReset = document.createElement('button');
        btnReset.addEventListener('click', restartGame);
        winWord.id = 'win';
        btnReset.id = 'reset';
        btnReset.textContent = 'Reset';
        body.style.backgroundColor = 'green';
        winWord.textContent = 'Ты победил!'
        manwrapper.append(winWord);
        winWord.append(btnReset);
        btn.disabled = true;
        letter.disabled = true;
    }

    function lose() {
        const loseWord = document.createElement('div');
        const btnReset = document.createElement('button');
        btnReset.addEventListener('click', restartGame);
        btnReset.id = 'btnReset'
        loseWord.id = 'lose';
        btnReset.id = 'reset';
        btnReset.textContent = 'Reset';
        body.style.backgroundColor = 'red';
        loseWord.textContent = 'Ты проиграл!';
        manwrapper.append(loseWord);
        loseWord.append(btnReset);
        btn.disabled = true;
        letter.disabled = true;
    }

    function restartGame() {
        console.log(word.children.length)
        for (let i = 0; i < wordMass.length; i++) {
            word.children[0].remove();
        }
        body.style.backgroundColor = 'white';
        man.src = `img/1.png`;
        count(true);
        letter.value = '';
        manwrapper.lastChild.remove();
        wordMass = spawnWord();
        spanGenerate(wordMass);
        console.log(wordMass);
        btn.disabled = false;
        letter.disabled = false;
    }

    btn.addEventListener('click', enterLetter);
    letter.addEventListener('keypress', letterEnter);
}

export default solution;
