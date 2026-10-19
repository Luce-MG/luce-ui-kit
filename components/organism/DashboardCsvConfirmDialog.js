"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardCsvConfirmDialog = void 0;
var react_1 = __importDefault(require("react"));
var BoxRow_1 = __importDefault(require("../atom/BoxRow"));
var Typography_1 = __importDefault(require("../base/Typography"));
var Button_1 = __importDefault(require("../button/Button"));
var Dialog_1 = __importDefault(require("./Dialog"));
// Confirms a CSV download before it is built, showing what the file holds:
// every matching record, not only the page on screen.
var DashboardCsvConfirmDialog = function (_a) {
    var reportTitle = _a.reportTitle, totalCount = _a.totalCount, filters = _a.filters, search = _a.search, _b = _a.downloading, downloading = _b === void 0 ? false : _b, onConfirm = _a.onConfirm, onClose = _a.onClose;
    return (react_1.default.createElement(Dialog_1.default, { open: true, maxWidth: "xs", fullWidth: true, onClose: onClose },
        react_1.default.createElement(BoxRow_1.default, { flexDirection: "column", gap: 2 },
            react_1.default.createElement(Typography_1.default, { variant: "h4", align: "center" }, "Download CSV"),
            react_1.default.createElement(Typography_1.default, null, "This downloads all " + totalCount.toLocaleString('en-SG') + " records of " + reportTitle + " that match the filters below, not only the page on screen."),
            react_1.default.createElement(BoxRow_1.default, { flexDirection: "column", gap: 0.5 },
                filters.map(function (filter) { return (react_1.default.createElement(Typography_1.default, { key: filter.label, bodyVariants: "xsMedium" },
                    react_1.default.createElement("b", null, filter.label + ": "),
                    filter.value)); }),
                !filters.length && (react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium" }, "No filters applied")),
                search && (react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium" },
                    react_1.default.createElement("b", null, "Search: "),
                    search))),
            react_1.default.createElement(BoxRow_1.default, { mt: 4, gap: 2 },
                react_1.default.createElement(Button_1.default, { fullWidth: true, variants: "ghost", disabled: downloading, onClick: onClose }, "Cancel"),
                react_1.default.createElement(Button_1.default, { fullWidth: true, variants: "primary", disabled: downloading, onClick: onConfirm }, downloading ? 'Downloading…' : 'Download')))));
};
exports.DashboardCsvConfirmDialog = DashboardCsvConfirmDialog;
exports.default = exports.DashboardCsvConfirmDialog;
//# sourceMappingURL=DashboardCsvConfirmDialog.js.map