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
var SvgPaymentIcon = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24" }, props),
    React.createElement("path", { stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.6, d: "m3.2 4.38-1.942 7.245a1 1 0 0 0 .708 1.225l.653.175m.58-8.644.648-2.415a1 1 0 0 1 1.224-.707l16.421 4.4a1 1 0 0 1 .707 1.224l-.647 2.415M3.2 4.381 16 7.81m5.552 1.487-.841 3.14m.841-3.14L20 8.882" }),
    React.createElement("rect", { width: 18, height: 12, x: 2, y: 11.659, stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.6, rx: 1, transform: "rotate(-15 2 11.659)" }),
    React.createElement("circle", { cx: 7.511, cy: 14.841, r: 1.5, stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.6, transform: "rotate(-15 7.511 14.84)" }),
    React.createElement("circle", { cx: 10.409, cy: 14.064, r: 1.5, stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.6, transform: "rotate(-15 10.41 14.064)" }))); };
exports.default = SvgPaymentIcon;
//# sourceMappingURL=PaymentIcon.js.map