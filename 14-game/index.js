// *1. спрятать рандомно клад
// 2. получить координаты клика
// 3. выяснить расстояние от координат клика до сокровища
// 4. градация тепло-холодно
// 5. подсказки
// *6. показать сокровище

const mapWrapper = document.getElementById('mapWrapper');

mapWrapper.addEventListener('click', ({ layerX, layerY }) => {
    const clickCoord = {
        x: layerX,
        y: layerY
    };

    //console.log(treasure.getLengthTo(clickCoord));
});

class Treasure {
    static IMAGE_URL = './imgs/chest.png'

    constructor(parent) {
        this.coords = {
            x: this.#calculateCoord(parent.clientWidth),
            y: this.#calculateCoord(parent.clientHeight)
        };
        this.parent = parent;
    }

    #calculateCoord(limit) {
        const gap = limit * 0.1;
        return Math.round(Math.random() * (limit - 2 * gap)) + gap;
    }

    show() {
        const img = document.createElement('img');
        img.src = Treasure.IMAGE_URL;
        img.style.width = '15%';
        img.style.position = 'absolute';
        img.style.left = `${this.coords.x}px`;
        img.style.top = `${this.coords.y}px`;
        img.style.transform = 'translate(-50%, -50%) scale(0.5)';
        img.style.opacity = '0';
        img.style.transition = 'all 0.5s ease';

        setTimeout(() => {
            img.style.opacity = 1;
            img.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 500);

        this.parent.style.position = 'relative';
        this.parent.append(img);
    }

    getLengthTo({ x, y }) {
        const katet1Lehgth = this.coords.x - x;
        const katet2Lehgth = this.coords.y - y;

        return Math.sqrt(katet1Lehgth ** 2 + katet2Lehgth ** 2);
    }
}

const treasure = new Treasure(mapWrapper);
treasure.show();
console.log(treasure);

