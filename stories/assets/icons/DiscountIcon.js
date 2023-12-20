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
var SvgDiscountIcon = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 56 56" }, props),
    React.createElement("path", { stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.6, d: "m9.777 27.752 2.71-16.264 16.265-2.711 21.686 21.685-9.488 9.488" }),
    React.createElement("circle", { cx: 20, cy: 19, r: 2, stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.6 }),
    React.createElement("circle", { cx: 15.806, cy: 34.39, r: 3.627, stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.6 }),
    React.createElement("circle", { cx: 30.312, cy: 45.27, r: 3.627, stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.6 }),
    React.createElement("path", { stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.6, d: "m25.648 30.763-5.006 18.683" }))); };
exports.default = SvgDiscountIcon;
//# sourceMappingURL=DiscountIcon.js.map