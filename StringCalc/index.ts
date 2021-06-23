import { missingNumber, negativeNumber, checkSeparator } from "./errors";

export function getSeparator(string : string) {
    if (string.startsWith("//") && string[3] === '\n')
        return string[2];
    let commaSep = string.search(',');
    let newlineSep = string.search('\n');
    if (commaSep >= 0 && newlineSep === -1)
        return ',';
    else if (commaSep === -1 && newlineSep >= 0)
        return '\n';
    else return ',';
}

function attributeMissingNumberMessage(errorMessage, string : string, sep : string) {
    if (errorMessage && missingNumber(string, sep))
        errorMessage += '\n' + missingNumber(string, sep);
    else if (missingNumber(string, sep))
        errorMessage = missingNumber(string, sep);
    return errorMessage;
}

function attributeSeparatorMessage(errorMessage, string : string, sep : string) {
    if (errorMessage && checkSeparator(string, sep))
        errorMessage += '\n' + checkSeparator(string, sep);
    else if (checkSeparator(string, sep))
        errorMessage = checkSeparator(string, sep);
    return errorMessage;
}

function errorHandler(string : string, sep : string) {
    let errorMessage : string;
    errorMessage = negativeNumber(string, sep);
    errorMessage = attributeSeparatorMessage(errorMessage, string, sep);
    errorMessage = attributeMissingNumberMessage(errorMessage, string, sep)

    return errorMessage;
}

function getDigitsToAdd(string : string, sep : string) {
    let digitArray : Array<number> = [];
    if (string.startsWith("//"))
        string = string.slice(4);
    for (let idx = 0; idx < string.length; idx++) {
        if (string[idx] >= '0' && string[idx] <= '9')
            digitArray.push(parseInt(string[idx]));
    }
    return digitArray;
}

export function add(string="0") {
    let sep = getSeparator(string);
    let errorMessage = errorHandler(string, sep);
    if (errorMessage)
        return errorMessage;
    let digits : Array<number> = getDigitsToAdd(string, sep);
    let res : number = digits.reduce((accumulator, currentValue) => accumulator + currentValue);
    string = res.toString();
    return string;
}

