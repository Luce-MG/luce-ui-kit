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
var SvgMasterCardIcon = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 34 24" }, props),
    React.createElement("rect", { width: 34, height: 24, fill: "#FAFAFA", rx: 2.4 }),
    React.createElement("g", { fillRule: "evenodd", clipPath: "url(#MasterCardIcon_svg__a)", clipRule: "evenodd" },
        React.createElement("path", { fill: "#FF5E00", d: "M17.048 17.166a6.469 6.469 0 0 1-4.244 1.583c-3.614 0-6.543-2.967-6.543-6.627 0-3.66 2.93-6.627 6.543-6.627 1.62 0 3.102.596 4.244 1.583a6.469 6.469 0 0 1 4.245-1.583c3.613 0 6.543 2.967 6.543 6.627 0 3.66-2.93 6.627-6.543 6.627a6.469 6.469 0 0 1-4.245-1.583Z" }),
        React.createElement("path", { fill: "#ED0006", d: "M17.048 17.166a6.469 6.469 0 0 1-4.244 1.583c-3.614 0-6.543-2.967-6.543-6.627 0-3.66 2.93-6.627 6.543-6.627 1.62 0 3.102.596 4.244 1.583a6.647 6.647 0 0 0-2.298 5.044c0 2.02.892 3.828 2.298 5.044Z" }),
        React.createElement("path", { fill: "#F9A000", d: "M17.048 17.166a6.469 6.469 0 0 0 4.244 1.583c3.614 0 6.543-2.967 6.543-6.627 0-3.66-2.93-6.627-6.543-6.627-1.62 0-3.102.596-4.244 1.583a6.647 6.647 0 0 1 2.299 5.044c0 2.02-.892 3.828-2.3 5.044Z" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "MasterCardIcon_svg__a" },
            React.createElement("path", { fill: "#fff", d: "M6.084 5.373h22.343v13.44H6.084z" }))))); };
exports.default = SvgMasterCardIcon;
//# sourceMappingURL=MasterCardIcon.js.map