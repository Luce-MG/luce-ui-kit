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
function SvgPestControlIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 32 32", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M15.997 2A13.989 13.989 0 006.08 25.862c.008.01.012.022.021.031.01.01.021.013.031.021A13.993 13.993 0 1025.894 6.102V6.1a.437.437 0 00-.619 0L6.422 24.954A13.116 13.116 0 0123.917 5.535a.437.437 0 10.529-.697A13.871 13.871 0 0015.997 2zm-3.06 3.5a.437.437 0 00-.089.865 3.666 3.666 0 012.496 1.823c-.965.181-1.534.778-1.534 1.685-.025.74.23 1.462.714 2.022a2.177 2.177 0 00-1.118 1.583c-1.325.424-6.918 2.292-8.25 3.999a1.776 1.776 0 00-.142 1.79c.2.412.758 1.103 2.235 1.103 2.97 0 5.18-3.097 6.25-4.981.037.108.082.214.135.315a.438.438 0 10.772-.41 1.292 1.292 0 01-.158-.61v-.874a1.312 1.312 0 011.312-1.313h.874c.214.002.423.057.61.16a.437.437 0 00.425-.761c.485-.56.74-1.283.715-2.023 0-.907-.568-1.504-1.535-1.685a3.668 3.668 0 012.497-1.823.438.438 0 00-.174-.857 4.53 4.53 0 00-2.975 2.077 4.529 4.529 0 00-2.974-2.077.44.44 0 00-.087-.009zm-2.634 1.317a.437.437 0 00-.301.74l.746.748v1.568c0 .116.047.227.129.31l1.75 1.749a.437.437 0 00.618-.619l-1.622-1.621V8.123a.438.438 0 00-.128-.309l-.875-.875a.437.437 0 00-.317-.122zm11.348 0a.437.437 0 00-.277.122l-.875.875a.437.437 0 00-.128.31v.874a.437.437 0 00.875 0v-.693l.746-.747a.437.437 0 00-.341-.74zm3.925.218a13.118 13.118 0 01-9.579 22.083 13.068 13.068 0 01-8.957-3.546L25.576 7.035zm-9.579 1.963c1.312 0 1.312.659 1.312.875 0 .292-.063 1.75-1.312 1.75s-1.312-1.458-1.312-1.75c0-.219 0-.875 1.312-.875zm4.057 4.999a.438.438 0 00-.165.849c3.33 1.184 5.613 2.34 6.261 3.172a.914.914 0 01.044.868c-.194.398-.696.61-1.45.61-2.433 0-4.386-2.685-5.335-4.285a.438.438 0 10-.753.447c1.274 2.15 3.365 4.712 6.089 4.712 1.477 0 2.035-.69 2.235-1.103a1.776 1.776 0 00-.141-1.79c-.973-1.247-4.155-2.568-6.657-3.456a.434.434 0 00-.128-.024zm-7.095.547c-.882 1.647-2.992 4.951-5.71 4.951-.753 0-1.254-.21-1.448-.612a.918.918 0 01.043-.87c.935-1.197 4.836-2.7 7.115-3.469zm4.815 1.69a.435.435 0 00-.408.364.438.438 0 00.006.17c.257 1.184.383 2.392.375 3.602a8.027 8.027 0 01-1.75 5.03 8 8 0 01-1.74-4.767.437.437 0 00-.874.027 8.587 8.587 0 002.313 5.713.437.437 0 00.601 0 8.588 8.588 0 002.324-6.003 17.307 17.307 0 00-.397-3.798.438.438 0 00-.45-.339zm2.152 2.824a.437.437 0 00-.356.68l.801 1.201v2.93c0 .116.046.228.128.31l1.75 1.75a.438.438 0 00.618-.62l-1.621-1.62v-2.881a.44.44 0 00-.074-.243l-.875-1.312a.437.437 0 00-.371-.195zm-8.303 3.062a.437.437 0 00-.437.437v1.131L9.564 25.31a.437.437 0 10.619.618l1.75-1.75a.437.437 0 00.128-.309v-1.312a.437.437 0 00-.438-.437z", fill: "#323A43" })));
}
exports.default = SvgPestControlIcon;
//# sourceMappingURL=PestControlIcon.js.map