import {RomanNumeral} from "./romanNumeral";

export function romanNumberProperSet (romanNumber : string, numeralToAdd : string) {
    if (romanNumber === undefined)
        romanNumber = numeralToAdd;
    else
        romanNumber += numeralToAdd;

    return romanNumber;
}

function romanUnitExceptionAdd(RomanNumeral : RomanNumeral, romanNumber : string) {
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
        return romanNumberProperSet(romanNumber,RomanNumeral.romanNumeralUnitList[RomanNumeral.digitLen] + RomanNumeral.romanNumeralUnitList[exceptionIdx]);
    }
}

function romanUnitRegularAdd(RomanNumeral : RomanNumeral, romanNumber : string) {
    for (let counter = 0; counter < RomanNumeral.multiplicater; counter++) {
        romanNumber = romanNumberProperSet(romanNumber, RomanNumeral.romanNumeralUnitList[RomanNumeral.digitLen]);
    }
    return romanNumber;
}

export function addRomanUnitToRomanNumber(RomanNumeral : RomanNumeral, romanNumber : string) {
    if (RomanNumeral.multiplicater >= 4 && RomanNumeral.multiplicater <= 9)
        return romanUnitExceptionAdd(RomanNumeral, romanNumber);
    else
        return romanUnitRegularAdd(RomanNumeral, romanNumber);
}

export function getRomanNumeralFromDigit(number : number) {
    let rN = new RomanNumeral(number);
    let romanNumber : string = '';
    while (rN.digit != 0) {
        rN.setMultiplicater();
        romanNumber = addRomanUnitToRomanNumber(rN, romanNumber);
        rN.removeDigitUnit();
    }
    return romanNumber;
}