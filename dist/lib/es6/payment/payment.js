import { post } from "../base";
export var paymentPopup = function (apiKey, body, options) {
    return post("/woodcore/payment", body, apiKey, options);
};
