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
var SvgWalletIcon = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 18 18" }, props),
    React.createElement("path", { fill: "currentColor", d: "M12.92 2.25a1.225 1.225 0 0 0-.264.035l-9.14 2.408A1.701 1.701 0 0 0 2.25 6.328v7.734c0 .926.762 1.688 1.688 1.688h10.124c.926 0 1.688-.762 1.688-1.688V6.75c0-.925-.762-1.688-1.688-1.688H6.54l6.399-1.687V4.5h1.124V3.375c0-.633-.538-1.134-1.142-1.125ZM3.938 6.188h10.124c.319 0 .563.244.563.562v7.313a.553.553 0 0 1-.563.562H3.938a.553.553 0 0 1-.563-.563V6.75c0-.318.244-.563.563-.563Zm8.718 3.375a.844.844 0 1 0 0 1.687.844.844 0 0 0 0-1.688Z" }))); };
exports.default = SvgWalletIcon;
//# sourceMappingURL=WalletIcon.js.map