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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
function SvgTransitIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 7 6", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("g", { clipPath: "url(#TransitIcon_svg__clip0_17158_100064)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.486.313h.028c.46 0 .823 0 1.108.038.293.04.53.122.718.31.187.186.27.424.31.717.025.19.033.417.036.685h.064c.242 0 .438.195.438.437v.25a.438.438 0 01-.175.35l-.326.244a6.405 6.405 0 01-.038.778c-.04.293-.122.53-.31.718a.933.933 0 01-.152.123v.287a.438.438 0 01-.437.438h-.375a.438.438 0 01-.438-.438v-.064c-.13.002-.272.002-.423.002h-.028c-.151 0-.292 0-.424-.002v.064a.438.438 0 01-.437.438H2.25a.438.438 0 01-.438-.438v-.287a.934.934 0 01-.152-.123c-.187-.187-.27-.425-.31-.718a6.402 6.402 0 01-.037-.778L.988 3.1a.438.438 0 01-.175-.35V2.5c0-.242.195-.438.437-.438h.064a5.78 5.78 0 01.037-.684c.04-.293.122-.53.31-.718.186-.187.424-.27.717-.31.285-.038.648-.038 1.108-.037zM1.312 2.437H1.25a.062.062 0 00-.063.063v.25c0 .02.01.038.025.05l.1.075v-.39-.047zm.377 1c.003.259.01.465.033.635.034.252.098.397.203.503.106.105.251.169.503.203.257.034.595.035 1.072.035.477 0 .815 0 1.072-.035.252-.034.397-.098.503-.203.105-.106.169-.251.203-.503.022-.17.03-.376.033-.635H1.69zm3.623-.374H1.688V2.5c0-.47 0-.807.033-1.063H5.28c.033.256.034.592.034 1.063v.563zm.375-.188l.1-.075a.062.062 0 00.026-.05V2.5a.062.062 0 00-.063-.063h-.063v.438zm-.512-1.813a.563.563 0 00-.1-.137C4.969.82 4.824.756 4.572.722 4.315.688 3.977.688 3.5.688c-.477 0-.815 0-1.072.034-.252.034-.397.098-.503.203a.563.563 0 00-.1.137h3.35zM2.188 5.115v.135c0 .035.027.063.062.063h.375a.062.062 0 00.063-.063v-.074a3.775 3.775 0 01-.31-.027 2.064 2.064 0 01-.19-.034zm2.124.061v.074c0 .035.028.063.063.063h.375a.062.062 0 00.063-.063v-.135c-.061.014-.124.025-.19.034a3.775 3.775 0 01-.31.027zM2.063 4c0-.104.084-.188.188-.188h.375a.188.188 0 010 .376H2.25A.188.188 0 012.062 4zm2.126 0c0-.104.083-.188.187-.188h.375a.188.188 0 010 .376h-.375A.188.188 0 014.187 4z", fill: "#fff" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "TransitIcon_svg__clip0_17158_100064" },
                React.createElement("path", { fill: "#fff", transform: "translate(.5)", d: "M0 0h6v6H0z" })))));
}
exports.default = SvgTransitIcon;
//# sourceMappingURL=TransitIcon.js.map