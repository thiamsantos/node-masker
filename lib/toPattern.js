"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_json_1 = require("../constants/base.json");
var addPlaceholder_1 = __importDefault(require("./addPlaceholder"));
/**
 * function toPattern
 * @param {number | string} value
 * @param {string | OptionPattern} optionPattern
 * @returns {string}
 */
function toPattern(value, optionPattern) {
    var pattern = typeof optionPattern === 'object' ? optionPattern.pattern : optionPattern;
    var patternChars = pattern.replace(/\W/g, '');
    var output = pattern.split('');
    var values = value.toString().replace(/\W/g, '');
    var charsValues = values.replace(/\W/g, '');
    var placeholder = typeof optionPattern === 'object' ? optionPattern.placeholder : undefined;
    var charCounter = 0;
    var index;
    var outputLength = output.length;
    for (index = 0; index < outputLength; index++) {
        // Reached the end of input
        if (charCounter >= values.length) {
            if (patternChars.length === charsValues.length) {
                return output.join('');
            }
            if (placeholder !== undefined && patternChars.length > charsValues.length) {
                return (0, addPlaceholder_1.default)(output, index, placeholder).join('');
            }
            break;
        }
        else if ((output[index] === base_json_1.DIGIT && values[charCounter].match(/[0-9]/)) ||
            (output[index] === base_json_1.ALPHA && values[charCounter].match(/[a-zA-Z]/)) ||
            (output[index] === base_json_1.ALPHANUM && values[charCounter].match(/[0-9a-zA-Z]/))) {
            output[index] = values[charCounter++];
        }
        else if (output[index] === base_json_1.DIGIT || output[index] === base_json_1.ALPHA || output[index] === base_json_1.ALPHANUM) {
            if (placeholder !== undefined) {
                return (0, addPlaceholder_1.default)(output, index, placeholder).join('');
            }
            return output.slice(0, index).join('');
            // exact match for a non-magic character
        }
        else if (output[index] === values[charCounter]) {
            charCounter++;
        }
    }
    return output.join('').substr(0, index);
}
exports.default = toPattern;
//# sourceMappingURL=toPattern.js.map