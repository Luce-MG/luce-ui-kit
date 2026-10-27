"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDashboardNumericColumn = exports.formatDashboardCell = exports.formatDashboardEnum = exports.isDashboardEnumColumn = exports.formatDashboardDate = exports.formatDashboardNumber = void 0;
var date_fns_1 = require("date-fns");
var types_1 = require("./types");
var toNumber = function (value) {
    if (value === null || value === undefined || value === '')
        return null;
    var number = Number(value);
    return Number.isFinite(number) ? number : null;
};
var numberFormatter = new Intl.NumberFormat('en-SG', {
    maximumFractionDigits: 2
});
var currencyFormatter = new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
    currencyDisplay: 'narrowSymbol',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});
function formatDashboardNumber(value) {
    var number = toNumber(value);
    return number === null ? '' : numberFormatter.format(number);
}
exports.formatDashboardNumber = formatDashboardNumber;
function formatDashboardDate(value) {
    if (!value)
        return '';
    var date = date_fns_1.parseISO(String(value));
    return Number.isNaN(date.getTime())
        ? String(value)
        : date_fns_1.format(date, 'dd MMM yyyy');
}
exports.formatDashboardDate = formatDashboardDate;
var ENUM_VALUE = /^[A-Z][A-Z0-9_]*$/;
// A text column whose values are all enum constants (OFFICE_CLEANING,
// AIRCON) is shown in words. Decided per column, so one column never mixes
// "Office Cleaning" with "AIRCON"; names and other text are left as they are.
function isDashboardEnumColumn(rows, key) {
    var values = rows
        .map(function (row) { return row[key]; })
        .filter(function (value) { return value !== null && value !== undefined && value !== ''; });
    return (values.length > 0 && values.every(function (value) { return ENUM_VALUE.test(String(value)); }));
}
exports.isDashboardEnumColumn = isDashboardEnumColumn;
function formatDashboardEnum(value) {
    if (value === null || value === undefined)
        return '';
    return String(value)
        .split('_')
        .map(function (word) { return word.charAt(0) + word.slice(1).toLowerCase(); })
        .join(' ');
}
exports.formatDashboardEnum = formatDashboardEnum;
// Formats a cell by the type its column declares. An identifier is printed
// as is, so an id reads 492103 rather than 492,103.
function formatDashboardCell(value, type) {
    if (value === null || value === undefined)
        return '';
    switch (type) {
        case types_1.DashboardColumnType.CURRENCY: {
            var number = toNumber(value);
            return number === null ? '' : currencyFormatter.format(number);
        }
        case types_1.DashboardColumnType.NUMBER:
            return formatDashboardNumber(value);
        // A rate the backend already multiplied by 100 (retention 37.5 reads 37.5%).
        case types_1.DashboardColumnType.PERCENT: {
            var number = toNumber(value);
            return number === null ? '' : numberFormatter.format(number) + "%";
        }
        case types_1.DashboardColumnType.DATE:
            return formatDashboardDate(value);
        default:
            return String(value);
    }
}
exports.formatDashboardCell = formatDashboardCell;
function isDashboardNumericColumn(type) {
    return (type === types_1.DashboardColumnType.NUMBER ||
        type === types_1.DashboardColumnType.CURRENCY ||
        type === types_1.DashboardColumnType.PERCENT);
}
exports.isDashboardNumericColumn = isDashboardNumericColumn;
//# sourceMappingURL=format.js.map