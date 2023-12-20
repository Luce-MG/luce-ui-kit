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
var SvgHelpIcon = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24" }, props),
    React.createElement("circle", { cx: 12, cy: 12, r: 9, stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.6 }),
    React.createElement("path", { fill: "currentColor", d: "M11.186 13.634c0-.476.064-.856.192-1.14.128-.283.38-.593.756-.93.38-.34.62-.582.72-.725.156-.219.233-.456.233-.71 0-.337-.09-.593-.273-.769-.178-.179-.442-.269-.79-.269-.334 0-.603.088-.809.264-.201.172-.302.407-.302.704H9.5c.008-.634.24-1.136.698-1.505.46-.37 1.07-.554 1.825-.554.78 0 1.386.183 1.82.548.438.366.657.877.657 1.533 0 .584-.295 1.16-.884 1.726l-.715.65c-.256.269-.387.661-.395 1.177h-1.32Zm-.099 1.672c0-.211.072-.381.215-.51.144-.133.338-.2.582-.2.248 0 .444.069.587.205a.658.658 0 0 1 .215.505c0 .198-.07.363-.21.495-.139.133-.337.199-.592.199-.256 0-.454-.066-.593-.199a.664.664 0 0 1-.204-.495Z" }))); };
exports.default = SvgHelpIcon;
//# sourceMappingURL=HelpIcon.js.map