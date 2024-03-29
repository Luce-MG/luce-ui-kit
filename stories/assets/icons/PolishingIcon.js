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
function SvgPolishingIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M21 15.5v-2.246a1 1 0 00-.725-.961L7 8.5m0 0H3a1 1 0 00-1 1v8m5-9L4.3 2M12 19H7M5 12h3", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" }),
        React.createElement("circle", { cx: 4, cy: 20, r: 3, stroke: "currentColor", strokeWidth: 1.6 }),
        React.createElement("path", { d: "M12 19a5 5 0 015-5v0a5 5 0 015 5v1H12v-1zM11 23h12", stroke: "currentColor", strokeWidth: 1.6 })));
}
exports.default = SvgPolishingIcon;
//# sourceMappingURL=PolishingIcon.js.map