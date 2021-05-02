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
function SvgTimeOffIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 56 56", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M45.5 8.75h-35a1.75 1.75 0 00-1.75 1.75v35c0 .967.784 1.75 1.75 1.75h35a1.75 1.75 0 001.75-1.75v-35a1.75 1.75 0 00-1.75-1.75zM38.5 5.25v7M17.5 5.25v7M8.75 19.25h38.5M27.404 25.021l-9.532 9.532M27.404 34.553l-9.532-9.532", stroke: "#000", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("circle", { cx: 42.702, cy: 43.511, fill: "#fff", stroke: "currentColor", strokeWidth: 1.5, r: 9.267 }),
        React.createElement("path", { d: "M42.702 37.553v5.958h3.972", stroke: "currentColor", strokeWidth: 1.3 }),
        React.createElement("path", { d: "M34 24h10M34 27h10M34 30h4", stroke: "currentColor", strokeLinecap: "round" })));
}
exports.default = SvgTimeOffIcon;
//# sourceMappingURL=TimeOffIcon.js.map