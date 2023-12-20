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
var SvgPauseIcon = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 14 20" }, props),
    React.createElement("mask", { id: "PauseIcon_svg__a", fill: "#fff" },
        React.createElement("path", { fillRule: "evenodd", d: "M4 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z", clipRule: "evenodd" })),
    React.createElement("path", { fill: "#000", fillRule: "evenodd", d: "M4 0H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z", clipRule: "evenodd" }),
    React.createElement("path", { fill: "#000", d: "M2 2h2v-4H2v4Zm0 0v-4a4 4 0 0 0-4 4h4Zm0 16V2h-4v16h4Zm0 0h-4a4 4 0 0 0 4 4v-4Zm2 0H2v4h2v-4Zm0 0v4a4 4 0 0 0 4-4H4ZM4 2v16h4V2H4Zm0 0h4a4 4 0 0 0-4-4v4Zm6 0h2v-4h-2v4Zm0 0v-4a4 4 0 0 0-4 4h4Zm0 16V2H6v16h4Zm0 0H6a4 4 0 0 0 4 4v-4Zm2 0h-2v4h2v-4Zm0 0v4a4 4 0 0 0 4-4h-4Zm0-16v16h4V2h-4Zm0 0h4a4 4 0 0 0-4-4v4Z", mask: "url(#PauseIcon_svg__a)" }))); };
exports.default = SvgPauseIcon;
//# sourceMappingURL=PauseIcon.js.map