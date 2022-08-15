class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min; 
        this.max = max;
    }

    guess() {
        this.res = Math.round((this.min+this.max)/2);
        console.log(this.res)
        return this.res
    }

    lower() {
        this.max = this.res
    }

    greater() {
        this.min = this.res
    }
}

module.exports = GuessingGame;
