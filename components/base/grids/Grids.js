"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridSpacing = void 0;
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Paper_1 = __importDefault(require("@material-ui/core/Paper"));
var styles_1 = require("@material-ui/core/styles");
var React = __importStar(require("react"));
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        paper: {
            background: theme.palette.grey[800],
            color: theme.palette.primary.contrastText
        }
    });
});
var GridSpacing = function (props) {
    var classes = useStyles();
    var customSpacing = props.customSpacing;
    var getSpacing = {
        'spacing-xs': 1,
        'spacing-s': 2,
        'spacing-m': 3,
        'spacing-l': 4,
        'spacing-xl': 5,
        'spacing-2x-l': 6
    };
    return (React.createElement(Grid_1.default, { container: true, spacing: getSpacing[customSpacing] },
        React.createElement(Grid_1.default, { item: true, xs: 4 },
            React.createElement(Paper_1.default, { className: classes.paper }, "paper")),
        React.createElement(Grid_1.default, { item: true, xs: 4 },
            React.createElement(Paper_1.default, { className: classes.paper }, "paper")),
        React.createElement(Grid_1.default, { item: true, xs: 4 },
            React.createElement(Paper_1.default, { className: classes.paper }, "paper"))));
};
exports.GridSpacing = GridSpacing;
exports.default = exports.GridSpacing;
//# sourceMappingURL=Grids.js.map