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
function SvgPinRoundedLocationIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#PinRoundedLocationIcon_svg__clip0_21614_96483)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.096 18.255L12 19.213l-1.096-.958C6.988 14.837 5 11.811 5 9c0-3.979 3.103-7 7-7 3.896 0 7 3.021 7 7 0 2.811-1.988 5.837-5.904 9.255zm-7.41-3.452c.41.563.868 1.134 1.371 1.716C5.195 16.939 4 17.534 4 18c0 .807 3.58 2 8 2s8-1.193 8-2c0-.466-1.195-1.062-3.058-1.481a26.43 26.43 0 001.372-1.716C20.564 15.486 22 16.58 22 18c0 2.507-4.48 4-10 4S2 20.507 2 18c0-1.42 1.437-2.514 3.686-3.197zM12 4c2.804 0 5 2.138 5 5 0 2.047-1.627 4.566-5 7.556C8.627 13.566 7 11.047 7 9c0-2.862 2.196-5 5-5zm0 2a3 3 0 110 6 3 3 0 010-6zm-1 3a1 1 0 112 0 1 1 0 01-2 0z", fill: "currentColor" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "PinRoundedLocationIcon_svg__clip0_21614_96483" },
                React.createElement("path", { fill: "#fff", d: "M0 0h24v24H0z" })))));
}
exports.default = SvgPinRoundedLocationIcon;
//# sourceMappingURL=PinRoundedLocationIcon.js.map