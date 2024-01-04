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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
function SvgGiftIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 25 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.997 7C5.669 6.463 5.5 5.803 5.5 5c0-1.583 1.19-3 3-3 1.812 0 3.273 1.214 4 3.114.727-1.9 2.188-3.114 4-3.114 1.81 0 3 1.417 3 3 0 .803-.169 1.463-.497 2H20.5a2 2 0 012 2v2a2 2 0 01-2 2v7a2 2 0 01-2 2h-12a2 2 0 01-2-2v-7a2 2 0 01-2-2V9a2 2 0 012-2h1.497zM11.5 9h-7v2h7V9zm9 2h-7V9h7v2zm-9 9v-7h-5v7h5zm7 0h-5v-7h5v7zM8.5 4c-.62 0-1 .452-1 1 0 1.253 1.017 1.85 3.43 1.974C10.66 5.112 9.661 4 8.5 4zM14 6.974C14.268 5.112 15.267 4 16.43 4c.62 0 1 .452 1 1 0 1.253-1.018 1.85-3.43 1.974z", fill: "currentColor" })));
}
exports.default = SvgGiftIcon;
//# sourceMappingURL=GiftIcon.js.map