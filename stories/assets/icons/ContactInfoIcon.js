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
var SvgContactInfoIcon = function (props) { return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M9.319 12.271 7.512 9l-3.448 1.908s-.655 3.067 2.238 6.714c2.893 3.646 7.576 3.373 7.576 3.373L16 17.724l-3.183-1.84-1.293 1.363s-1.12 0-2.42-1.159c-1.302-1.158-1.31-2.59-1.31-2.59l1.525-1.226ZM12 4h9M12 8h9M15 12h6", stroke: "currentColor", strokeWidth: 1.6, strokeLinejoin: "round" }))); };
exports.default = SvgContactInfoIcon;
//# sourceMappingURL=ContactInfoIcon.js.map