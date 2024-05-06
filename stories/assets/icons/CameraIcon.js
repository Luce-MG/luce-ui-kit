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
var SvgCameraIcon = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 22 18" }, props),
    React.createElement("path", { fill: "#fff", d: "M14.727 0H7.27c-.632 0-1.144.524-1.144 1.17v3.287c0 .646.512 1.17 1.144 1.17h7.458c.632 0 1.144-.524 1.144-1.17V1.17c0-.646-.512-1.17-1.144-1.17Z" }),
    React.createElement("path", { fill: "#fff", d: "M18.7 1.769H3.3C1.477 1.769 0 3.28 0 5.144v9.481C0 16.49 1.477 18 3.3 18h15.4c1.823 0 3.3-1.51 3.3-3.375V5.144c0-1.864-1.477-3.375-3.3-3.375Z" }),
    React.createElement("ellipse", { cx: 11.028, cy: 9.642, fill: "#32607A", stroke: "currentColor", strokeWidth: 2, rx: 5.193, ry: 5.143 }),
    React.createElement("ellipse", { cx: 11.029, cy: 9.642, fill: "#fff", rx: 3.894, ry: 3.857 }))); };
exports.default = SvgCameraIcon;
//# sourceMappingURL=CameraIcon.js.map