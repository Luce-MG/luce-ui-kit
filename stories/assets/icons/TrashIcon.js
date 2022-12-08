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
function SvgTrashIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M8.8 7.52h1.28v10.24H8.8V7.52zM11.36 7.52h1.28v10.24h-1.28V7.52zM13.92 7.52h1.28v10.24h-1.28V7.52zM3.68 3.68h16.64v1.28H3.68V3.68zM15.2 3.68h-1.28v-.64c0-.384-.256-.64-.64-.64h-2.56c-.384 0-.64.256-.64.64v.64H8.8v-.64c0-1.088.832-1.92 1.92-1.92h2.56c1.088 0 1.92.832 1.92 1.92v.64z", fill: "currentColor" }),
        React.createElement("path", { d: "M15.84 21.6H8.16c-1.024 0-1.92-.832-2.048-1.856L4.96 4.384l1.28-.128 1.152 15.36c0 .384.384.704.768.704h7.68c.384 0 .704-.32.768-.704l1.152-15.36 1.28.128-1.152 15.36c-.128 1.024-1.024 1.856-2.048 1.856z", fill: "currentColor" })));
}
exports.default = SvgTrashIcon;
//# sourceMappingURL=TrashIcon.js.map