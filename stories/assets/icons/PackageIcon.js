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
function SvgPackageIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 25", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#PackageIcon_svg__clip0_20171_197521)", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" },
            React.createElement("path", { d: "M12.89 1.95l8 4A2 2 0 0122 7.74v9.53a1.999 1.999 0 01-1.11 1.79l-8 4a2 2 0 01-1.79 0l-8-4a2 2 0 01-1.1-1.8V7.74a2 2 0 011.11-1.79l8-4a2 2 0 011.78 0v0z" }),
            React.createElement("path", { d: "M2.32 6.66L12 11.5l9.68-4.84M12 23.26V11.5M7 4l10 5" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "PackageIcon_svg__clip0_20171_197521" },
                React.createElement("path", { fill: "currentColor", transform: "translate(0 .5)", d: "M0 0h24v24H0z" })))));
}
exports.default = SvgPackageIcon;
//# sourceMappingURL=PackageIcon.js.map