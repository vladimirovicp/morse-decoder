class GuessingGame {
  constructor() {
    throw new Error('Not implemented');
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    return Math.round((this.max - this.min) / 2 + this.min);
  }

  lower() {
    this.max = Math.round((this.max - this.min) / 2 + this.min);
  }

  greater() {
    this.min = Math.round((this.max - this.min) / 2 + this.min);
  }
}

module.exports = GuessingGame;
