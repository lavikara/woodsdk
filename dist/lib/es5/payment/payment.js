"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentPopup = void 0;
var base_1 = require("../base");
var paymentPopup = function (apiKey, body, options) {
    return (0, base_1.post)("/woodcore/payment", body, apiKey, options);
};
exports.paymentPopup = paymentPopup;
