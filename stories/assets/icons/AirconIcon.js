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
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 28 28", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("rect", { x: 1.428, y: 2.571, width: 25.143, height: 16, rx: 2, stroke: "currentColor", strokeWidth: 1.6 }),
        React.createElement("path", { d: "M6 18.571l.687-2.06a2 2 0 011.897-1.368h10.832a2 2 0 011.897 1.367L22 18.571", stroke: "currentColor", strokeWidth: 1.6 }),
        React.createElement("circle", { cx: 21.428, cy: 7.714, stroke: "currentColor", strokeWidth: 1.6, r: 1.714 }),
        React.createElement("path", { d: "M8.286 23.143l2.285 2.285M12.857 23.143l2.286 2.285M17.428 23.143l2.286 2.285", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" })));
}
exports.default = SvgAirconIcon;
//# sourceMappingURL=AirconIcon.js.map