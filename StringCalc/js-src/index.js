"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.getSeparator = void 0;
var errors_1 = require("./errors");
function getSeparator(string) {
    if (string.startsWith("//") && string[3] === '\n')
        return string[2];
    var commaSep = string.search(',');
    var newlineSep = string.search('\n');
    if (commaSep >= 0 && newlineSep === -1)
        return ',';
    else if (commaSep === -1 && newlineSep >= 0)
        return '\n';
    else
        return ',';
}
exports.getSeparator = getSeparator;
function attributeMissingNumberMessage(errorMessage, string, sep) {
    if (errorMessage && errors_1.missingNumber(string, sep))
        errorMessage += '\n' + errors_1.missingNumber(string, sep);
    else if (errors_1.missingNumber(string, sep))
        errorMessage = errors_1.missingNumber(string, sep);
    return errorMessage;
}
function attributeSeparatorMessage(errorMessage, string, sep) {
    if (errorMessage && errors_1.checkSeparator(string, sep))
        errorMessage += '\n' + errors_1.checkSeparator(string, sep);
    else if (errors_1.checkSeparator(string, sep))
        errorMessage = errors_1.checkSeparator(string, sep);
    return errorMessage;
}
function errorHandler(string, sep) {
    var errorMessage;
    errorMessage = errors_1.negativeNumber(string, sep);
    errorMessage = attributeSeparatorMessage(errorMessage, string, sep);
    errorMessage = attributeMissingNumberMessage(errorMessage, string, sep);
    return errorMessage;
}
function getDigitsToAdd(string) {
    var digitArray = [];
    if (string.startsWith("//"))
        string = string.slice(4);
    for (var idx = 0; idx < string.length; idx++) {
        if (string[idx] >= '0' && string[idx] <= '9')
            digitArray.push(parseInt(string[idx]));
    }
    return digitArray;
}
function add(string) {
    if (string === void 0) { string = "0"; }
    var sep = getSeparator(string);
    var errorMessage = errorHandler(string, sep);
    if (errorMessage)
        return errorMessage;
    var digits = getDigitsToAdd(string);
    var res = digits.reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
    string = res.toString();
    return string;
}
exports.add = add;
//# sourceMappingURL=index.js.map