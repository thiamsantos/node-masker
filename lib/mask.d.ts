/**
 * function unMask(
 * @param {string} value
 * @returns {string}
 */
declare function unMask(value: string): string;
/**
 * function mask(
 * @param {string} value
 * @param {string | string[]} patterns
 * @param {any} options
 * @returns {string}
 */
declare function mask(value: string | number, pattern: string | string[], options?: any): string;
export { mask, unMask };
