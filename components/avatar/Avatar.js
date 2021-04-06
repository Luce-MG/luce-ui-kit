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
var styles_1 = require("@material-ui/core/styles");
var Avatar_1 = __importDefault(require("@material-ui/core/Avatar"));
var React = __importStar(require("react"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        iconAvatar: {
            background: theme.palette.primary.main,
        },
        imgAvatar: {
            background: theme.palette.grey[400],
        },
        avatarSmall: __assign({ width: 24, height: 24 }, theme.typography.caption),
        avatarMedium: __assign({ width: 32, height: 32 }, theme.typography.overline),
        avatarLarge: __assign({ width: 40, height: 40 }, theme.typography.overline),
        avatarExtraLarge: __assign({ width: 128, height: 128 }, theme.typography.overline),
    });
});
var Avatar = function (props) {
    var classes = useStyles();
    var imageAvatar = props.imageAvatar, customSize = props.customSize, children = props.children, rest = __rest(props, ["imageAvatar", "customSize", "children"]);
    var getSize = function () {
        if (customSize === 'small') {
            return { root: classes.avatarSmall };
        }
        else if (customSize === 'medium') {
            return { root: classes.avatarMedium };
        }
        else if (customSize === 'large') {
            return { root: classes.avatarLarge };
        }
        else if (customSize === 'xl') {
            return { root: classes.avatarExtraLarge };
        }
        else {
            return { root: classes.avatarMedium };
        }
    };
    return React.createElement(Avatar_1.default, __assign({ classes: getSize(), className: imageAvatar ? classes.imgAvatar : classes.iconAvatar }, rest),
        " ",
        children,
        " ");
};
exports.default = Avatar;
//# sourceMappingURL=Avatar.js.map