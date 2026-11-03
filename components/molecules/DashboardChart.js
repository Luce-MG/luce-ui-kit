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
var DAY_MS = 24 * 60 * 60 * 1000;
// The first two match the Tooljet charts (orange, then blue).
var SERIES_COLORS = [
    '#E87B37',
    '#4F83EE',
    '#43A047',
    '#8E24AA',
    '#FDD835',
    '#00ACC1',
    '#6D4C41',
    '#D81B60',
    // A second set, as distinct from the first as from each other, for charts
    // with one line per department (up to 15 on the CER page).
    '#3949AB',
    '#B71C1C',
    '#9E9D24',
    '#00695C',
    '#F48FB1',
    '#607D8B',
    '#FFB300',
    '#CE93D8'
];
var REFERENCE_LINE_COLOR = '#E53935';
var PROVISIONAL_LABEL = ' (provisional)';
var valueFormat = function (type) {
    return type === dashboard_1.DashboardColumnType.CURRENCY ? ',.2f' : ',.2~f';
};
// A percent column's values are already multiplied by 100 by the backend.
var valueSuffix = function (type) {
    return type === dashboard_1.DashboardColumnType.PERCENT ? '%' : '';
};
// Monthly series carry the first of each month; showing the day would only
// add noise to the axis and the tooltip.
var isMonthly = function (series) {
    return series.length > 0 &&
        series.every(function (item) { return item.x.every(function (x) { return /^\d{4}-\d{2}-01/.test(x); }); });
};
// Tooljet's tooltip of a one-series chart without tooltip columns: Plotly's
// plain "(x, y)", e.g. "(Nov 18, 2026, 275)".
function plainHoverTemplate(chart, columnsByKey, isDateAxis, monthly) {
    var _a;
    var xFormat = isDateAxis ? (monthly ? '|%b %Y' : '|%b %d, %Y') : '';
    var yType = (_a = columnsByKey[chart.y]) === null || _a === void 0 ? void 0 : _a.type;
    var yFormat = valueFormat(yType) + "}" + valueSuffix(yType);
    return "(%{x" + xFormat + "}, %{y:" + yFormat + ")%{text}";
}
function hoverTemplate(chart, columnsByKey, xFormat) {
    var _a, _b;
    var xColumn = columnsByKey[chart.x];
    var yColumn = columnsByKey[chart.y];
    var tooltipLines = chart.tooltipColumns.map(function (key, index) {
        var _a;
        var column = columnsByKey[key];
        return ((_a = column === null || column === void 0 ? void 0 : column.label) !== null && _a !== void 0 ? _a : key) + ": %{customdata[" + index + "]:" + valueFormat(column === null || column === void 0 ? void 0 : column.type) + "}" + valueSuffix(column === null || column === void 0 ? void 0 : column.type);
    });
    return __spreadArrays([
        ((_a = xColumn === null || xColumn === void 0 ? void 0 : xColumn.label) !== null && _a !== void 0 ? _a : chart.x) + ": %{x" + xFormat + "}%{text}",
        ((_b = yColumn === null || yColumn === void 0 ? void 0 : yColumn.label) !== null && _b !== void 0 ? _b : chart.y) + ": %{y:" + valueFormat(yColumn === null || yColumn === void 0 ? void 0 : yColumn.type) + "}" + valueSuffix(yColumn === null || yColumn === void 0 ? void 0 : yColumn.type)
    ], tooltipLines).join('<br>');
}
// The tooltip of a stacked chart, once per x under the x the hover label
// already heads it with: the total, each part only when more than one part
// has a value at that x, then each series' tooltip columns, in whole numbers.
function stackedHoverText(series, names, colors, chart, columnsByKey) {
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
        var parts = values
            .map(function (value, seriesIndex) { return ({
            value: value,
            name: names[seriesIndex],
            color: colors[seriesIndex]
        }); })
            .filter(function (_a) {
            var value = _a.value;
            return value !== 0;
        });
        var partLines = parts.length > 1
            ? parts.map(function (_a) {
                var name = _a.name, value = _a.value, color = _a.color;
                return "<span style=\"color:" + color + "\">&#9632;</span> " + name + ": " + whole(value);
            })
            : [];
        return [
            x,
            __spreadArrays([
                "Total " + yLabel + ": " + whole(total)
            ], partLines, (tooltipLines.length > 0 ? __spreadArrays([''], tooltipLines) : [])).join('<br>')
        ];
    }));
}
// One tooltip per x for overlaid bars, as in the mockup: the x in bold, the
// back series, what is left of it once the front is taken out, then the
// front series in its color with its share of the back. Every series of an x
// carries the same block.
function overlayHoverText(series, names, colors, chart, columnsByKey, formatX) {
    var _a, _b, _c;
    var back = series[0], front = series[1];
    var type = (_b = (_a = columnsByKey[chart.y]) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : dashboard_1.DashboardColumnType.NUMBER;
    var cell = function (value) { return dashboard_1.formatDashboardCell(value, type); };
    return Object.fromEntries(((_c = back === null || back === void 0 ? void 0 : back.x) !== null && _c !== void 0 ? _c : []).map(function (x, index) {
        var _a, _b;
        var total = (_a = back.y[index]) !== null && _a !== void 0 ? _a : 0;
        var part = (_b = front === null || front === void 0 ? void 0 : front.y[index]) !== null && _b !== void 0 ? _b : 0;
        var share = total ? ((100 * part) / total).toFixed(1) : '0.0';
        return [
            x,
            [
                "<b>" + formatX(x) + "</b>",
                names[0] + ": " + cell(total),
                "Not " + names[1].toLowerCase() + ": " + cell(total - part),
                "<span style=\"color:" + colors[1] + "\">" + names[1] + ": " + cell(part) + " (" + share + "%)</span>"
            ].join('<br>')
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
        hovertemplate: template + "<extra></extra>"
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
        hovertemplate: template + "<extra></extra>",
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
        var template = series.length <= 1 && chart.tooltipColumns.length === 0
            ? plainHoverTemplate(chart, columnsByKey, isDateAxis, monthly)
            : hoverTemplate(chart, columnsByKey, xFormat);
        var yColumn = columnsByKey[chart.y];
        var yLabel = (_b = yColumn === null || yColumn === void 0 ? void 0 : yColumn.label) !== null && _b !== void 0 ? _b : chart.y;
        var maxValue = Math.max.apply(Math, __spreadArrays([0], series.flatMap(function (item) { return item.y.map(function (y) { return Math.abs(y !== null && y !== void 0 ? y : 0); }); })));
        var months = new Set(series.flatMap(function (item) { return item.x; })).size;
        var monthTick = months <= 12 ? 'M1' : months <= 24 ? 'M2' : 'M3';
        // Split bars stack, as in Tooljet: each bar shows the x's total.
        var stacked = chart.type === dashboard_1.DashboardChartType.BAR && !!chart.splitBy;
        // Overlaid bars share one bar per x, the overlay drawn in front.
        var overlay = chart.type === dashboard_1.DashboardChartType.BAR && !!chart.overlay;
        // On a daily axis Plotly sizes bars by the gap between points, so a few
        // days spread over a month become bars weeks wide. Pin one bar to its
        // day. Grouped series keep Plotly's width to sit side by side.
        var barWidth = isDateAxis && !monthly && (stacked || overlay || series.length === 1)
            ? 0.8 * DAY_MS
            : undefined;
        // A stacked part that is 0 at every x (e.g. Hardware on a tab without
        // hardware) is left out of the bars and the tooltip. Each part keeps its
        // colour, whichever parts are shown.
        var shown = series
            .map(function (item, index) { return ({ item: item, index: index }); })
            .filter(function (_a) {
            var item = _a.item;
            return !stacked || item.y.some(function (y) { return (y !== null && y !== void 0 ? y : 0) !== 0; });
        });
        var drawnSeries = shown.length > 0 ? shown : [{ item: series[0], index: 0 }];
        var names = drawnSeries.map(function (_a) {
            var _b;
            var item = _a.item;
            return (_b = item === null || item === void 0 ? void 0 : item.name) !== null && _b !== void 0 ? _b : yLabel;
        });
        var colors = drawnSeries.map(function (_a) {
            var _b, _c;
            var index = _a.index;
            return (_c = (_b = chart.colors) === null || _b === void 0 ? void 0 : _b[index]) !== null && _c !== void 0 ? _c : SERIES_COLORS[index % SERIES_COLORS.length];
        });
        var formatX = function (x) {
            return isDateAxis
                ? date_fns_1.format(date_fns_1.parseISO(x), monthly ? 'MMM yyyy' : 'EEE, dd MMM yyyy')
                : x;
        };
        var hoverText = stacked
            ? stackedHoverText(drawnSeries.map(function (_a) {
                var item = _a.item;
                return item;
            }), names, colors, chart, columnsByKey)
            : overlay
                ? overlayHoverText(series, names, colors, chart, columnsByKey, formatX)
                : {};
        var bars = drawnSeries.flatMap(function (_a, index) {
            var item = _a.item;
            if (!item)
                return [];
            var name = names[index];
            var color = colors[index];
            // The tooltip has no side label; with several series it names the
            // series on its first line.
            var seriesTemplate = series.length > 1 ? "<b>" + name + "</b><br>" + template : template;
            if (chart.type !== dashboard_1.DashboardChartType.BAR) {
                return lineTraces(item, name, color, seriesTemplate);
            }
            var trace = __assign(__assign({}, barTrace(item, name, color, seriesTemplate)), { width: barWidth });
            if (overlay) {
                return [
                    __assign(__assign({}, trace), { text: item.x.map(function (x) { return hoverText[x]; }), hovertemplate: '%{text}<extra></extra>' })
                ];
            }
            // A bar's own hovertemplate would win over hoverinfo 'skip'.
            return stacked
                ? [__assign(__assign({}, trace), { hovertemplate: undefined, hoverinfo: 'skip' })]
                : [trace];
        });
        // A stacked chart's tooltip comes from one invisible trace, so the hover
        // label carries the block once rather than once per part.
        var xs = Object.keys(hoverText).sort();
        var hoverTrace = {
            // A zero-height bar: a scatter would pad the axis around its markers.
            type: 'bar',
            x: xs,
            y: xs.map(function () { return 0; }),
            width: barWidth,
            text: xs.map(function (x) { return hoverText[x]; }),
            textposition: 'none',
            hovertemplate: '%{text}<extra></extra>',
            // Transparent rather than opacity 0, so the hover label shows no swatch.
            marker: { color: 'rgba(0, 0, 0, 0)' },
            showlegend: false
        };
        var traces = stacked ? __spreadArrays(bars, [hoverTrace]) : bars;
        var layout = {
            autosize: true,
            height: CHART_HEIGHT,
            margin: { t: 24, r: 24, b: 40, l: 72 },
            barmode: stacked ? 'stack' : overlay ? 'overlay' : 'group',
            bargap: 0.2,
            // A stacked chart's one tooltip block is headed by the x of a unified
            // hover; every other chart shows the tooltip of the bar under the cursor.
            hovermode: stacked ? 'x unified' : 'closest',
            // A light card with dark text, not a box in the series' color.
            hoverlabel: overlay
                ? {
                    bgcolor: '#FFFFFF',
                    bordercolor: '#DDE3DF',
                    font: { color: '#17201C', size: 13 },
                    align: 'left'
                }
                : undefined,
            // As Tooljet's Revenue chart: a legend whenever more than one series is drawn.
            showlegend: drawnSeries.length > 1,
            legend: { orientation: 'h', y: -0.18 },
            xaxis: {
                type: isDateAxis ? 'date' : 'category',
                tickformat: isDateAxis ? (monthly ? '%b %Y' : '%d %b %Y') : undefined,
                // Whole months: Plotly's own spacing can put two ticks in one month.
                dtick: monthly ? monthTick : undefined,
                hoverformat: isDateAxis ? (monthly ? '%b %Y' : '%d %b %Y') : undefined
            },
            yaxis: {
                title: { text: (_d = (_c = chart.yTitle) !== null && _c !== void 0 ? _c : yColumn === null || yColumn === void 0 ? void 0 : yColumn.label) !== null && _d !== void 0 ? _d : chart.y },
                // SI prefixes shorten thousands (6k) but turn 0.8 into "800m".
                tickformat: maxValue >= 1000 ? ',~s' : ',~f',
                ticksuffix: valueSuffix(yColumn === null || yColumn === void 0 ? void 0 : yColumn.type) || undefined,
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
    var downloadOptions = __spreadArrays((onDownloadCsv
        ? [{ label: 'Download CSV', onClick: onDownloadCsv }]
        : []), [
        { label: 'Download PNG', onClick: downloadImage }
    ]);
    return (react_1.default.createElement(Box_1.default, null,
        react_1.default.createElement(Box_1.default, { display: "flex", alignItems: "flex-start", mb: 1 },
            react_1.default.createElement(Box_1.default, { flex: 1 }, chart.description && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Typography_1.default, { bodyVariants: "smBold" }, chart.title),
                react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium", color: "textSecondary" }, chart.description)))),
            react_1.default.createElement(DashboardDownloadButton_1.default, { options: downloadOptions, disabled: series.length === 0, downloading: downloading })),
        series.length === 0 && (react_1.default.createElement(Box_1.default, { py: 6, textAlign: "center" },
            react_1.default.createElement(Typography_1.default, { bodyVariants: "xsMedium" }, "No data for the selected filters"))),
        react_1.default.createElement("div", { ref: container, style: { width: '100%', display: series.length ? 'block' : 'none' } })));
};
exports.DashboardChart = DashboardChart;
exports.default = exports.DashboardChart;
//# sourceMappingURL=DashboardChart.js.map