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
function SvgGuaranteeIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 56 56", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M28 50s18-9 18-22.5V11.75L28 5l-18 6.75V27.5C10 41 28 50 28 50z", stroke: "currentColor", strokeWidth: 1.6, strokeLinejoin: "round" }),
        React.createElement("path", { d: "M28 29a7 7 0 100-14 7 7 0 000 14z", stroke: "currentColor", strokeWidth: 1.6, strokeLinejoin: "round" }),
        React.createElement("path", { d: "M24.21 27.89L23 37l5-3 5 3-1.21-9.12", stroke: "currentColor", strokeWidth: 1.6, strokeLinejoin: "round" })));
}
exports.default = SvgGuaranteeIcon;
//# sourceMappingURL=GuaranteeIcon.js.map