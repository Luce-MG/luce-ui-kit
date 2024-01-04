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
function SvgPeopleFilterTickIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 26 26", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M21.165 2.833H9.832l4.327 6.498v3.597l2.798 2.183-.086-5.78 4.294-6.498zM10.756 11.444a2.756 2.756 0 11-5.51 0 2.756 2.756 0 015.51 0zM13.335 22.11c0-2.454-2.388-4.444-5.334-4.444-2.945 0-5.333 1.99-5.333 4.444", stroke: "#222", strokeWidth: 1.6 }),
        React.createElement("g", { clipPath: "url(#PeopleFilterTickIcon_svg__clip0_15814_139066)" },
            React.createElement("rect", { x: 16, y: 16, width: 10, height: 10, rx: 5, fill: "#4EA8DC" }),
            React.createElement("path", { d: "M19 20.59l1.765 1.91L24 19", stroke: "#fff" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "PeopleFilterTickIcon_svg__clip0_15814_139066" },
                React.createElement("rect", { x: 16, y: 16, width: 10, height: 10, rx: 5, fill: "#fff" })))));
}
exports.default = SvgPeopleFilterTickIcon;
//# sourceMappingURL=PeopleFilterTickIcon.js.map