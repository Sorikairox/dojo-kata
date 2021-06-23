const FRAMES_MAX = 10;

export class Scoreboard {

    public scoreArray : Array<number> = [];

    constructor(public throwsArray : Array<number>) {};

    isStrike(index : number) {
        return this.throwsArray[index] === 10;
    }

    isSpare(index : number) {
        return this.throwsArray[index] + this.throwsArray[index + 1]  === 10;
    }

    private static getNextThrowValue(nextThrow : number) {
        return nextThrow ?? nextThrow;
    }

    private static getNextFromNextThrowValue(nextFromNextThrow : number) {
        return nextFromNextThrow ?? nextFromNextThrow;
    }

    computeScore() {
        let score = 0;
        let throwIndex = 0;
        for (let index = 0; index < FRAMES_MAX; index ++) {

            const nextThrow = this.throwsArray[throwIndex + 1];
            const nextFromNextThrow = this.throwsArray[throwIndex + 2];
            const nextScore : number = Scoreboard.getNextThrowValue(nextThrow);
            const nextFromNextScore : number = Scoreboard.getNextFromNextThrowValue(nextFromNextThrow);

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
