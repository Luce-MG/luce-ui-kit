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
exports.CardHeader = exports.CardMedia = exports.CardContent = exports.CardActionArea = exports.CardActions = exports.Card = void 0;
var Card_1 = __importDefault(require("@material-ui/core/Card"));
var CardActionArea_1 = __importDefault(require("@material-ui/core/CardActionArea"));
var CardActions_1 = __importDefault(require("@material-ui/core/CardActions"));
var CardContent_1 = __importDefault(require("@material-ui/core/CardContent"));
var CardHeader_1 = __importDefault(require("@material-ui/core/CardHeader"));
var CardMedia_1 = __importDefault(require("@material-ui/core/CardMedia"));
var React = __importStar(require("react"));
var Card = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return React.createElement(Card_1.default, __assign({}, rest), children);
};
exports.Card = Card;
var CardActions = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return React.createElement(CardActions_1.default, __assign({}, rest), children);
};
exports.CardActions = CardActions;
var CardActionArea = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return React.createElement(CardActionArea_1.default, __assign({}, rest), children);
};
exports.CardActionArea = CardActionArea;
var CardContent = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return React.createElement(CardContent_1.default, __assign({}, rest), children);
};
exports.CardContent = CardContent;
var CardMedia = function (props) {
    var children = props.children, rest = __rest(props, ["children"]);
    return React.createElement(CardMedia_1.default, __assign({}, rest), children);
};
exports.CardMedia = CardMedia;
var CardHeader = function (props) {
    var headTitle = props.headTitle, rest = __rest(props, ["headTitle"]);
    return React.createElement(CardHeader_1.default, __assign({ title: headTitle }, rest));
};
exports.CardHeader = CardHeader;
//# sourceMappingURL=Card.js.map