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
function SvgFreshIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M14.2 14h-.4A7.674 7.674 0 017 20.8v.4a7.674 7.674 0 016.8 6.8h.4a7.674 7.674 0 016.8-6.8v-.4a7.674 7.674 0 01-6.8-6.8zM26.115 11h-.23A4.385 4.385 0 0122 14.885v.23A4.385 4.385 0 0125.885 19h.23A4.385 4.385 0 0130 15.115v-.23A4.385 4.385 0 0126.115 11zM7.115 5h-.23A4.385 4.385 0 013 8.885v.23A4.385 4.385 0 016.885 13h.23A4.385 4.385 0 0111 9.115v-.23A4.385 4.385 0 017.115 5z", stroke: "currentColor", strokeWidth: 2 })));
}
exports.default = SvgFreshIcon;
//# sourceMappingURL=FreshIcon.js.map