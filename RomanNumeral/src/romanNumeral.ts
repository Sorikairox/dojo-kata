export class RomanNumeral {

    public multiplicater : number = 0;
    public digitLen : number = 0;
    public unitDivider : number=  0;
    public romanNumber : string = undefined;
    public romanNumeralUnitList : Array<string> = ['I', 'X', 'C', 'M'];
    public romanNumeralExceptionList : Array<string> = ['V', 'L', 'D'];

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
}