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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
var Rating_1 = __importDefault(require("@material-ui/lab/Rating"));
var React = __importStar(require("react"));
var avatar_icon_svg_1 = __importDefault(require("../../stories/assets/avatar-icon.svg"));
var Avatar_1 = __importDefault(require("../avatar/Avatar"));
var Box_1 = __importDefault(require("../base/Box"));
var Card_1 = require("../base/Card");
var Grid_1 = __importDefault(require("../base/Grid"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Tags_1 = __importDefault(require("../tags/Tags"));
var BeforeAfterStyle = {
    width: 73,
    padding: 8,
    borderRadius: '4px'
};
var useStyles = styles_1.makeStyles(function (theme) {
    return styles_1.createStyles({
        card: {
            width: 271,
            display: 'flex',
            justifyContent: 'space-between',
            borderRadius: '4px'
        },
        default: {
            border: "1px solid " + theme.palette.grey[400],
            background: theme.palette.common.white
        },
        selected: {
            border: "1px solid " + theme.palette.primary.main,
            background: theme.palette.primary.main
        },
        cardHeader: {
            padding: 0
        },
        cardPadding: {
            padding: theme.spacing(1)
        },
        labelBeforeAfter: __assign(__assign({}, BeforeAfterStyle), { background: '#F8FAFB' }),
        labelBeforeAfterSelected: __assign(__assign({}, BeforeAfterStyle), { color: theme.palette.common.white, background: 'rgba(255,255,255, 0.06)' }),
        ratingNumber: {
            marginRight: '4px'
        },
        ratingContainer: {
            lineHeight: '28px'
        },
        Icon: {
            fontSize: '15px'
        },
        IconEmpty: {
            color: theme.palette.grey[400]
        },
        IconFilled: {
            color: '#FFAF52'
        },
        cardTag: {
            padding: '16px 0px 0px 54px',
            '&:last-child': {
                paddingBottom: 0
            }
        },
        Tag: {
            marginRight: '4px'
        },
        selectColor: {
            color: theme.palette.common.white
        }
    });
});
var CardCleaner = function (props) {
    var classes = useStyles();
    var cleanerData = props.cleanerData, isSelected = props.isSelected, onClick = props.onClick, tags = props.tags;
    return (React.createElement(Card_1.Card, { elevation: 0 },
        React.createElement(Card_1.CardActionArea, { onClick: function () { return onClick(cleanerData.id); }, classes: { root: classes.card }, className: isSelected ? classes.selected : classes.default },
            React.createElement(Box_1.default, { className: classes.cardPadding },
                React.createElement(Card_1.CardHeader, { className: isSelected ? classes.selectColor : 'null', classes: { root: classes.cardHeader }, avatar: React.createElement(Avatar_1.default, { src: cleanerData.imgUrl ? cleanerData.imgUrl : avatar_icon_svg_1.default, imageAvatar: true, customSize: "large" }), headTitle: React.createElement(Typography_1.default, { children: cleanerData.name ? cleanerData.name : 'Cleaner Name', bodyVariants: "xsMedium" }), subheader: React.createElement(Grid_1.default, { container: true, item: true },
                        React.createElement(Box_1.default, { className: classes.ratingNumber },
                            React.createElement(Typography_1.default, { className: isSelected ? classes.selectColor : 'null', children: cleanerData.rating ? cleanerData.rating : 0, variant: "overline" })),
                        React.createElement(Box_1.default, { className: classes.ratingContainer },
                            React.createElement(Rating_1.default, { classes: {
                                    icon: classes.Icon,
                                    iconEmpty: isSelected
                                        ? classes.selectColor
                                        : classes.IconEmpty,
                                    iconFilled: classes.IconFilled
                                }, precision: 0.5, value: cleanerData.rating ? cleanerData.rating : 0, readOnly: true }))) }),
                React.createElement(Grid_1.default, { classes: { root: classes.cardTag } },
                    React.createElement(Box_1.default, { display: "flex" }, tags.map(function (tag, index) { return (React.createElement(Box_1.default, { key: "tag-" + index, className: classes.Tag },
                        React.createElement(Tags_1.default, { label: tag.label, customVariant: tag.variant, sizes: "xs" }))); })))),
            React.createElement(Box_1.default, { display: cleanerData.beforeAfterLabel ? 'none' : 'null', className: isSelected
                    ? classes.labelBeforeAfterSelected
                    : classes.labelBeforeAfter },
                React.createElement(Typography_1.default, { children: "Before", variant: "caption" }),
                React.createElement(Typography_1.default, { children: cleanerData.beforeTime ? cleanerData.beforeTime : '0 m', bodyVariants: "xxsMedium" }),
                React.createElement("br", null),
                React.createElement(Typography_1.default, { children: "After", variant: "caption" }),
                React.createElement(Typography_1.default, { children: cleanerData.afterTime ? cleanerData.afterTime : '0 m', bodyVariants: "xxsMedium" })))));
};
exports.default = CardCleaner;
//# sourceMappingURL=CardCleaner.js.map