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
Object.defineProperty(exports, "__esModule", { value: true });
exports.post = void 0;
var axios_1 = require("axios");
var baseUrl = "https://52fa0596-5e91-4e7c-b2a8-bb3d4b8b66c7.mock.pstmn.io";
var post = function (endpoint, body, apiKey, options) {
    var url = "".concat(baseUrl).concat(endpoint);
    var headers = {
        "Content-Type": "application.json",
        "api-key": apiKey,
    };
    var config = __assign(__assign({}, options), { headers: headers });
    return axios_1.default.post(url, body, config).then(function (response) {
        if (response) {
            var data = response.data.data;
            var ifrm = document.createElement("iframe");
            ifrm.setAttribute("src", "https://earnest-taffy-8a7df4.netlify.app/paymentdetails/".concat(data.reference));
            ifrm.setAttribute("target", "_parent");
            ifrm.setAttribute("id", "woodcore--frame-id");
            ifrm.setAttribute("allowfullscreen", "true");
            ifrm.setAttribute("frameborder", "0");
            ifrm.setAttribute("title", "woodcore payment");
            ifrm.setAttribute("sandbox", "allow-forms allow-scripts allow-same-origin allow-top-navigation-by-user-activation allow-popups");
            ifrm.setAttribute("allow", "camera");
            ifrm.setAttribute("allowusermedia", "true");
            ifrm.style.width = "100%";
            ifrm.style.height = "100%";
            ifrm.style.zIndex = "999999999";
            ifrm.style.position = "fixed";
            ifrm.style.top = "0";
            ifrm.style.left = "0";
            ifrm.style.overflow = "hidden";
            ifrm.style.zIndex = "999999999";
            document.body.appendChild(ifrm);
            var iframeDoc = ifrm.contentDocument || ifrm.contentWindow.document;
            var tw = iframeDoc.createElement("script");
            tw.setAttribute("src", "https://cdn.tailwindcss.com");
            tw.onload = function () {
                iframeDoc.body.innerHTML = iframeDoc.body.innerHTML; //re render
            };
            iframeDoc.head.appendChild(tw);
        }
        else
            throw new Error();
    });
};
exports.post = post;
