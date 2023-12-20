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
var SvgProfileEditIcon = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 18 18" }, props),
    React.createElement("circle", { cx: 8, cy: 5, r: 3.2, stroke: "currentColor", strokeWidth: 1.6 }),
    React.createElement("path", { stroke: "currentColor", strokeWidth: 1.6, d: "M2 17c0-2.761 2.686-5 6-5" }),
    React.createElement("path", { stroke: "currentColor", strokeWidth: 2, d: "m9.96 15.206 5.824-5.823M17.229 7.981l-1 1" }),
    React.createElement("path", { fill: "currentColor", d: "m7.971 17.146.933-2.035 1.102 1.102-2.035.933Z" }))); };
exports.default = SvgProfileEditIcon;
//# sourceMappingURL=ProfileEditIcon.js.map