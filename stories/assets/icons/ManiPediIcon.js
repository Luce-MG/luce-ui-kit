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
function SvgManiPediIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 41 36", fill: "none", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("mask", { id: "ManiPediIcon_svg__a", style: {
                maskType: 'alpha'
            }, maskUnits: "userSpaceOnUse", x: 3, y: 0, width: 38, height: 36 },
            React.createElement("path", { fill: "url(#ManiPediIcon_svg__pattern0)", d: "M3 0h38v36H3z" })),
        React.createElement("g", { mask: "url(#ManiPediIcon_svg__a)" },
            React.createElement("path", { fill: "currentColor", d: "M.328-4.148h45.57v43.945H.328z" })),
        React.createElement("path", { d: "M6.657 9.438h-.189c-.18 1.899-1.51 3.408-3.187 3.612v.213c1.676.204 3.008 1.713 3.187 3.612h.189c.18-1.9 1.51-3.408 3.187-3.612v-.213c-1.676-.204-3.008-1.713-3.187-3.613zM12.241 7.844h-.107c-.103 1.085-.864 1.947-1.822 2.064v.122c.958.116 1.719.978 1.822 2.064h.107c.103-1.086.864-1.948 1.822-2.064v-.122c-.958-.117-1.719-.979-1.822-2.064zM3.335 4.656h-.107c-.103 1.086-.864 1.948-1.822 2.064v.122c.958.117 1.719.979 1.822 2.064h.107c.103-1.085.864-1.947 1.821-2.064V6.72c-.957-.116-1.718-.978-1.821-2.064z", stroke: "currentColor" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "ManiPediIcon_svg__pattern0", patternContentUnits: "objectBoundingBox", width: 1, height: 1 },
                React.createElement("use", { xlinkHref: "#ManiPediIcon_svg__image0_21786_220584", transform: "matrix(.00195 0 0 .00206 0 -.028)" })),
            React.createElement("image", { id: "ManiPediIcon_svg__image0_21786_220584", width: 512, height: 512, xlinkHref: "data:image/png;base64,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" }))));
}
exports.default = SvgManiPediIcon;
//# sourceMappingURL=ManiPediIcon.js.map