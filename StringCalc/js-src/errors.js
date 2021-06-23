"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSeparator = exports.negativeNumber = exports.missingNumber = void 0;
function missingNumber(string, sep) {
    if (sep === void 0) { sep = ","; }
    if (string.endsWith(',') || string.endsWith('\n') || string.endsWith(sep))
        return "Number expected but EOF found.";
    return null;
}
exports.missingNumber = missingNumber;
function negativeNumber(string, sep) {
    if (sep === void 0) { sep = ','; }
    if (string.startsWith("//"))
        string = string.slice(4);
    var splitedString = string.split(sep);
    if (splitedString[1] && splitedString[0].startsWith('-') && splitedString[1].startsWith('-'))
        return "Negative not allowed : " + splitedString[0] + ", " + splitedString[1] + ".";
    else if (splitedString[0].startsWith('-'))
        return "Negative not allowed : " + splitedString[0] + ".";
    else if (splitedString[1] && splitedString[1].startsWith('-'))
        return "Negative not allowed : " + splitedString[1] + ".";
    else
        return null;
}
exports.negativeNumber = negativeNumber;
function checkSeparator(string, sep) {
    if (string.startsWith("//"))
        string = string.slice(4);
    if (string.startsWith("-"))
        string = string.slice(1);
    for (var idx = 0; idx < string.length; idx++) {
        if ((string[idx] < '0' || string[idx] > '9') && string[idx] != sep)
            return "'" + sep + "' expected but '" + string[idx] + "' found at position " + idx + ".";
    }
    return null;
}
exports.checkSeparator = checkSeparator;
//# sourceMappingURL=errors.js.map