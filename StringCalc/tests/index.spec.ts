import "mocha"
import { expect } from "chai"
import { add, getSeparator } from "../src";

describe('Separator', function () {
    it('should return the correct separator', function () {
        expect(getSeparator("//;\n1;2")).to.equal("/");
    });
});

describe('Basic operations', function () {
    it('should return 0 as a string', function () {
        expect(add()).to.equal("0");
    });
    it('should return the sum (5+5 = 10)', function () {
        expect(add("5,5")).to.equal("10");
    });
    it('should return (5+5+5 = 15)', function () {
        expect(add("5,5,5")).to.equal("15");
    });
    it('should return (1+1+1+1+1 = 5)', function () {
        expect(add("1,1,1,1,1")).to.equal("5");
    });
    it('should sum when \'\n\' sep', function () {
        expect(add("1\n1")).to.equal("2");
    });
});

describe('Specific Spearator Cases', function () {
    it('should return 10 with \'|\' as sep', function () {
        expect(add("//|\n5|5")).to.equal("10");
    });
    it('should return 5 with \'|\' as sep', function () {
        expect(add("//|\n1|1|1|1|1")).to.equal("5");
    });
    it('should return 5 with \'a\' as sep', function () {
        expect(add("//a\n1a1a1a1a1")).to.equal("5");
    });
});

describe('Errors', function () {
    it('should return EOF error message', function () {
        expect(add("1,2,3,")).to.equal("Number expected but EOF found.")
    });
    it('should return correct error message for separator', function () {
        expect(add("//a\n1a2b3")).to.equal("'a' expected but 'b' found at position 3.")
    });
    it('should return negative error message', function () {
        expect(add("-1,2")).to.equal("Negative not allowed : -1.")
    });
    it('should return the combinaison of all error messages', function () {
        expect(add("//a\n-1a2b3a")).to.equal("Negative not allowed : -1.\n" +
                "'a' expected but 'b' found at position 3.\n" +
                "Number expected but EOF found.");
    });
});