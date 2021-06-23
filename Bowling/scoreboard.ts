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

    computeScore() {
        let score = 0;
        let throwIndex = 0;
        for (let index = 0; index < FRAMES_MAX; index ++) {
            const nextThrow = this.throwsArray[throwIndex + 1];
            const nextFromNextThrow = this.throwsArray[throwIndex + 2];
            if (this.isStrike(throwIndex)) {
                this.scoreArray.push(score += 10 + ((nextThrow) ? nextThrow : 0) + ((nextFromNextThrow) ? nextFromNextThrow : 0));
                throwIndex++;
            }
            else if (this.isSpare(throwIndex)) {
                this.scoreArray.push(score += 10 + ((nextFromNextThrow) ? nextFromNextThrow : 0));
                throwIndex += 2;
            }
            else {
                this.scoreArray.push(score += this.throwsArray[throwIndex] + ((nextThrow) ? nextThrow : 0));
                throwIndex += 2;
            }
        }
        return score;
    }
}
