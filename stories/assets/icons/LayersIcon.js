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
function SvgLayersIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.157 2.28l8.05 4.473c1.057.587 1.057 1.907 0 2.494L19.853 10l1.356.753c1.056.587 1.056 1.907 0 2.494L19.852 14l1.356.753c1.056.587 1.056 1.907 0 2.494l-8.051 4.473c-.673.373-1.641.373-2.314 0l-8.05-4.473c-1.057-.587-1.057-1.907 0-2.494L4.147 14l-1.356-.753c-1.056-.587-1.056-1.907 0-2.494L4.148 10l-1.356-.753c-1.056-.587-1.056-1.907 0-2.494l8.051-4.473c.673-.373 1.641-.373 2.314 0zm0 11.44l4.636-2.576 1.54.856-1.54.856L15.733 14l-3.548 1.971a.615.615 0 01-.37 0L8.266 14l-2.059-1.144L4.667 12l1.54-.856 4.636 2.576c.673.373 1.641.373 2.314 0zm-6.95 1.424L4.667 16l7.148 3.971a.615.615 0 00.37 0L19.334 16l-1.541-.856-4.636 2.576c-.673.373-1.641.373-2.314 0l-4.636-2.576zm5.608-11.115a.616.616 0 01.37 0L19.334 8l-7.149 3.971a.615.615 0 01-.37 0L4.666 8l7.149-3.971z" })));
}
exports.default = SvgLayersIcon;
//# sourceMappingURL=LayersIcon.js.map