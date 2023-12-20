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
var SvgCleaningIcon = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 25" }, props),
    React.createElement("path", { stroke: "currentColor", strokeWidth: 1.6, d: "M1 8.727h13m-13 0 .712 13.38A2 2 0 0 0 3.709 24h9.479L14 8.727m-13 0C1 5.564 3.91 3 7.5 3S14 5.564 14 8.727" }),
    React.createElement("path", { stroke: "currentColor", strokeWidth: 1.6, d: "M4.5 12.444V9h6v3.444m-6 0V14m0-1.556h3m3 0V14m0-1.556h-3m0 0V14M18 1l-1.5 20m0 0h-3.58m3.58 0h4.04a1.5 1.5 0 1 1 0 3H11" }))); };
exports.default = SvgCleaningIcon;
//# sourceMappingURL=CleaningIcon.js.map