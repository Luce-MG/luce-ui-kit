"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.settings = void 0;
var styles_1 = require("@material-ui/core/styles");
var shadows_1 = __importDefault(require("@material-ui/core/styles/shadows"));
var mineShaft = '#222';
var blumine = '#1A4D6A';
var havelockBlue = '#4EA8DC';
var carnation = '#F15151';
var chateauGreen = '#37B24D';
var blueLink = '#3384FD';
var allShadows = shadows_1.default.slice(5, 25).map(function () { return 'none'; });
var shadowVariant = __spreadArray([
    'none',
    '0px 10px 25px rgba(0, 0, 0, 0.06)',
    '0px 20px 46px rgba(0, 0, 0, 0.08)',
    '0px 10px 20px rgba(0, 0, 0, 0.01)',
    '0px 34px 80px rgba(0, 0, 0, 0.06)'
], allShadows);
exports.settings = {
    name: 'Default Theme',
    overrides: {
        MuiButton: {
            root: {
                'text-transform': 'none'
            }
        }
    },
    breakpoints: {
        values: {
            xs: 480,
            sm: 767,
            md: 991,
            lg: 1280,
            xl: 1920
        }
    },
    palette: {
        common: {
            black: mineShaft
        },
        primary: {
            main: blumine
        },
        secondary: {
            main: havelockBlue,
            contrastText: '#fff'
        },
        error: {
            main: carnation
        },
        info: {
            main: blueLink
        },
        success: {
            main: chateauGreen
        },
        grey: {
            300: '#FAFAFA',
            400: '#F1F1F1',
            500: '#ECECEC',
            600: '#DBDBDB',
            700: '#9D9D9D',
            800: '#777777',
            900: '#555555'
        },
        text: {
            primary: mineShaft
        }
    },
    shadows: shadowVariant,
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 38,
            lineHeight: 1.42,
            letterSpacing: '-0.01em'
        },
        h2: {
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 32,
            lineHeight: 1.37,
            letterSpacing: '-0.02em'
        },
        h3: {
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 28,
            lineHeight: 1.39,
            letterSpacing: '-0.01em'
        },
        h4: {
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 24,
            lineHeight: 1.42
        },
        h5: {
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 20,
            lineHeight: 1.4
        },
        h6: {
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: 17,
            lineHeight: 1.41
        },
        // body medium / M
        subtitle1: {
            fontWeight: 500,
            fontSize: 16,
            lineHeight: 1.5
        },
        // body medium / S
        subtitle2: {
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 1.71
        },
        // body / M
        body1: {
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.5
        },
        // body / S
        body2: {
            fontWeight: 400,
            fontSize: 14,
            lineHeight: 1.71
        },
        // button / M
        button: {
            fontWeight: 500,
            fontSize: 15,
            lineHeight: 1.33
        },
        // body / XXS
        caption: {
            fontWeight: 400,
            fontSize: 11,
            lineHeight: 1.45,
            letterSpacing: 'inherit'
        },
        // body / XS
        overline: {
            fontWeight: 400,
            fontSize: 13,
            lineHeight: 1.38,
            fontFamily: 'inherit',
            letterSpacing: 'inherit',
            'text-transform': 'inherit'
        }
    },
    spacing: 8
};
exports.default = styles_1.createMuiTheme(exports.settings);
//# sourceMappingURL=default.js.map