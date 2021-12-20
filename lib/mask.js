"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unMask = exports.mask = void 0;
/* eslint-disable no-confusing-arrow */
var toPattern_1 = __importDefault(require("./toPattern"));
/**
 * function unMask(
 * @param {string} value
 * @returns {string}
 */
function unMask(value) {
    return value.replace(/\W/g, '');
}
exports.unMask = unMask;
/**
 * function masker(
 * @param {string} value
 * @param {string} patterns
 * @param {any} options
 * @returns {string}
 */
function masker(value, pattern, options) {
    return (0, toPattern_1.default)(value, __assign({ pattern: pattern }, options));
}
/**
 * function multimasker(
 * @param {string} value
 * @param {string[]} patterns
 * @param {any} options
 * @returns {string}
 */
function multimasker(value, patterns, options) {
    return masker(value, patterns.reduce(
    // eslint-disable-next-line prettier/prettier
    function (memo, pattern) { return (value.length <= unMask(memo).length ? memo : pattern); }, patterns[0]), options);
}
/**
 * function mask(
 * @param {string} value
 * @param {string | string[]} patterns
 * @param {any} options
 * @returns {string}
 */
function mask(value, pattern, options) {
    return typeof pattern === 'string'
        ? masker(String(value), pattern || '', options)
        : multimasker(String(value), pattern, options);
}
exports.mask = mask;
//# sourceMappingURL=mask.js.map