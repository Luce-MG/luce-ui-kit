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
function SvgMassageIcon(props) {
    return (React.createElement("svg", __assign({ width: "1em", height: "1em", viewBox: "0 0 84 84", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M27.982 43.054c.008-4.533.01-8.869.003-13.006-.003-2.646 2.443-4.395 4.855-4.627.589-.057 1.44.038 2.551.285.88.197 1.804.383 2.773.558.827.148 1.355-.677 1.567-1.337a.132.132 0 00-.01-.104.134.134 0 00-.08-.065c-.84-.241-1.717-.38-2.513-.768-2.829-1.381-4.774-4.006-5.418-7.087-.17-.81-.247-1.94-.23-3.386.017-1.773.018-3.537.003-5.293-.016-1.622 2.373-1.665 2.353.087-.027 2.269-.024 4.534.009 6.794.011.747.154 1.517.43 2.311a.11.11 0 00.11.079c2.596.012 5.27.01 8.023-.005 1.368-.008 2.496.068 3.382.229 1.804.325 3.477.932 5.02 1.822.072.04.132.028.18-.038.974-1.323 1.495-3.015 1.505-4.618.016-2.292.019-4.529.007-6.71-.008-1.56 2.362-1.594 2.34.098-.023 1.695-.022 3.495.002 5.402.017 1.373-.07 2.492-.26 3.357-.66 3.02-2.583 5.567-5.362 6.946-.788.392-1.69.55-2.535.788-.084.023-.113.077-.087.16.188.596.735 1.476 1.456 1.353a62.799 62.799 0 002.928-.581c1.034-.232 1.853-.322 2.456-.272 2.486.203 4.906 1.981 4.899 4.689-.011 4.36-.01 8.668.002 12.923a.078.078 0 00.03.06.072.072 0 00.064.012c.282-.08.425-.297.482-.57l2.897-13.815a2.81 2.81 0 00.04-.903l-1.026-8.905a24.3 24.3 0 01-.168-2.959c.018-2.57.02-5.137.005-7.7-.005-.75.55-1.357 1.323-1.244.67.096 1.007.544 1.012 1.343.013 2.409.01 4.859-.01 7.35a24.018 24.018 0 00.16 2.991c.37 3.153.734 6.325 1.09 9.514.014.136.007.27-.021.405-1.013 4.834-2.017 9.628-3.01 14.384-.295 1.417-1.218 2.244-2.77 2.48-.054.009-.082.041-.085.097-.173 4.235-1.894 7.498-5.163 9.79-1.004.704-2.366 1.367-4.087 1.989-.067.024-.1.071-.1.142l.001 2.147c0 .067.033.11.097.126 2.3.592 4.622 1.169 6.966 1.732 1.45.348 2.5.683 3.148 1.003 1.814.893 3.162 2.266 4.045 4.118.345.721.637 1.739.879 3.052.326 1.769.697 3.62 1.114 5.556.09.412.09.747.004 1.003-.156.455-.614.764-1.1.764-13.92-.002-27.911-.003-41.974-.002-.931 0-1.293-.808-1.124-1.617.444-2.14.856-4.211 1.236-6.215.182-.961.43-1.781.743-2.46 1.188-2.57 3.242-4.213 6.16-4.929 2.743-.672 5.422-1.338 8.037-1.996.068-.018.102-.063.102-.134l-.002-2.263c0-.08-.037-.135-.112-.162-1.901-.677-3.894-1.655-5.383-3.043-2.46-2.293-3.741-5.154-3.844-8.58-.002-.08-.043-.123-.123-.13-1.01-.089-1.794-.558-2.351-1.409-.195-.297-.398-.957-.609-1.979-.954-4.625-1.886-9.096-2.798-13.413a1.551 1.551 0 01-.024-.502c.36-3.243.715-6.332 1.063-9.268.122-1.019.18-2 .176-2.941-.011-2.737-.013-5.327-.006-7.77.003-1.584 2.336-1.577 2.333.02-.006 2.568-.005 5.222.003 7.962a23.85 23.85 0 01-.17 2.818c-.339 2.915-.675 5.815-1.008 8.7-.044.39-.03.759.043 1.106.938 4.46 1.9 9.053 2.885 13.782a.741.741 0 00.467.55.077.077 0 00.104-.071zm13.802-16.951c-.535 1.206-1.5 2.232-2.819 2.473-.45.082-1.082.038-1.895-.133a781.69 781.69 0 00-2.884-.6c-1.003-.209-1.79-.106-2.654.393-.546.313-.93.754-1.152 1.321a.2.2 0 00.089.25c4.528 2.584 10.327 2.196 14.287-1.215.644-.556 1.36-.441 1.867.206.813 1.044 1.886 1.793 3.218 2.246 2.011.684 4.03.583 6.057-.302a.15.15 0 00.094-.125c.063-.501.022-.918-.123-1.25-.487-1.114-2.109-1.808-3.266-1.596a105.99 105.99 0 00-3.403.682c-1.167.253-2.217.267-3.166-.446-1.324-.993-2.449-3.114-1.328-4.64.299-.408.678-.671 1.137-.792l1.706-.453c.566-.152 1.085-.463 1.564-.791a.04.04 0 00.018-.035.036.036 0 00-.021-.032c-1.988-1.015-4.034-1.45-6.33-1.446-2.434.002-4.794.002-7.08 0-.096 0-.113.037-.05.11.828.989 2 1.907 3.252 2.226.773.197 1.738.342 2.32.802.969.768 1.042 2.063.562 3.147zm3.584 4.982c-3.709 2.735-8.6 3.371-12.896 2.116a19.726 19.726 0 01-2.044-.75c-.064-.027-.095-.006-.094.063.008 3.892.005 7.992-.009 12.302-.003 1.102.08 2.02.25 2.755.665 2.862 2.38 5.017 5.146 6.465 4.125 2.158 8.343 2.522 12.653 1.092 3.861-1.282 6.796-3.853 7.487-7.969.117-.706.17-1.825.159-3.357-.025-3.373-.027-6.86-.006-10.462a.099.099 0 00-.042-.082.102.102 0 00-.093-.014c-3.698 1.263-7.558.422-10.349-2.15-.052-.047-.106-.05-.162-.009zM42.715 62.99c.687.051 1.264-.003 1.73-.162 1.489-.511 2.258-1.804 2.225-3.35-.01-.46-.01-.93 0-1.409a.064.064 0 00-.022-.05.062.062 0 00-.053-.013 17.37 17.37 0 01-6.814-.075c-.066-.014-.101.013-.105.08-.056 1.068-.03 1.878.079 2.43.282 1.428 1.499 2.441 2.96 2.549zm1.327 2.3c-2.658.324-4.967-.755-6.174-3.172-.029-.057-.074-.077-.137-.061-2.538.648-5.078 1.28-7.618 1.897-1.039.253-1.83.538-2.372.856a6.34 6.34 0 00-2.429 2.535c-.309.581-.563 1.4-.762 2.455a282.62 282.62 0 01-.952 4.808.05.05 0 00.048.06h39.04a.058.058 0 00.045-.023.061.061 0 00.013-.05c-.272-1.231-.542-2.584-.812-4.06-.277-1.51-.58-2.576-.91-3.197-.984-1.854-2.544-2.834-4.626-3.34a758.33 758.33 0 01-7.782-1.94c-.058-.014-.102.005-.13.057-.994 1.877-2.474 2.935-4.442 3.176zM77 19.242a4.08 4.08 0 11-8.16 0 4.08 4.08 0 018.16 0zm-2.337 0a1.744 1.744 0 10-3.488 0 1.744 1.744 0 003.489 0zM9.325 31.492a1.162 1.162 0 11-2.325 0 1.162 1.162 0 012.325 0z", fill: "#1A4D6A" }),
        React.createElement("path", { d: "M36.605 37.577c.419-.18.596-.593 1.036-.726 1.229-.376 2.029 1.07 1.13 2-1.42 1.463-3.453 1.555-5.048.302-.723-.57-1.017-1.523-.166-2.131a1.143 1.143 0 011.46.131c.45.458.95.701 1.588.424zM49.11 37.247c.575.61 1.408.581 1.986-.036 1.143-1.22 2.84.426 1.705 1.609-1.465 1.526-3.69 1.629-5.237.178-1.391-1.306.373-2.995 1.545-1.75zM45.764 46.732c-1.415 1.47-3.468 1.542-5.052.285-.71-.564-1.005-1.488-.152-2.117.33-.245.707-.278 1.13-.1.285.12.437.382.687.544a1.3 1.3 0 001.716-.248c1.048-1.239 2.897.366 1.671 1.636zM72.332 46.662a1.163 1.163 0 11-2.325 0 1.163 1.163 0 012.325 0zM13.639 54.313a4.936 4.936 0 00-2.294-.583c-2.06-.03-2.046-2.737-.036-2.764 2.651-.038 4.642-1.935 5.222-4.41.135-.574-.014-1.256.31-1.755.76-1.17 2.493-.682 2.529.741.073 3.038 2.382 5.36 5.44 5.432.875.021 1.478.718 1.366 1.585-.077.593-.626 1.12-1.224 1.137-3.19.092-5.458 2.288-5.593 5.493-.075 1.785-2.635 1.797-2.716.033-.102-2.252-1.104-3.888-3.004-4.91zm6.599-2.022a8.082 8.082 0 01-2.188-2.195.06.06 0 00-.078-.02.064.064 0 00-.023.02 8.233 8.233 0 01-2.188 2.196.066.066 0 000 .11 8.173 8.173 0 012.193 2.196.056.056 0 00.046.024.055.055 0 00.045-.024 8.024 8.024 0 012.193-2.194.068.068 0 000-.113z", fill: "#1A4D6A" })));
}
exports.default = SvgMassageIcon;
//# sourceMappingURL=MassageIcon.js.map