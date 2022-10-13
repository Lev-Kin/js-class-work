import Treasure from "./Treasure.js";

export default class TreasureWithHints extends Treasure {
    static hints = [
        'GJ!',
        'HOT!',
        'WARM!',
        'COLD!',
        'WINTER IS COMING!'
    ];

    constructor (parent) {
        super(parent);
    }

    getHintByLength (length) {
        if (length < 30) {
            return TreasureWithHints.hints[0];
        } else if (length < 60) {
            return TreasureWithHints.hints[1];
        } else if (length < 90) {
            return TreasureWithHints.hints[2];
        } else if (length < 120) {
            return TreasureWithHints.hints[3];
        } else {
            return TreasureWithHints.hints[4];
        }
    }
}