"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassNameMap = exports.themeProvider = exports.createTheme = exports.createStyles = exports.withStyles = exports.makeStyles = exports.useTheme = exports.fade = void 0;
var styles_1 = require("@material-ui/core/styles");
Object.defineProperty(exports, "fade", { enumerable: true, get: function () { return styles_1.fade; } });
Object.defineProperty(exports, "useTheme", { enumerable: true, get: function () { return styles_1.useTheme; } });
Object.defineProperty(exports, "makeStyles", { enumerable: true, get: function () { return styles_1.makeStyles; } });
Object.defineProperty(exports, "withStyles", { enumerable: true, get: function () { return styles_1.withStyles; } });
Object.defineProperty(exports, "createStyles", { enumerable: true, get: function () { return styles_1.createStyles; } });
Object.defineProperty(exports, "createTheme", { enumerable: true, get: function () { return styles_1.createMuiTheme; } });
Object.defineProperty(exports, "themeProvider", { enumerable: true, get: function () { return styles_1.MuiThemeProvider; } });
var withStyles_1 = __importDefault(require("@material-ui/core/styles/withStyles"));
exports.ClassNameMap = withStyles_1.default;
exports.default = styles_1.MuiThemeProvider;
//# sourceMappingURL=ThemeProvider.js.map