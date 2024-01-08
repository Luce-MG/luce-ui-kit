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
function SvgMessengerLogoIcon(props) {
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 800 800", width: "1em", height: "1em" }, props),
        React.createElement("radialGradient", { id: "MessengerLogoIcon_svg__a", cx: 101.9, cy: 809, r: 1.1, gradientTransform: "matrix(800 0 0 -800 -81386 648000)", gradientUnits: "userSpaceOnUse" },
            React.createElement("stop", { offset: 0, stopColor: "#09f" }),
            React.createElement("stop", { offset: 0.6, stopColor: "#a033ff" }),
            React.createElement("stop", { offset: 0.9, stopColor: "#ff5280" }),
            React.createElement("stop", { offset: 1, stopColor: "#ff7061" })),
        React.createElement("path", { fill: "url(#MessengerLogoIcon_svg__a)", d: "M400 0C174.7 0 0 165.1 0 388c0 116.6 47.8 217.4 125.6 287 6.5 5.8 10.5 14 10.7 22.8l2.2 71.2a32 32 0 0044.9 28.3l79.4-35c6.7-3 14.3-3.5 21.4-1.6 36.5 10 75.3 15.4 115.8 15.4 225.3 0 400-165.1 400-388S625.3 0 400 0z" }),
        React.createElement("path", { fill: "#FFF", d: "M159.8 501.5l117.5-186.4a60 60 0 0186.8-16l93.5 70.1a24 24 0 0028.9-.1l126.2-95.8c16.8-12.8 38.8 7.4 27.6 25.3L522.7 484.9a60 60 0 01-86.8 16l-93.5-70.1a24 24 0 00-28.9.1l-126.2 95.8c-16.8 12.8-38.8-7.3-27.5-25.2z" })));
}
exports.default = SvgMessengerLogoIcon;
//# sourceMappingURL=MessengerLogoIcon.js.map