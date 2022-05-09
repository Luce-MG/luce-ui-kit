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
var SvgAirConIcon = function (props) { return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("rect", { x: 1, y: 2, width: 22, height: 14, rx: 2, stroke: "currentColor", strokeWidth: 1.6 }),
    React.createElement("path", { d: "m5 16 .544-1.633A2 2 0 0 1 7.442 13h9.116a2 2 0 0 1 1.898 1.367L19 16", stroke: "currentColor", strokeWidth: 1.6 }),
    React.createElement("circle", { cx: 18.5, cy: 6.5, r: 1.5, stroke: "currentColor", strokeWidth: 1.6 }),
    React.createElement("path", { d: "m7 20 2 2M11 20l2 2M15 20l2 2", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" }))); };
exports.default = SvgAirConIcon;
//# sourceMappingURL=AirConIcon.js.map