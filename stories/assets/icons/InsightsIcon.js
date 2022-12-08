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
function SvgInsightsIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("mask", { id: "InsightsIcon_svg__a", fill: "#fff" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.257 18.014a11 11 0 00.296-11.488C20.515 1.266 13.787-.538 8.526 2.5 3.266 5.538 1.462 12.265 4.5 17.526a11 11 0 0010.096 5.488l3.1 5.369 8.66-5-3.1-5.37z" })),
        React.createElement("path", { d: "M23.257 18.014l-1.343-.87-.533.822.49.848 1.386-.8zm-8.66 5l1.385-.8-.49-.848-.977.05.081 1.598zm3.1 5.369l-1.386.8.8 1.385 1.385-.8-.8-1.385zm8.66-5l.8 1.385 1.385-.8-.8-1.385-1.386.8zm-4.19-16.057a9.4 9.4 0 01-.253 9.818l2.686 1.74a12.6 12.6 0 00.338-13.158l-2.771 1.6zm-12.84-3.44a9.4 9.4 0 0112.84 3.44l2.771-1.6C21.458-.3 13.753-2.365 7.726 1.114l1.6 2.772zm-3.441 12.84a9.4 9.4 0 013.44-12.84l-1.6-2.772C1.7 4.594-.365 12.3 3.114 18.326l2.772-1.6zm8.629 4.69a9.4 9.4 0 01-8.63-4.69l-2.77 1.6a12.6 12.6 0 0011.563 6.286l-.163-3.196zm4.567 6.167l-3.1-5.37-2.771 1.6 3.1 5.37 2.77-1.6zm6.474-5.586l-8.66 5 1.6 2.771 8.66-5-1.6-2.771zm-3.685-3.183l3.1 5.369 2.771-1.6-3.1-5.37-2.77 1.6z", fill: "currentColor", mask: "url(#InsightsIcon_svg__a)" }),
        React.createElement("path", { d: "M15.79 23.48l7.274-4.2 2.6 4.503a4.2 4.2 0 01-7.275 4.2l-2.6-4.504z", stroke: "currentColor", strokeWidth: 1.6 }),
        React.createElement("path", { d: "M16.764 17.374l-2.59-9.09-3.22.897.798 2.907", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" })));
}
exports.default = SvgInsightsIcon;
//# sourceMappingURL=InsightsIcon.js.map