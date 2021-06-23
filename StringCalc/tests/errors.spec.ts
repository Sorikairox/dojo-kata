import "mocha"
import { expect } from "chai"
import { missingNumber, negativeNumber, checkSeparator } from "../src/errors";

describe('SeparatorError', function () {
    it('should return an error message when multiple separators are used at once', function () {
        expect(checkSeparator("//|\n1|2,3", "|")).to.equal("'|' expected but ',' found at position 3.");
    });
    it('should do same but with another sep', function () {
        expect(checkSeparator("//)\n1)2|3", ")")).to.equal("')' expected but '|' found at position 3.");
    });
});

describe('missingNumber', function () {
    it('"Number expected but EOF found."', function () {
        expect(missingNumber("1,")).to.equal("Number expected but EOF found.");
    });
    it('Returns null if no error', function () {
        expect(missingNumber("1")).to.equal(null);
    });
});

describe('negativeNumber', function () {
    it('Negative not allowed : + number when first number', function () {
        expect(negativeNumber('-1')).to.equal("Negative not allowed : -1.")
    });
    it('Negative not allowed : + number when 2nd number', function () {
        expect(negativeNumber('1,-2')).to.equal("Negative not allowed : -2.")
    });
    it('Negative not allowed : + number when both numbers', function () {
        expect(negativeNumber('-1,-2')).to.equal("Negative not allowed : -1, -2.")
    });
});