export default class Treasure {
    static IMAGE_URL = './imgs/chest.png';

    constructor (parent) {
        this.coords = {
            x: this.#calculateCoord(parent.clientWidth),
            y: this.#calculateCoord(parent.clientHeight)
        };

        this.parent = parent;
    }

    #calculateCoord (limit) {
        const gap = limit * 0.1;
        return  Math.round(Math.random() * (limit - 2 * gap)) + gap;
    }

    show () {
        const img = document.createElement('img');
        img.src = Treasure.IMAGE_URL;
        img.style.width = '15%';
        img.style.position = 'absolute';
        img.style.left = `${this.coords.x}px`;
        img.style.top = `${this.coords.y}px`;
        img.style.transform = 'translate(-50%, -50%) scale(0.5)';
        img.style.opacity = '0';
        img.style.transition = 'all 0.5s ease';

        setTimeout(() =>{ 
            img.style.opacity = 1;
            img.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 500);

        this.parent.style.position = 'relative';
        this.parent.append(img);
    }

    getLengthTo ({x, y}) {
        const katet1Length = Math.round(this.coords.x - x);
        const katet2Length = Math.round(this.coords.y - y);

        return Math.round(Math.sqrt(katet1Length**2 + katet2Length**2));
    }
}