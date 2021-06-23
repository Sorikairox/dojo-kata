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

describe('addRomanUnitToRomanNumber', () => {
    it('should add the correct value un romanNUmeral (II for 2)', () => {
        let romanNumeral = new RomanNumeral(2);
        romanNumeral.addRomanUnitToRomanNumber();
        expect(romanNumeral.romanNumber).to.equal('II');
    });
    it('should return "I" for 1', () => {
        let romanNumeral = new RomanNumeral(1);
        romanNumeral.addRomanUnitToRomanNumber();
        expect(romanNumeral.romanNumber).to.equal('I');
    });
    it('should return V for 5', () => {
        let romanNumeral = new RomanNumeral(5);
        romanNumeral.addRomanUnitToRomanNumber();
        expect(romanNumeral.romanNumber).to.equal('V');
    });
    it('should return VIII for 8', () => {
        let romanNumeral = new RomanNumeral(8);
        romanNumeral.addRomanUnitToRomanNumber();
        expect(romanNumeral.romanNumber).to.equal('VIII');
    });
    it('should return IX for 9', () => {
        let romanNumeral = new RomanNumeral(9);
        romanNumeral.addRomanUnitToRomanNumber();
        expect(romanNumeral.romanNumber).to.equal('IX');
    });
});

describe('getRomanNumeralFromDigit', () => {
    it('should return XII for 12', () => {
        let romanNumeral = new RomanNumeral(12);
        expect(romanNumeral.getRomanNumeralFromDigit()).to.equal('XII');
    });
    it('should return XXVI for 26', () => {
        let romanNumeral = new RomanNumeral(26);
        expect(romanNumeral.getRomanNumeralFromDigit()).to.equal('XXVI');
    });
    it('should return XLIX for 49', () => {
        let romanNumeral = new RomanNumeral(49);
        expect(romanNumeral.getRomanNumeralFromDigit()).to.equal('XLIX');
    });
    it('should return MCMXCVIII for 1998', () => {
        let romanNumeral = new RomanNumeral(1998);
        expect(romanNumeral.getRomanNumeralFromDigit()).to.equal('MCMXCVIII');
    });
    it('should return MCCXXXIV for 1234', () => {
        let romanNumeral = new RomanNumeral(1234);
        expect(romanNumeral.getRomanNumeralFromDigit()).to.equal('MCCXXXIV');
    });
    it('should return MMDCCLI for 2751', () => {
        let romanNumeral = new RomanNumeral(2751);
        expect(romanNumeral.getRomanNumeralFromDigit()).to.equal('MMDCCLI');
    });
    it('should return MCCXXXIX for 1239', () => {
        let romanNumeral = new RomanNumeral(1240);
        expect(romanNumeral.getRomanNumeralFromDigit()).to.equal('MCCXXXIX');
    });
});
