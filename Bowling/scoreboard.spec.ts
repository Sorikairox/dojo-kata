import "mocha"
import { expect } from "chai"
import { Scoreboard } from "./scoreboard";

describe('ScoreboardInit', function () {
    it('Initializes', function () {
        let sb = new Scoreboard([]);
    });
});

describe('isStrike', function () {
    it('should returns true when strike is scored', function () {
        let sb = new Scoreboard([10, 2,1]);
        expect(sb.isStrike(0)).to.equal(true);
    });
    it('should returns false when strike is not scored', function () {
        let sb = new Scoreboard([2,1]);
        expect(sb.isStrike(0)).to.equal(false);
    });
});

describe('isSpare', function () {
    it('should returns true when spare is scored', function () {
        let sb = new Scoreboard([8,2, 10]);
        expect(sb.isSpare(0)).to.equal(true);
    });
    it('should returns false when spare is not scored', function () {
        let sb = new Scoreboard([2,1]);
        expect(sb.isSpare(0)).to.equal(false);
    });
});

describe('Commpute Scores', function () {
    it('should compute a 0s game', function () {
        let sb = new Scoreboard([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0]);
        expect(sb.computeScore()).to.equal(0);
    });
    it('should compute a 1s game', function () {
        let sb = new Scoreboard([1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1, 1,1]);
        expect(sb.computeScore()).to.equal(20);
    });
    it('should compute a strike', function () {
        let sb = new Scoreboard([10, 2,2, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0])
        expect(sb.computeScore()).to.equal(18);
    });
    it('should compute only strikes', function () {
        let sb = new Scoreboard([10, 10, 10, 10, 10, 10, 10, 10, 10, 0,0])
        expect(sb.computeScore()).to.equal(240);
    });
    it('should compute a spare', function () {
        let sb = new Scoreboard([9,1, 3,1, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0])
        expect(sb.computeScore()).to.equal(17);
    });
    it('should compute only spares', function () {
        let sb = new Scoreboard([9,1, 8,2, 7,3, 6,4, 5,5, 4,6, 3,7, 2,8, 1,9, 9,1,0])
        expect(sb.computeScore()).to.equal(145);
    });
    it('should compute a complete game', function () {
        let sb = new Scoreboard([10, 6,3, 8,0, 3,6, 10, 10, 6,0, 7,1, 8,2, 10,10,8])
        expect(sb.computeScore()).to.equal(149);
    });
    it('should have same in time scoreboard', function () {
        let sb = new Scoreboard([10, 6,3, 8,0, 3,6, 10, 10, 6,0, 7,1, 8,2, 10,10,8]);
        let inTimeScoreBoard = [19, 28, 36, 45, 71, 87, 93, 101, 121, 149];
        sb.computeScore();
        expect(sb.scoreArray[0]).to.equal(inTimeScoreBoard[0]);
        expect(sb.scoreArray[1]).to.equal(inTimeScoreBoard[1]);
        expect(sb.scoreArray[2]).to.equal(inTimeScoreBoard[2]);
        expect(sb.scoreArray[3]).to.equal(inTimeScoreBoard[3]);
        expect(sb.scoreArray[4]).to.equal(inTimeScoreBoard[4]);
        expect(sb.scoreArray[5]).to.equal(inTimeScoreBoard[5]);
        expect(sb.scoreArray[6]).to.equal(inTimeScoreBoard[6]);
        expect(sb.scoreArray[7]).to.equal(inTimeScoreBoard[7]);
        expect(sb.scoreArray[8]).to.equal(inTimeScoreBoard[8]);
        expect(sb.scoreArray[9]).to.equal(inTimeScoreBoard[9]);
    });
});