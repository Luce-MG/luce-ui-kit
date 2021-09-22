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
function SvgMasterCardIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 34 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("rect", { width: 34, height: 24, rx: 2.4, fill: "#FAFAFA" }),
        React.createElement("g", { clipPath: "url(#MasterCardIcon_svg__clip0)", fillRule: "evenodd", clipRule: "evenodd" },
            React.createElement("path", { d: "M17.048 17.166a6.469 6.469 0 01-4.244 1.583c-3.614 0-6.543-2.967-6.543-6.627 0-3.66 2.93-6.627 6.543-6.627 1.62 0 3.102.596 4.244 1.583a6.469 6.469 0 014.245-1.583c3.613 0 6.543 2.967 6.543 6.627 0 3.66-2.93 6.627-6.543 6.627a6.469 6.469 0 01-4.245-1.583z", fill: "#FF5E00" }),
            React.createElement("path", { d: "M17.048 17.166a6.469 6.469 0 01-4.244 1.583c-3.614 0-6.543-2.967-6.543-6.627 0-3.66 2.93-6.627 6.543-6.627 1.62 0 3.102.596 4.244 1.583a6.647 6.647 0 00-2.298 5.044c0 2.02.892 3.828 2.298 5.044z", fill: "#ED0006" }),
            React.createElement("path", { d: "M17.048 17.166a6.469 6.469 0 004.244 1.583c3.614 0 6.543-2.967 6.543-6.627 0-3.66-2.93-6.627-6.543-6.627-1.62 0-3.102.596-4.244 1.583a6.647 6.647 0 012.299 5.044c0 2.02-.892 3.828-2.3 5.044z", fill: "#F9A000" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "MasterCardIcon_svg__clip0" },
                React.createElement("path", { fill: "#fff", transform: "translate(6.084 5.373)", d: "M0 0h22.343v13.44H0z" })))));
}
exports.default = SvgMasterCardIcon;
//# sourceMappingURL=MasterCardIcon.js.map