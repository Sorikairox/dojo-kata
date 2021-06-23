import "mocha"
import { expect } from "chai"
import { isFizz, isBuzz, isFizzBuzz } from "../src/fizzbuzz";

describe('isFizz', function () {
    it('should return true (3)', function () {
        expect(isFizz(3)).to.equal(true)
    });
    it('should return true (6)', function () {
        expect(isFizz(6)).to.equal(true)
    });
    it('should return true (18)', function () {
        expect(isFizz(18)).to.equal(true)
    });
    it('should return false (2)', function () {
        expect(isFizz(2)).to.equal(false)
    });
    it('should return false (20)', function () {
        expect(isFizz(20)).to.equal(false)
    });
});

describe('isBuzz', function () {
    it('should return true (5)', function () {
        expect(isBuzz(5)).to.equal(true)
    });
    it('should return true (10)', function () {
        expect(isBuzz(10)).to.equal(true)
    });
    it('should return true (45)', function () {
        expect(isBuzz(45)).to.equal(true)
    });
    it('should return false (2)', function () {
        expect(isBuzz(2)).to.equal(false)
    });
    it('should return false (41)', function () {
        expect(isBuzz(41)).to.equal(false)
    });
});

describe('isFizzBuzz', function () {
    it('should return true (15)', function () {
        expect(isFizzBuzz(15)).to.equal(true);
    });
    it('should return true (30)', function () {
        expect(isFizzBuzz(30)).to.equal(true);
    });
    it('should return false (12)', function () {
        expect(isFizzBuzz(12)).to.equal(false);
    });
});