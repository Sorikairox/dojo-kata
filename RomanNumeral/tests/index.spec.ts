import "mocha"
import { expect } from "chai"
import { RomanNumeral } from "../src/romanNumeral";
import {romanNumberProperSet, addRomanUnitToRomanNumber, getRomanNumeralFromDigit} from "../src";

describe('romanNumberProperSet', () => {
    it('should return the correct value', () => {
        expect(romanNumberProperSet('X', 'I')).to.equal('XI');
    });
});

describe('addRomanUnitToRomanNumber', () => {
    it('should return the correct small romanNumeral', () => {
        let romanNumeral = new RomanNumeral(9);
        let romanNumber = '';
        expect(addRomanUnitToRomanNumber(romanNumeral, romanNumber)).to.equal('IX');
    });
    it('should return the correct small romanNumeral', () => {
        let romanNumeral = new RomanNumeral(8);
        let romanNumber = '';
        expect(addRomanUnitToRomanNumber(romanNumeral, romanNumber)).to.equal('VIII');
    });
    it('should return the correct small romanNumeral', () => {
        let romanNumeral = new RomanNumeral(3);
        let romanNumber = '';
        expect(addRomanUnitToRomanNumber(romanNumeral, romanNumber)).to.equal('III');
    });
    it('should return the correct small romanNumeral', () => {
        let romanNumeral = new RomanNumeral(4);
        let romanNumber = '';
        expect(addRomanUnitToRomanNumber(romanNumeral, romanNumber)).to.equal('IV');
    });
});

describe('getRomanNumber', () => {
    it('should return XII for 12', () => {
        expect(getRomanNumeralFromDigit(12)).to.equal('XII');
    });
    it('should return XXVI for 26', () => {
        expect(getRomanNumeralFromDigit(26)).to.equal('XXVI');
    });
    it('should return XLIX for 49', () => {
        expect(getRomanNumeralFromDigit(49)).to.equal('XLIX');
    });
    it('should return MCMXCVIII for 1998', () => {
        expect(getRomanNumeralFromDigit(1998)).to.equal('MCMXCVIII');
    });
    it('should return MCCXXXIV for 1234', () => {
        expect(getRomanNumeralFromDigit(1234)).to.equal('MCCXXXIV');
    });
    it('should return MMDCCLI for 2751', () => {
        expect(getRomanNumeralFromDigit(2751)).to.equal('MMDCCLI');
    });
    it('should return MCCXXXIX for 1239', () => {
        expect(getRomanNumeralFromDigit(1239)).to.equal('MCCXXXIX');
    });
});