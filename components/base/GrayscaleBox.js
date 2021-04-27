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
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var grey_1 = __importDefault(require("@material-ui/core/colors/grey"));
var React = __importStar(require("react"));
var Box_1 = __importDefault(require("./Box"));
var Color_1 = __importDefault(require("./Color"));
var grayColor = [
    {
        name: 'Gray 300',
        color: grey_1.default[300],
        textColor: '#222'
    },
    {
        name: 'Gray 400',
        color: grey_1.default[400],
        textColor: '#222'
    },
    {
        name: 'Gray 500',
        color: grey_1.default[500],
        textColor: '#222'
    },
    {
        name: 'Gray 600',
        color: grey_1.default[600],
        textColor: '#fff'
    },
    {
        name: 'Gray 700',
        color: grey_1.default[700],
        textColor: '#fff'
    },
    {
        name: 'Gray 800',
        color: grey_1.default[800],
        textColor: '#fff'
    },
    {
        name: 'Gray 900',
        color: grey_1.default[900],
        textColor: '#fff'
    }
];
var primaryColor = [
    {
        name: 'Primary 300',
        color: Color_1.default.primary[300],
        textColor: '#222'
    },
    {
        name: 'Primary 400',
        color: Color_1.default.primary[400],
        textColor: '#222'
    },
    {
        name: 'Primary 500',
        color: Color_1.default.primary[500],
        textColor: '#222'
    },
    {
        name: 'Primary 600',
        color: Color_1.default.primary[600],
        textColor: '#222'
    },
    {
        name: 'Primary 700',
        color: Color_1.default.primary[700],
        textColor: '#222'
    },
    {
        name: 'Primary 800',
        color: Color_1.default.primary[800],
        textColor: '#fff'
    },
    {
        name: 'Primary 900',
        color: Color_1.default.primary[900],
        textColor: '#fff'
    }
];
var BoxGrayscale = function (props) {
    var primary = props.primary;
    var getScaleBox = function () {
        if (primary) {
            return primaryColor;
        }
        else {
            return grayColor;
        }
    };
    return (React.createElement(Grid_1.default, { container: true, direction: "row", justify: "center", alignItems: "center" }, getScaleBox().map(function (scaleColor, index) { return (React.createElement(Box_1.default, { key: "box-scale-" + index, children: scaleColor.name, bgcolor: scaleColor.color, color: scaleColor.textColor, boxShadow: "1", width: "134px", height: "62px", textAlign: "center" })); })));
};
exports.default = BoxGrayscale;
//# sourceMappingURL=GrayscaleBox.js.map