"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFizzBuzz = exports.isBuzz = exports.isFizz = void 0;
function isFizz(number) {
    return number % 3 === 0;
}
exports.isFizz = isFizz;
function isBuzz(number) {
    return number % 5 === 0;
}
exports.isBuzz = isBuzz;
function isFizzBuzz(number) {
    return number % 3 === 0 && number % 5 === 0;
}
exports.isFizzBuzz = isFizzBuzz;
//# sourceMappingURL=fizzbuzz.js.map