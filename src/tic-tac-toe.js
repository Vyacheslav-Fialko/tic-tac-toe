class TicTacToe {
constructor() {
        this.matrix = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 'x';
        this.lengthMatrix = this.matrix.join().length;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] == null) {
            if (this.currentPlayer == 'x') {
                this.matrix[rowIndex][columnIndex] = 'x';
                this.currentPlayer = 'o';
            } else {
                this.matrix[rowIndex][columnIndex] = 'o';
                this.currentPlayer = 'x';
            }
        }
        return 0;
    }

    isFinished() {
        return (this.getWinner() != null || this.noMoreTurns()) ? true : false;
    }

    getWinner() {
        let winX = 0;
        let winO = 0;
        let currentLength = this.matrix.length;

        for (let i = 0; i < currentLength; i++, winX = 0, winO = 0) {
            for (let j = 0; j < currentLength; j++) {
                if (this.matrix[i][j] == 'x')
                    winX++;
                if (this.matrix[i][j] == 'o')
                    winO++;
            }
            if (winX == currentLength) return 'x';
            if (winO == currentLength) return 'o';
        }

        for (let j = 0; j < currentLength; j++, winX = 0, winO = 0) {
            for (let i = 0; i < currentLength; i++) {
                if (this.matrix[i][j] == 'x')
                    winX++;
                if (this.matrix[i][j] == 'o')
                    winO++;
            }
            if (winX == currentLength) return 'x';
            if (winO == currentLength) return 'o';
        }

        winX = 0, winO = 0;
        for (let i = 0, j = 0; i < currentLength; i++, j++) {
            if (this.matrix[i][j] == 'x')
                winX++;
            if (this.matrix[i][j] == 'o')
                winO++;
        }
        if (winX == currentLength) return 'x';
        if (winO == currentLength) return 'o';

        winX = 0, winO = 0;
        for (let i = 2, j = 0; j < currentLength; i--, j++) {
            if (this.matrix[i][j] == 'x')
                winX++;
            if (this.matrix[i][j] == 'o')
                winO++;
        }
        if (winX == currentLength) return 'x';
        if (winO == currentLength) return 'o';

        return null;
    }

    noMoreTurns() {
        return this.matrix.join().length == this.lengthMatrix * 2 + 1;
    }

    isDraw() {
        return this.noMoreTurns() && this.getWinner() == null;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
