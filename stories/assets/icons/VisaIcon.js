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
function SvgVisaIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 34 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("rect", { width: 34, height: 24, rx: 2.4, fill: "#224DBA" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.5 15.784H9.547l-1.464-5.586c-.07-.256-.217-.484-.434-.59a6.356 6.356 0 00-1.79-.592v-.215h3.146a.82.82 0 01.813.698l.76 4.03L12.53 8.8h1.898L11.5 15.784zm4.013 0h-1.844l1.518-6.983h1.844l-1.518 6.983zm3.904-5.048c.054-.376.38-.591.76-.591a3.436 3.436 0 011.79.322l.325-1.504a4.667 4.667 0 00-1.682-.323c-1.79 0-3.091.967-3.091 2.31 0 1.021.922 1.557 1.573 1.88.705.322.976.537.922.86 0 .483-.543.698-1.085.698a4.65 4.65 0 01-1.898-.43l-.325 1.504a5.32 5.32 0 002.006.376c2.007.053 3.254-.913 3.254-2.364 0-1.826-2.55-1.933-2.55-2.738zm9.002 5.048l-1.464-6.983h-1.572a.816.816 0 00-.76.537l-2.711 6.446h1.898l.38-1.02h2.331l.217 1.02h1.681zm-2.765-5.102l.541 2.631h-1.518l.977-2.631z", fill: "#fff" })));
}
exports.default = SvgVisaIcon;
//# sourceMappingURL=VisaIcon.js.map