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
function SvgWeChatLogoIcon(props) {
    return (React.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", viewBox: "0 0 33 32", fill: "none" }, props),
        React.createElement("g", { clipPath: "url(#WeChatLogoIcon_svg__clip0_24327_231996)" },
            React.createElement("path", { d: "M27.7 0H5.3A4.8 4.8 0 00.5 4.8v22.4A4.8 4.8 0 005.3 32h22.4a4.8 4.8 0 004.8-4.8V4.8A4.8 4.8 0 0027.7 0z", fill: "#00C70A" }),
            React.createElement("path", { d: "M25.625 23.063C27.063 22 28 20.438 28 18.688c0-3.188-3.125-5.75-6.938-5.75-3.812 0-6.875 2.562-6.875 5.75 0 3.187 3.063 5.75 6.876 5.75.812 0 1.562-.125 2.25-.313.25-.063.5 0 .562.063l1.563.875c.187.125.375 0 .312-.25l-.375-1.375c0-.188.125-.313.25-.375zM18.75 17.75a.936.936 0 01-1.177-.906.938.938 0 111.177.906zm4.625 0a.936.936 0 01-1.177-.906.938.938 0 111.177.906z", fill: "#fff" }),
            React.createElement("path", { d: "M13.313 6.563c-4.563 0-8.25 3.125-8.25 6.937 0 2.063 1.062 3.938 2.812 5.188.188.125.313.312.25.625l-.438 1.5c-.062.312.188.437.375.375l1.876-1.063a.868.868 0 01.687-.125c1.625.5 3 .375 3.188.375-1.5-5.25 3.687-8.25 7.687-8-.625-3.25-4.063-5.813-8.188-5.813zm-2.75 5.812a1.125 1.125 0 11-.527-2.188 1.125 1.125 0 01.527 2.188zm5.562 0a1.125 1.125 0 11-.527-2.188 1.125 1.125 0 01.527 2.188z", fill: "#fff" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "WeChatLogoIcon_svg__clip0_24327_231996" },
                React.createElement("path", { fill: "#fff", transform: "translate(.5)", d: "M0 0h32v32H0z" })))));
}
exports.default = SvgWeChatLogoIcon;
//# sourceMappingURL=WeChatLogoIcon.js.map