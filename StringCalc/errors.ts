export function missingNumber(string : string, sep=",") {
    if (string.endsWith(',') || string.endsWith('\n') || string.endsWith(sep))
        return "Number expected but EOF found.";
    return null;
}

export function negativeNumber(string : string, sep=',') {
    if (string.startsWith("//"))
        string = string.slice(4);
    let splitedString = string.split(sep);
    if (splitedString[1] && splitedString[0].startsWith('-') && splitedString[1].startsWith('-'))
        return `Negative not allowed : ${splitedString[0]}, ${splitedString[1]}.`
    else if (splitedString[0].startsWith('-'))
        return `Negative not allowed : ${splitedString[0]}.`
    else if (splitedString[1] && splitedString[1].startsWith('-'))
        return `Negative not allowed : ${splitedString[1]}.`
    else
        return null;
}

export function checkSeparator(string : string, sep) {
    if (string.startsWith("//"))
        string = string.slice(4);
    if (string.startsWith("-"))
        string = string.slice(1);
    for (let idx = 0; idx < string.length; idx++) {
        if ((string[idx] < '0' || string[idx] > '9') && string[idx] != sep)
            return `\'${sep}\' expected but \'${string[idx]}\' found at position ${idx}.`
    }
    return null;
}
