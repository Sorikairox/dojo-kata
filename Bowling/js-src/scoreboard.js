"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scoreboard = void 0;
const FRAMES_MAX = 10;
class Scoreboard {
    constructor(throwsArray) {
        this.throwsArray = throwsArray;
        this.scoreArray = [];
    }
    ;
    isStrike(index) {
        return this.throwsArray[index] === 10;
    }
    isSpare(index) {
        return this.throwsArray[index] + this.throwsArray[index + 1] === 10;
    }
    static getNextThrowValue(nextThrow) {
        return nextThrow ?? nextThrow;
    }
    static getNextFromNextThrowValue(nextFromNextThrow) {
        return nextFromNextThrow ?? nextFromNextThrow;
    }
    computeScore() {
        let score = 0;
        let throwIndex = 0;
        for (let index = 0; index < FRAMES_MAX; index++) {
            const nextThrow = this.throwsArray[throwIndex + 1];
            const nextFromNextThrow = this.throwsArray[throwIndex + 2];
            const nextScore = Scoreboard.getNextThrowValue(nextThrow);
            const nextFromNextScore = Scoreboard.getNextFromNextThrowValue(nextFromNextThrow);
            if (this.isStrike(throwIndex)) {
                this.scoreArray.push(score += 10 + nextScore + nextFromNextScore);
                throwIndex++;
            }
            else if (this.isSpare(throwIndex)) {
                this.scoreArray.push(score += 10 + nextFromNextScore);
                throwIndex += 2;
            }
            else {
                this.scoreArray.push(score += this.throwsArray[throwIndex] + nextScore);
                throwIndex += 2;
            }
        }
        return score;
    }
}
exports.Scoreboard = Scoreboard;
//# sourceMappingURL=scoreboard.js.map