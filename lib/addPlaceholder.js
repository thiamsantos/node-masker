"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var base_json_1 = require("../constants/base.json");
/**
 * function addPlaceholder
 * @param {string[]} output
 * @param {number} index
 * @param {string} placeholder
 * @returns {string[]}
 */
function addPlaceholder(output, index, placeholder) {
    for (var newIndex = index; newIndex < output.length; newIndex++) {
        if (output[newIndex] === base_json_1.DIGIT || output[newIndex] === base_json_1.ALPHA || output[newIndex] === base_json_1.ALPHANUM) {
            // eslint-disable-next-line no-param-reassign
            output[newIndex] = placeholder;
        }
    }
    return output;
}
exports.default = addPlaceholder;
//# sourceMappingURL=addPlaceholder.js.map