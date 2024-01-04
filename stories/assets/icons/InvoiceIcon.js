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
function SvgInvoiceIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M3.375 1.688v14.624h9v-1.125H4.5V2.813h5.625v3.374H13.5v1.125h1.125V5.4l-.169-.169-3.375-3.375-.168-.169H3.374zM11.25 3.6l1.463 1.462H11.25V3.6zM5.625 7.312v1.125h6.75V7.313h-6.75zm9.563 1.125v1.126c-.957.168-1.688.956-1.688 1.968 0 1.125.844 1.969 1.969 1.969h.562c.45 0 .844.394.844.844 0 .45-.394.844-.844.844h-1.968v1.124h1.124v1.125h1.126v-1.125c.956-.168 1.687-.956 1.687-1.968 0-1.125-.844-1.969-1.969-1.969h-.562a.865.865 0 01-.844-.844c0-.45.394-.844.844-.844h1.969V9.563h-1.125V8.437h-1.125zm-9.563 1.688v1.125h3.938v-1.125H5.624zm5.063 0v1.125h1.687v-1.125h-1.688zm-5.063 2.25V13.5h3.938v-1.125H5.624zm5.063 0V13.5h1.687v-1.125h-1.688z", fill: "currentColor" })));
}
exports.default = SvgInvoiceIcon;
//# sourceMappingURL=InvoiceIcon.js.map