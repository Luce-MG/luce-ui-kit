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
function SvgCopyIcon(props) {
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 16 19", fill: "none" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.667 7.916v7.917c0 .912-.565 1.583-1.333 1.583H6.667c-.768 0-1.333-.67-1.333-1.583v-3.167H2.667c-.768 0-1.333-.67-1.333-1.583V3.166c0-.912.565-1.583 1.333-1.583h6.667c.768 0 1.333.671 1.333 1.583v3.167h2.667c.768 0 1.333.671 1.333 1.583zM9.334 6.333V3.166H2.667v7.917h2.667V7.916c0-.912.565-1.583 1.333-1.583h2.667zm4 1.583H6.667v7.917h6.667V7.916z", fill: "#1A4D6A" })));
}
exports.default = SvgCopyIcon;
//# sourceMappingURL=CopyIcon.js.map