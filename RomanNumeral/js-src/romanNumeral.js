"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RomanNumeral = void 0;
class RomanNumeral {
    constructor(digit) {
        this.digit = digit;
        this.multiplicater = 0;
        this.digitLen = 0;
        this.unitDivider = 0;
        this.romanNumber = undefined;
        this.romanNumeralUnitList = ['I', 'X', 'C', 'M'];
        this.romanNumeralExceptionList = ['V', 'L', 'D'];
        this.setMultiplicater();
    }
    setMultiplicater() {
        this.digitLen = this.digit.toString().length - 1;
        this.unitDivider = 10 ** this.digitLen;
        this.multiplicater = Math.trunc(this.digit / this.unitDivider);
    }
    removeDigitUnit() {
        this.digit -= this.unitDivider * this.multiplicater;
    }
}
exports.RomanNumeral = RomanNumeral;
//# sourceMappingURL=romanNumeral.js.map