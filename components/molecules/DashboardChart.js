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
exports.DashboardChart = void 0;
var date_fns_1 = require("date-fns");
var react_1 = __importStar(require("react"));
var dashboard_1 = require("../../lib/dashboard");
var Box_1 = __importDefault(require("../base/Box"));
var Typography_1 = __importDefault(require("../base/Typography"));
var DashboardDownloadButton_1 = __importDefault(require("./DashboardDownloadButton"));
// Plotly is about 1 MB. It is loaded on the first chart that renders, so
// pages that never draw a chart (and the app bundle that imports this
// library) do not carry it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var plotly = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var loadPlotly = function () {
    plotly = plotly !== null && plotly !== void 0 ? plotly : Promise.resolve().then(function () { return __importStar(require('plotly.js-basic-dist-min')); }).then(function (module) { var _a; return (_a = module.default) !== null && _a !== void 0 ? _a : module; });
    return plotly;
};
var CHART_HEIGHT = 420;
// The first two match the Tooljet charts (orange, then blue).
var SERIES_COLORS = [
    '#E87B37',
    '#4F83EE',
    '#43A047',
    '#8E24AA',
    '#FDD835',
    '#00ACC1',
    '#6D4C41',
    '#D81B60'
];
var REFERENCE_LINE_COLOR = '#E53935';
var PROVISIONAL_LABEL = ' (provisional)';
var valueFormat = function (type) {
    return type === dashboard_1.DashboardColumnType.CURRENCY ? ',.2f' : ',.2~f';
};
// Monthly series carry the first of each month; showing the day would only
// add noise to the axis and the tooltip.
var isMonthly = function (series) {
    return series.length > 0 &&
        series.every(function (item) { return item.x.every(function (x) { return /^\d{4}-\d{2}-01/.test(x); }); });
};
function hoverTemplate(chart, columnsByKey, xFormat) {
    var _a, _b;
    var xColumn = columnsByKey[chart.x];
    var yColumn = columnsByKey[chart.y];
    var tooltipLines = chart.tooltipColumns.map(function (key, index) {
        var _a;
        var column = columnsByKey[key];
        return ((_a = column === null || column === void 0 ? void 0 : column.label) !== null && _a !== void 0 ? _a : key) + ": %{customdata[" + index + "]:" + valueFormat(column === null || column === void 0 ? void 0 : column.type) + "}";
    });
    return __spreadArrays([
        ((_a = xColumn === null || xColumn === void 0 ? void 0 : xColumn.label) !== null && _a !== void 0 ? _a : chart.x) + ": %{x" + xFormat + "}%{text}",
        ((_b = yColumn === null || yColumn === void 0 ? void 0 : yColumn.label) !== null && _b !== void 0 ? _b : chart.y) + ": %{y:" + valueFormat(yColumn === null || yColumn === void 0 ? void 0 : yColumn.type) + "}"
    ], tooltipLines).join('<br>');
}
// The Tooljet tooltip of a stacked chart: the x in bold, each series' value,
// the total, then each series' tooltip columns, in whole numbers. Every
// series of an x carries the same block.
function stackedHoverText(series, names, chart, columnsByKey, formatX) {
    var _a, _b;
    var yLabel = (_b = (_a = columnsByKey[chart.y]) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : chart.y;
    var xs = Array.from(new Set(series.flatMap(function (item) { return item.x; }))).sort();
    var valueAt = function (item, x) { var _a; return (_a = item.y[item.x.indexOf(x)]) !== null && _a !== void 0 ? _a : 0; };
    var tooltipAt = function (item, x, index) { var _a, _b, _c; return (_c = (_b = (_a = item.customdata) === null || _a === void 0 ? void 0 : _a[item.x.indexOf(x)]) === null || _b === void 0 ? void 0 : _b[index]) !== null && _c !== void 0 ? _c : 0; };
    var whole = function (value) {
        return Math.round(value).toLocaleString('en-SG');
    };
    return Object.fromEntries(xs.map(function (x) {
        var values = series.map(function (item) { return valueAt(item, x); });
        var total = values.reduce(function (sum, value) { return sum + value; }, 0);
        var tooltipLines = chart.tooltipColumns.flatMap(function (key, index) {
            return series.map(function (item, seriesIndex) {
                var _a, _b;
                return names[seriesIndex] + " " + ((_b = (_a = columnsByKey[key]) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : key) + ": " + whole(item.x.includes(x) ? tooltipAt(item, x, index) : 0);
            });
        });
        return [
            x,
            __spreadArrays([
                "<b>" + formatX(x) + "</b>"
            ], series.map(function (_item, seriesIndex) {
                return names[seriesIndex] + " " + yLabel + ": " + whole(values[seriesIndex]);
            }), [
                "Total " + yLabel + ": " + whole(total),
                ''
            ], tooltipLines).join('<br>')
        ];
    }));
}
// A line cannot change style part way, so a series with provisional points is
// drawn twice: solid over the settled points, and dotted from the last settled
// point through the provisional ones, with hollow markers on the latter.
function lineTraces(item, name, color, template) {
    var _a;
    var provisional = (_a = item.provisional) !== null && _a !== void 0 ? _a : item.x.map(function () { return false; });
    var text = provisional.map(function (flag) { return (flag ? PROVISIONAL_LABEL : ''); });
    var base = {
        type: 'scatter',
        mode: 'lines+markers',
        x: item.x,
        customdata: item.customdata,
        text: text,
        name: name,
        legendgroup: name,
        hovertemplate: template + "<extra>" + name + "</extra>"
    };
    var solid = __assign(__assign({}, base), { y: item.y.map(function (y, index) { return (provisional[index] ? null : y); }), line: { color: color, width: 2 }, marker: { color: color, size: 7 } });
    if (!provisional.some(Boolean))
        return [solid];
    var isBoundary = function (index) {
        return !provisional[index] && !!provisional[index + 1];
    };
    var dotted = __assign(__assign({}, base), { y: item.y.map(function (y, index) {
            return provisional[index] || isBoundary(index) ? y : null;
        }), showlegend: false, line: { color: color, width: 2, dash: 'dot' }, marker: {
            color: color,
            symbol: 'circle-open',
            size: provisional.map(function (flag) { return (flag ? 9 : 0); }),
            line: { color: color, width: 2 }
        } });
    return [solid, dotted];
}
function barTrace(item, name, color, template) {
    return {
        type: 'bar',
        x: item.x,
        y: item.y,
        customdata: item.customdata,
        text: item.x.map(function () { return ''; }),
        textposition: 'none',
        name: name,
        hovertemplate: template + "<extra>" + name + "</extra>",
        marker: { color: color }
    };
}
var DashboardChart = function (_a) {
    var chart = _a.chart, columns = _a.columns, series = _a.series, referenceLines = _a.referenceLines, onDownloadCsv = _a.onDownloadCsv, _b = _a.downloading, downloading = _b === void 0 ? false : _b, imageFileName = _a.imageFileName;
    var container = react_1.useRef(null);
    // Callers often pass new arrays on every render (e.g. a filtered series
    // list), so the chart redraws only when what it draws changes.
    var drawn = JSON.stringify([chart, columns, series, referenceLines]);
    react_1.useEffect(function () {
        var _a, _b, _c, _d;
        var element = container.current;
        if (!element)
            return;
        var columnsByKey = Object.fromEntries(columns.map(function (column) { return [column.key, column]; }));
        var isDateAxis = ((_a = columnsByKey[chart.x]) === null || _a === void 0 ? void 0 : _a.type) === dashboard_1.DashboardColumnType.DATE;
        var monthly = isDateAxis && isMonthly(series);
        var xFormat = isDateAxis ? (monthly ? '|%b %Y' : '|%d %b %Y') : '';
        var template = hoverTemplate(chart, columnsByKey, xFormat);
        var yColumn = columnsByKey[chart.y];
        var yLabel = (_b = yColumn === null || yColumn === void 0 ? void 0 : yColumn.label) !== null && _b !== void 0 ? _b : chart.y;
        // Split bars stack, as in Tooljet: each bar shows the x's total.
        var stacked = chart.type === dashboard_1.DashboardChartType.BAR && !!chart.splitBy;
        var names = series.map(function (item) { var _a; return (_a = item.name) !== null && _a !== void 0 ? _a : yLabel; });
        var formatX = function (x) {
            return monthly ? date_fns_1.format(date_fns_1.parseISO(x), 'MMM yyyy') : x;
        };
        var hoverText = stacked
            ? stackedHoverText(series, names, chart, columnsByKey, formatX)
            : {};
        var traces = series.flatMap(function (item, index) {
            var name = names[index];
            var color = SERIES_COLORS[index % SERIES_COLORS.length];
            if (chart.type !== dashboard_1.DashboardChartType.BAR) {
                return lineTraces(item, name, color, template);
            }
            var trace = barTrace(item, name, color, template);
            return stacked
                ? [
                    __assign(__assign({}, trace), { text: item.x.map(function (x) { return hoverText[x]; }), hovertemplate: '%{text}<extra></extra>' })
                ]
                : [trace];
        });
        var layout = {
            autosize: true,
            height: CHART_HEIGHT,
            margin: { t: 24, r: 24, b: 40, l: 72 },
            barmode: stacked ? 'stack' : 'group',
            bargap: 0.2,
            hovermode: stacked ? 'x unified' : 'closest',
            // Tooljet's stacked charts carry no legend; the tooltip names each part.
            showlegend: !stacked && series.length > 1,
            legend: { orientation: 'h', y: -0.18 },
            xaxis: {
                type: isDateAxis ? 'date' : 'category',
                tickformat: isDateAxis ? (monthly ? '%b %Y' : '%d %b %Y') : undefined,
                hoverformat: isDateAxis ? (monthly ? '%b %Y' : '%d %b %Y') : undefined
            },
            yaxis: {
                title: { text: (_d = (_c = chart.yTitle) !== null && _c !== void 0 ? _c : yColumn === null || yColumn === void 0 ? void 0 : yColumn.label) !== null && _d !== void 0 ? _d : chart.y },
                tickformat: ',~s',
                rangemode: 'tozero'
            },
            shapes: referenceLines.map(function (value) { return ({
                type: 'line',
                xref: 'paper',
                x0: 0,
                x1: 1,
                y0: value,
                y1: value,
                line: { color: REFERENCE_LINE_COLOR, width: 1, dash: 'dash' }
            }); }),
            annotations: referenceLines.map(function (value) {
                var _a;
                return ({
                    xref: 'paper',
                    x: 1,
                    y: value,
                    xanchor: 'right',
                    yanchor: 'bottom',
                    showarrow: false,
                    text: dashboard_1.formatDashboardCell(value, (_a = yColumn === null || yColumn === void 0 ? void 0 : yColumn.type) !== null && _a !== void 0 ? _a : dashboard_1.DashboardColumnType.NUMBER),
                    font: { color: REFERENCE_LINE_COLOR, size: 11 }
                });
            })
        };
        var cancelled = false;
        loadPlotly().then(function (Plotly) {
            if (cancelled)
                return;
            Plotly.react(element, traces, layout, {
                responsive: true,
                displayModeBar: false
            });
        });
        return function () {
            cancelled = true;
        };
    }, [drawn]);
    react_1.useEffect(function () {
        var element = container.current;
        return function () {
            if (element)
                loadPlotly().then(function (Plotly) { return Plotly.purge(element); });
        };
    }, []);
    // The image is the chart as drawn, so Plotly makes it in the browser.
    var downloadImage = function () {
        var element = container.current;
        if (!element)
            return;
        loadPlotly().then(function (Plotly) {
            return Plotly.downloadImage(element, {
                format: 'png',
                filename: imageFileName !== null && imageFileName !== void 0 ? imageFileName : chart.key,
                width: element.clientWidth,
                height: CHART_HEIGHT
            });
        });
    };
    var downloadOptions = __spreadArrays((onDownloadCsv ? [{ label: 'Download CSV', onClick: onDownloadCsv }] : []), [
        { label: 'Download PNG', onClick: downloadImage }
    ]);
    return (react_1.default.createElement(Box_1.default, null,
        react_1.default.createElement(Box_1.default, { display: "flex", justifyContent: "flex-end", mb: 1 },
            react_1.default.createElement(DashboardDownloadButton_1.default, { options: downloadOptions, disabled: series.length === 0, downloading: downloading })),
        series.length === 0 && (react_1.default.createElement(Box_1.default, { py: 6, textAlign: "center" },
            react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium" }, "No data for the selected filters"))),
        react_1.default.createElement("div", { ref: container, style: { width: '100%', display: series.length ? 'block' : 'none' } })));
};
exports.DashboardChart = DashboardChart;
exports.default = exports.DashboardChart;
//# sourceMappingURL=DashboardChart.js.map