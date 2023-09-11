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
function SvgUpholsteryIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M28 20.666v-2.994c0-.595-.395-1.118-.968-1.282l-17.7-5.057m0 0H4c-.736 0-1.333.597-1.333 1.333v10.667m6.667-12l-3.6-8.666m10.266 22.666H9.333M6.666 16h4", stroke: "#fff", strokeWidth: 1.6, strokeLinecap: "round" }),
        React.createElement("path", { d: "M5.334 30.666a4 4 0 100-8 4 4 0 000 8zM16 25.333a6.667 6.667 0 0113.333 0v1.334H16v-1.334zM14.666 30.666h16", stroke: "#fff", strokeWidth: 1.6 })));
}
exports.default = SvgUpholsteryIcon;
//# sourceMappingURL=UpholsteryIcon.js.map