"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var icons_1 = __importDefault(require("../../stories/assets/icons"));
var Icon = function (props) {
    var iconName = props.iconName, size = props.size;
    var Icon = icons_1.default[iconName];
    var getViewBox = function () {
        if (size === 'small') {
            return 18;
        }
        if (size === 'large') {
            return 32;
        }
        if (size === 'extraLarge') {
            return 56;
        }
        return 24;
    };
    return react_1.default.createElement(Icon, { width: "" + getViewBox(), height: "" + getViewBox() });
};
exports.default = Icon;
//# sourceMappingURL=Icons.js.map