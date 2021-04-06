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
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var BaseColor_1 = __importDefault(require("./BaseColor"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        modalOverlay: {
            background: BaseColor_1.default.baseColor.modalOverlay
        },
        colorPrimary: {
            background: theme.palette.primary.main
        },
        colorSecondary: {
            background: theme.palette.secondary.main
        },
        colorCta: {
            background: BaseColor_1.default.baseColor.colorCta
        },
        colorBlack: {
            background: theme.palette.common.black
        },
        colorWhite: {
            background: theme.palette.common.white
        },
        colorSuccess: {
            background: theme.palette.success.main
        },
        colorError: {
            background: theme.palette.error.main
        },
        colorLink: {
            background: theme.palette.info.main
        },
        colorAdditionall: {
            background: BaseColor_1.default.baseColor.firstAdditional
        },
        colorAdditional2: {
            background: BaseColor_1.default.baseColor.secondAdditional
        },
        colorBase1: {
            background: BaseColor_1.default.baseColor.firstBase
        },
        colorBase2: {
            background: BaseColor_1.default.baseColor.secondBase
        },
        colorBase3: {
            background: BaseColor_1.default.baseColor.thirdBase
        },
        colorTint1: {
            background: BaseColor_1.default.baseColor.firstTint
        },
        colorTint2: {
            background: BaseColor_1.default.baseColor.secondTint
        },
        colorTint3: {
            background: BaseColor_1.default.baseColor.thirdTint
        }
    });
});
var Box = function (props) {
    var classes = useStyles();
    var modalOverlay = props.modalOverlay, colorSystem = props.colorSystem, children = props.children, rest = __rest(props, ["modalOverlay", "colorSystem", "children"]);
    var getStyle = function () {
        if (modalOverlay) {
            return classes.modalOverlay;
        }
        else if (colorSystem === 'primary') {
            return classes.colorPrimary;
        }
        else if (colorSystem === 'secondary') {
            return classes.colorSecondary;
        }
        else if (colorSystem === 'cta') {
            return classes.colorCta;
        }
        else if (colorSystem === 'black') {
            return classes.colorBlack;
        }
        else if (colorSystem === 'white') {
            return classes.colorWhite;
        }
        else if (colorSystem === 'success') {
            return classes.colorSuccess;
        }
        else if (colorSystem === 'error') {
            return classes.colorError;
        }
        else if (colorSystem === 'link') {
            return classes.colorLink;
        }
        else if (colorSystem === 'additional1') {
            return classes.colorAdditionall;
        }
        else if (colorSystem === 'additional2') {
            return classes.colorAdditional2;
        }
        else if (colorSystem === 'base1') {
            return classes.colorBase1;
        }
        else if (colorSystem === 'base2') {
            return classes.colorBase2;
        }
        else if (colorSystem === 'base3') {
            return classes.colorBase3;
        }
        else if (colorSystem === 'tint1') {
            return classes.colorTint1;
        }
        else if (colorSystem === 'tint2') {
            return classes.colorTint2;
        }
        else if (colorSystem === 'tint3') {
            return classes.colorTint3;
        }
    };
    return (React.createElement(Box_1.default, __assign({ className: getStyle() }, rest), children));
};
exports.default = Box;
//# sourceMappingURL=Box.js.map