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
var SvgEmailIcon = function (props) { return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M15.2 12c0 2.401-1.734 4.2-3.7 4.2-1.966 0-3.7-1.799-3.7-4.2 0-2.401 1.734-4.2 3.7-4.2 1.966 0 3.7 1.799 3.7 4.2Z", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" }),
    React.createElement("path", { d: "M15.5 8c-.4 6.8 0 8.5 2 8.5 3 0 3.5-3 3.5-5.5 0-4.97-4.03-8-9-8a9 9 0 0 0 0 18c2.5 0 4-1 4-1", stroke: "currentColor", strokeWidth: 1.6 }))); };
exports.default = SvgEmailIcon;
//# sourceMappingURL=EmailIcon.js.map