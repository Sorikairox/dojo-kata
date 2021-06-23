import { isFizz, isBuzz, isFizzBuzz } from "./fizzbuzz";

function FizzBuzzLoop(iterMax : number) {

    for (let index = 0; index < iterMax; index++) {
        if (isFizzBuzz(index))
            console.log('FizzBuzz');
        else if (isFizz(index) || isBuzz(index))
            console.log((isFizz(index)) ? 'Fizz' : 'Buzz');
        else
            console.log(index)
    }
}

FizzBuzzLoop(20);