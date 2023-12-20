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
var SvgTextMessageLogoIcon = function (props) { return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 32 32" }, props),
    React.createElement("g", { clipPath: "url(#TextMessageLogoIcon_svg__a)" },
        React.createElement("path", { fill: "#009688", d: "M26.947 27.2H5.053L0 32V4.8C0 2.16 2.274 0 5.053 0h21.894C29.727 0 32 2.16 32 4.8v17.6c0 2.64-2.274 4.8-5.053 4.8Z" }),
        React.createElement("path", { fill: "#fff", d: "M14 13.667a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM20.667 13.667a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM7.333 13.667a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z" })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: "TextMessageLogoIcon_svg__a" },
            React.createElement("path", { fill: "#fff", d: "M0 0h32v32H0z" }))))); };
exports.default = SvgTextMessageLogoIcon;
//# sourceMappingURL=TextMessageLogoIcon.js.map