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
function SvgTooManyIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 56 56", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M27 17H5V7h24v7", stroke: "currentColor", strokeWidth: 1.6, strokeLinejoin: "round" }),
        React.createElement("path", { stroke: "currentColor", strokeWidth: 1.6, strokeLinejoin: "round", d: "M27 14h24v10H27zM18 41H5V31h10m14 8v-6M18 39h24v10H18z" }),
        React.createElement("path", { d: "M39 24v9H15V23h12", stroke: "currentColor", strokeWidth: 1.6, strokeLinejoin: "round" })));
}
exports.default = SvgTooManyIcon;
//# sourceMappingURL=TooManyIcon.js.map