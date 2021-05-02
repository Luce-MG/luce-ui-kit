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
function SvgFulltimeIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 56 56", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M4.667 28c0 12.887 10.447 23.333 23.333 23.333 12.887 0 23.334-10.446 23.334-23.333C51.334 15.113 40.887 4.667 28 4.667", stroke: "currentColor", strokeWidth: 1.6 }),
        React.createElement("path", { d: "M4.667 28C4.667 15.113 15.114 4.667 28 4.667", stroke: "currentColor", strokeWidth: 1.6, strokeDasharray: "2 2" }),
        React.createElement("path", { d: "M37.45 31.538H35.8V20.576a.564.564 0 00-.55-.576.543.543 0 00-.45.246l-7.7 11.539a.595.595 0 00.135.803.532.532 0 00.315.104h7.15v1.731c0 .319.246.577.55.577.304 0 .55-.258.55-.577v-1.73h1.65c.304 0 .55-.26.55-.578a.564.564 0 00-.55-.577zm-2.75 0h-6.094l6.094-9.131v9.131zM25.5 33.846h-5.92l5.504-7.477a.61.61 0 00.035-.053c1.035-1.768.69-4.162-.785-5.448-1.794-1.488-4.293-1.015-5.582 1.055A5.112 5.112 0 0018 24.616c0 .319.224.577.5.577s.5-.258.5-.577c0-1.912 1.343-3.461 3-3.462.628 0 1.24.228 1.75.65 1.034.914 1.274 2.597.55 3.845l-6.181 8.4a.64.64 0 00.058.814c.09.088.205.137.323.137h7c.276 0 .5-.258.5-.577 0-.319-.224-.577-.5-.577z", fill: "currentColor" }),
        React.createElement("path", { d: "M51 28h-3M28 48v3", stroke: "currentColor", strokeWidth: 1.2, strokeLinecap: "round" })));
}
exports.default = SvgFulltimeIcon;
//# sourceMappingURL=FulltimeIcon.js.map