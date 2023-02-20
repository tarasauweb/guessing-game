class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
        return this.res = Math.round((this.max + this.min)/2)
    }

    lower() {
        this.max = this.res
    }

    greater() {
        this.min = this.res
    }
}

module.exports = GuessingGame;
