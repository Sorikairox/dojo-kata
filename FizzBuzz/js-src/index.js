"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fizzbuzz_1 = require("./fizzbuzz");
function FizzBuzzLoop(iterMax) {
    for (let index = 0; index < iterMax; index++) {
        if (fizzbuzz_1.isFizzBuzz(index))
            console.log('FizzBuzz');
        else if (fizzbuzz_1.isFizz(index) || fizzbuzz_1.isBuzz(index))
            console.log((fizzbuzz_1.isFizz(index)) ? 'Fizz' : 'Buzz');
        else
            console.log(index);
    }
}
FizzBuzzLoop(20);
//# sourceMappingURL=index.js.map