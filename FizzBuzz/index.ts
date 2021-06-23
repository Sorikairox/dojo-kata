import { isFizz, isBuzz, isFizzBuzz } from "./fizzbuzz";
const express = require('express');
const app = express()

function FizzBuzzLoop(iterMax : number) {

    for (let index = 0; index < iterMax; index++) {
        if (isFizzBuzz(index))
            console.log('FizzBuzz');
        else if (isFizz(index))
            console.log('Fizz');
        else if (isBuzz(index))
            console.log('Buzz');
        else
            console.log(index)
    }
}