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
var SvgPeopleFilterIcon = function (props) { return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 23", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M21.165 2.833H9.832l4.327 6.498v3.597l2.798 2.183-.086-5.78 4.294-6.498ZM10.756 11.444a2.756 2.756 0 1 1-5.51 0 2.756 2.756 0 0 1 5.51 0ZM13.335 22.11c0-2.454-2.388-4.444-5.334-4.444-2.945 0-5.333 1.99-5.333 4.444", stroke: "#222", strokeWidth: 1.6 }))); };
exports.default = SvgPeopleFilterIcon;
//# sourceMappingURL=PeopleFilterIcon.js.map