"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scrollBar = void 0;
var Color_1 = __importDefault(require("./Color"));
exports.scrollBar = {
    overflow: 'auto !important',
    transition: '0.3s',
    '&::-webkit-scrollbar': {
        opacity: 0,
        width: '0.58em',
        height: '8px'
    },
    '&:hover': {
        '&::-webkit-scrollbar': {
            opacity: 1
        },
        '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': "inset 0 0 12px " + Color_1.default.primary[500]
        },
        '&::-webkit-scrollbar-thumb': {
            borderRadius: '8px',
            outline: '1px solid beige',
            backgroundColor: Color_1.default.primary[600]
        }
    }
};
//# sourceMappingURL=Scrollbar.js.map