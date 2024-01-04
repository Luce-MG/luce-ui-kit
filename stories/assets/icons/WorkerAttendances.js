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
function SvgWorkerAttendances(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.667 7.75h-.917v-.458h-.916v1.375h7.333V7.292h-.917v.458h-.916v-.458h-3.667v.458zm5.5 1.833h-7.333v4.584h7.333V9.583zm-1.833-3.208h-3.667v-.458h-.917v.458h-.916a.917.917 0 00-.917.917v6.875c0 .506.41.916.917.916h7.333c.506 0 .917-.41.917-.916V7.292a.917.917 0 00-.917-.917h-.917v-.458h-.916v.458zm-4.125 5.042V10.5h.916v.917h-.916zm1.833 0h.917V10.5h-.917v.917zm1.833 0V10.5h.917v.917h-.917zm-3.666.916v.917h.916v-.917h-.916zm2.75.917h-.917v-.917h.917v.917z", fill: "#222" }),
        React.createElement("path", { d: "M15.243 20.143v-1.615c0-.856-.344-1.678-.956-2.283a3.283 3.283 0 00-2.309-.946H6.265c-.866 0-1.697.34-2.309.946A3.211 3.211 0 003 18.528v1.615M9.121 13.146c1.803 0 3.265-1.445 3.265-3.229 0-1.783-1.462-3.229-3.265-3.229-1.803 0-3.265 1.446-3.265 3.23 0 1.783 1.462 3.228 3.265 3.228z", stroke: "#222", strokeWidth: 1.5, strokeLinejoin: "round" })));
}
exports.default = SvgWorkerAttendances;
//# sourceMappingURL=WorkerAttendances.js.map