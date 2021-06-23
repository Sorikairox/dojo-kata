export function isFizz(number : number) {
    return number % 3 === 0;
}

export function isBuzz(number : number) {
    return number % 5 === 0;
}

export function isFizzBuzz(number : number) {
    return number % 3 === 0 && number % 5 === 0;
}