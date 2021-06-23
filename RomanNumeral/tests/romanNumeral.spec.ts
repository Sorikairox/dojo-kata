import "mocha"
import { expect } from "chai"
import { RomanNumeral } from "../src/romanNumeral";

describe('RomanNumeral', () => {
    it('should init', () => {
        let romanNumeral = new RomanNumeral(10);
        expect(romanNumeral.digit).to.equal(10);
    });
    it('should have romanNumeral string to undefined', () => {
        let romanNumeral = new RomanNumeral(10);
        expect(romanNumeral.romanNumber).to.equal(undefined);

    });
});

describe('Multiplicater', () => {
    it('should return 1 for 125', () => {
        let romanNumeral = new RomanNumeral(125);
        expect(romanNumeral.multiplicater).to.equal(1);
    });
    it('should return 4 for 497', () => {
        let romanNumeral = new RomanNumeral(497);
        expect(romanNumeral.multiplicater).to.equal(4);
    });
    it('should return 9 for 97', () => {
        let romanNumeral = new RomanNumeral(97);
        expect(romanNumeral.multiplicater).to.equal(9);
    });
});

describe('removeDigitUnit', () => {
    it('should return 25 for 125', () => {
        let romanNumeral = new RomanNumeral(125);
        romanNumeral.removeDigitUnit();
        expect(romanNumeral.digit).to.equal(25);
    });
    it('should return 256 for 8256', () => {
        let romanNumeral = new RomanNumeral(8256);
        romanNumeral.removeDigitUnit();
        expect(romanNumeral.digit).to.equal(256);
    });
    it('should return 56 for 256', () => {
        let romanNumeral = new RomanNumeral(256);
        romanNumeral.removeDigitUnit();
        expect(romanNumeral.digit).to.equal(56);
    });
});
