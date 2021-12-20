"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mask_1 = require("../lib/mask");
test('Should mask correctly', function () {
    var result = (0, mask_1.mask)('123', '9.9.9');
    expect(result).toEqual('1.2.3');
});
test('Should remove mask correctly', function () {
    var result = (0, mask_1.unMask)((0, mask_1.mask)('123', '9.9.9'));
    expect(result).toEqual('123');
});
test('Should use first mask', function () {
    var result = (0, mask_1.mask)('123', ['9.9.9', '99-99']);
    expect(result).toEqual('1.2.3');
});
test('Should use second mask', function () {
    var result = (0, mask_1.mask)('1234', ['9.9.9', '99-99']);
    expect(result).toEqual('12-34');
});
//# sourceMappingURL=mask.spec.js.map