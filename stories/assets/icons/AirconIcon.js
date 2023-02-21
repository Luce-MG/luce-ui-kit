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
function SvgAirconIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 56 56", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("rect", { x: 2.334, y: 4.666, width: 51.333, height: 32.667, rx: 2, stroke: "#1A4D6A", strokeWidth: 1.6 }),
        React.createElement("path", { d: "M11.668 37.332l1.878-5.632a2 2 0 011.897-1.368H40.56a2 2 0 011.897 1.368l1.878 5.632", stroke: "#1A4D6A", strokeWidth: 1.6 }),
        React.createElement("circle", { cx: 43.168, cy: 15.166, stroke: "#1A4D6A", strokeWidth: 1.6, r: 3.5 }),
        React.createElement("path", { d: "M16.334 46.666l4.667 4.667M25.668 46.666l4.667 4.667M35 46.666l4.667 4.667", stroke: "#1A4D6A", strokeWidth: 1.6, strokeLinecap: "round" })));
}
exports.default = SvgAirconIcon;
//# sourceMappingURL=AirconIcon.js.map
