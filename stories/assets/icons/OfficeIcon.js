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
var SvgOfficeIcon = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 56 56" }, props),
    React.createElement("path", { stroke: "currentColor", strokeWidth: 1.6, d: "M29.485 51.333H4.667V4.667H35v15.555" }),
    React.createElement("path", { stroke: "currentColor", strokeWidth: 2, d: "M14 11.667v4.666M26 12v4.667M14 21v4.667M14 30.333V35M14 39.667v4.666M32.667 37.333V42M32.667 28v4.667M41 28v4.667" }),
    React.createElement("path", { stroke: "currentColor", strokeWidth: 1.6, d: "M25.667 21H49v30.333H25.667V21Z" }))); };
exports.default = SvgOfficeIcon;
//# sourceMappingURL=OfficeIcon.js.map