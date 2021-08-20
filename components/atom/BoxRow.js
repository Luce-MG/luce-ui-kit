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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var default_1 = __importDefault(require("../../themes/default"));
var Box_1 = __importDefault(require("../base/Box"));
var BoxRow = function (props) {
    var gap = props.gap, children = props.children, width = props.width, direction = props.direction, align = props.align, rest = __rest(props, ["gap", "children", "width", "direction", "align"]);
    return (react_1.default.createElement(Box_1.default, __assign({ alignItems: align, display: "flex", gridGap: default_1.default.spacing(gap ? gap : 0), width: width ? width : '100%', flexDirection: direction }, rest), children));
};
exports.default = BoxRow;
//# sourceMappingURL=BoxRow.js.map