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
function SvgPauseIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 14 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("mask", { id: "PauseIcon_svg__a", fill: "#fff" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 0H2a2 2 0 00-2 2v16a2 2 0 002 2h2a2 2 0 002-2V2a2 2 0 00-2-2zm8 0h-2a2 2 0 00-2 2v16a2 2 0 002 2h2a2 2 0 002-2V2a2 2 0 00-2-2z" })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 0H2a2 2 0 00-2 2v16a2 2 0 002 2h2a2 2 0 002-2V2a2 2 0 00-2-2zm8 0h-2a2 2 0 00-2 2v16a2 2 0 002 2h2a2 2 0 002-2V2a2 2 0 00-2-2z", fill: "#000" }),
        React.createElement("path", { d: "M2 2h2v-4H2v4zm0 0v-4a4 4 0 00-4 4h4zm0 16V2h-4v16h4zm0 0h-4a4 4 0 004 4v-4zm2 0H2v4h2v-4zm0 0v4a4 4 0 004-4H4zM4 2v16h4V2H4zm0 0h4a4 4 0 00-4-4v4zm6 0h2v-4h-2v4zm0 0v-4a4 4 0 00-4 4h4zm0 16V2H6v16h4zm0 0H6a4 4 0 004 4v-4zm2 0h-2v4h2v-4zm0 0v4a4 4 0 004-4h-4zm0-16v16h4V2h-4zm0 0h4a4 4 0 00-4-4v4z", fill: "#000", mask: "url(#PauseIcon_svg__a)" })));
}
exports.default = SvgPauseIcon;
//# sourceMappingURL=PauseIcon.js.map