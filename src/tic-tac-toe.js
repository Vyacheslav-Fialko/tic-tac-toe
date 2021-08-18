class TicTacToe {
  constructor() {
    this.area = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.currentPlayerSymbol = "x";
    this.length = 9;
  }

  getCurrentPlayerSymbol() {
    return this.currentPlayerSymbol;
  }

  nextTurn(rowIndex, columnIndex) {
    if (this.area[rowIndex][columnIndex] === null) {
      this.area[rowIndex][columnIndex] = this.currentPlayerSymbol;
      this.currentPlayerSymbol === "x"
        ? (this.currentPlayerSymbol = "o")
        : (this.currentPlayerSymbol = "x");
    }
  }

  isFinished() {
    return this.getWinner() || this.noMoreTurns() ? true : false;
  }

  getWinner() {
    let win = null;
    const currrentArr = this.area;
    currrentArr.forEach((element, indx, arr) => {
      const elemToStr = element.join("");
      if (indx === 0) {
        for (let i = 0; i < element.length; i++) {
          const el = element[i];
          if (el !== null) {
            if (el === arr[1][i] && el === arr[2][i]) {
              win = el;
            }
            if (i === 0) {
              if (el === arr[1][1] && el === arr[2][2]) {
                win = el;
              }
            }
            if (i === 2) {
              if (el === arr[1][1] && el === arr[2][0]) {
                win = el;
              }
            }
          }
        }
      }
      if (elemToStr === "xxx" || elemToStr === "ooo") {
        win = element[0];
      }
    });
    return win;
  }

  noMoreTurns() {
    let count = 0;
    this.area
      .join()
      .split(",")
      .forEach((item) => {
        item === "x" || item === "o" ? (count += 1) : count;
      });
    return count === this.length;
  }

  isDraw() {
    return this.noMoreTurns() && this.getWinner() == null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.area[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
