"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRomanNumeralFromDigit = exports.addRomanUnitToRomanNumber = exports.romanNumberProperSet = void 0;
const romanNumeral_1 = require("./romanNumeral");
function romanNumberProperSet(romanNumber, numeralToAdd) {
    if (romanNumber === undefined)
        romanNumber = numeralToAdd;
    else
        romanNumber += numeralToAdd;
    return romanNumber;
}
exports.romanNumberProperSet = romanNumberProperSet;
function romanUnitExceptionAdd(RomanNumeral, romanNumber) {
    if (RomanNumeral.multiplicater === 4) {
        return romanNumberProperSet(romanNumber, RomanNumeral.romanNumeralUnitList[RomanNumeral.digitLen] + RomanNumeral.romanNumeralExceptionList[RomanNumeral.digitLen]);
    }
    else if (RomanNumeral.multiplicater > 4 && RomanNumeral.multiplicater < 9) {
        romanNumber = romanNumberProperSet(romanNumber, RomanNumeral.romanNumeralExceptionList[RomanNumeral.digitLen]);
        for (let counter = 0; counter < RomanNumeral.multiplicater - 5; counter++) {
            romanNumber = romanNumberProperSet(romanNumber, RomanNumeral.romanNumeralUnitList[RomanNumeral.digitLen]);
        }
        return romanNumber;
    }
    else if (RomanNumeral.multiplicater === 9) {
        let exceptionIdx = (RomanNumeral.romanNumeralUnitList[RomanNumeral.digitLen + 1]) ? (RomanNumeral.digitLen + 1) : RomanNumeral.digitLen;
        return romanNumberProperSet(romanNumber, RomanNumeral.romanNumeralUnitList[RomanNumeral.digitLen] + RomanNumeral.romanNumeralUnitList[exceptionIdx]);
    }
}
function romanUnitRegularAdd(RomanNumeral, romanNumber) {
    for (let counter = 0; counter < RomanNumeral.multiplicater; counter++) {
        romanNumber = romanNumberProperSet(romanNumber, RomanNumeral.romanNumeralUnitList[RomanNumeral.digitLen]);
    }
    return romanNumber;
}
function addRomanUnitToRomanNumber(RomanNumeral, romanNumber) {
    if (RomanNumeral.multiplicater >= 4 && RomanNumeral.multiplicater <= 9)
        return romanUnitExceptionAdd(RomanNumeral, romanNumber);
    else
        return romanUnitRegularAdd(RomanNumeral, romanNumber);
}
exports.addRomanUnitToRomanNumber = addRomanUnitToRomanNumber;
function getRomanNumeralFromDigit(number) {
    let rN = new romanNumeral_1.RomanNumeral(number);
    let romanNumber = '';
    while (rN.digit != 0) {
        rN.setMultiplicater();
        romanNumber = addRomanUnitToRomanNumber(rN, romanNumber);
        rN.removeDigitUnit();
    }
    return romanNumber;
}
exports.getRomanNumeralFromDigit = getRomanNumeralFromDigit;
//# sourceMappingURL=index.js.map