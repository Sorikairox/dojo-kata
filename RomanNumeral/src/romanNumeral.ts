export class RomanNumeral {

    public multiplicater : number = 0;
    public digitLen : number = 0;
    public unitDivider : number=  0;
    public romanNumber : string = undefined;
    private romanNumeralUnitList : Array<string> = ['I', 'X', 'C', 'M'];
    private romanNumeralExceptionList : Array<string> = ['V', 'L', 'D'];

    constructor(public digit : number) {
        this.setMultiplicater();
    }

    setMultiplicater() {
        this.digitLen = this.digit.toString().length - 1;
        this.unitDivider = 10**this.digitLen;
        this.multiplicater = Math.trunc(this.digit / this.unitDivider);
    }

    removeDigitUnit() {
        this.digit -= this.unitDivider * this.multiplicater;
    }

    private romanNumberProperSet (numeralToAdd : string) {
        if (this.romanNumber === undefined) {
            this.romanNumber = numeralToAdd;
        } else
            this.romanNumber += numeralToAdd;
    }

    addRomanUnitToRomanNumber() {
        if (this.multiplicater === 4) {
            this.romanNumberProperSet(this.romanNumeralUnitList[this.digitLen] + this.romanNumeralExceptionList[this.digitLen]);
        }
        else if (this.multiplicater > 4 && this.multiplicater < 9) {
            this.romanNumberProperSet(this.romanNumeralExceptionList[this.digitLen]);
            for (let counter = 0; counter < this.multiplicater - 5; counter++) {
                this.romanNumberProperSet(this.romanNumeralUnitList[this.digitLen]);
            }
        }
        else if (this.multiplicater === 9) {
            let exceptionIdx = (this.romanNumeralUnitList[this.digitLen + 1]) ? (this.digitLen + 1) : this.digitLen;
            this.romanNumberProperSet(this.romanNumeralUnitList[this.digitLen] + this.romanNumeralUnitList[exceptionIdx]);
        }
        else {
            for (let counter = 0; counter < this.multiplicater; counter++) {
                this.romanNumberProperSet(this.romanNumeralUnitList[this.digitLen]);
            }
        }
    }

    getRomanNumeralFromDigit() {
        while (this.digit != 0) {
            this.setMultiplicater();
            this.addRomanUnitToRomanNumber();
            this.removeDigitUnit();
        }
        return this.romanNumber;
    }
}