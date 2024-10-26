// class GuessingGame {
//   constructor() {
//     this.min = null;
//     this.max = null;
//     this.mid = null;
//   }

//   // Set the range of possible values for the answer
//   setRange(min, max) {
//     this.min = min;
//     this.max = max;
//   }

//   // Make a guess based on the current range
//   guess() {
//     while (this.min <= this.max) {
//       this.mid = Math.floor((this.min + this.max) / 2);

//       if (this.mid === number) {
//         return this.mid;
//       } else if (this.mid > number) {
//         this.lower();
//       } else {
//         this.higher();
//       }
//     }

//     return this.mid;
//   }

//   // Adjust the range if the previous guess was too high
//   lower() {
//     this.max = this.mid - 1;
//   }

//   // Adjust the range if the previous guess was too low
//   greater() {
//     this.min = this.mid + 1;
//   }
// }

class GuessingGame {
  constructor() {
    this.min = null;
    this.max = null;
    this.currentGuess = null;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.currentGuess = Math.ceil((this.min + this.max) / 2);
    return this.currentGuess;
  }

  lower() {
    this.max = this.currentGuess;
  }

  greater() {
    this.min = this.currentGuess;
  }
}

module.exports = GuessingGame;
