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
function SvgQuestionCircleIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 12c0 6.075 4.925 11 11 11s11-4.925 11-11S18.075 1 12 1 1 5.925 1 12zm20 0a9 9 0 11-18 0 9 9 0 0118 0zm-9 4.998a1 1 0 100-2 1 1 0 000 2zM11 14h2c0-.798.125-.945.947-1.356C15.375 11.93 16 11.202 16 9.5 16 7.32 14.284 6 12 6a4 4 0 00-4 4h2a2 2 0 012-2c1.277 0 2 .556 2 1.5 0 .798-.125.945-.947 1.356C11.625 11.57 11 12.298 11 14z", fill: "currentColor" })));
}
exports.default = SvgQuestionCircleIcon;
//# sourceMappingURL=QuestionCircleIcon.js.map