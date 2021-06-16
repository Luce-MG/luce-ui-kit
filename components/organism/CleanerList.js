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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var React = __importStar(require("react"));
var Typography_1 = __importDefault(require("../base/Typography"));
var CleanerSearch_1 = __importDefault(require("../input/CleanerSearch"));
var CardCleaner_1 = __importDefault(require("../molecules/CardCleaner"));
var CleanerList = function (props) {
    var cleaners = props.cleaners, tags = props.tags, allCleaners = props.allCleaners;
    var _a = React.useState(false), selectCard = _a[0], setSelectCard = _a[1];
    var _b = React.useState(0), id = _b[0], setId = _b[1];
    var _c = React.useState(cleaners), list = _c[0], setList = _c[1];
    var handleSelected = function (props) {
        setId(props);
        setSelectCard(!selectCard);
    };
    return (React.createElement(Box_1.default, { padding: 2, bgcolor: "#fff" },
        React.createElement(Box_1.default, { marginBottom: 4 },
            React.createElement(CleanerSearch_1.default, { loading: true, dataCleaner: allCleaners, onSelect: function (props) { return setList(__spreadArrays([props], list)); } })),
        React.createElement(Typography_1.default, { children: "List Cleaner" }),
        React.createElement(Box_1.default, { marginTop: 2 }, list.map(function (cleaner, index) { return (React.createElement(Box_1.default, { key: "card-" + index, marginBottom: index === cleaners.length - 1 ? 0 : 2, width: "100%" },
            React.createElement(CardCleaner_1.default, { key: "card-" + index, cleanerData: {
                    name: cleaner.name,
                    beforeTime: cleaner.beforeTime,
                    afterTime: cleaner.afterTime,
                    rating: cleaner.rating,
                    id: cleaner.id,
                    beforeAfterLabel: cleaner.beforeAfterLabel
                }, tags: tags, isSelected: id === cleaner.id ? selectCard : false, onClick: handleSelected }))); }))));
};
exports.default = CleanerList;
//# sourceMappingURL=CleanerList.js.map