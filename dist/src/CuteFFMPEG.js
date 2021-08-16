"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = __importDefault(require("child_process"));
class CuteFFMPEG {
    constructor(options = {}) {
        this.options = {
            overwrite: false,
            ffmpegPath: "ffmpeg",
        };
        this.options = Object.assign({}, this.options, options);
    }
    get globalParams() {
        const params = [];
        if (this.options.overwrite)
            params.push("-y");
        return params;
    }
    /**
     * Converts an input file into an output file
     * @param request Request data
     * @returns
     */
    convert(request) {
        return new Promise((resolve, reject) => {
            const params = this.globalParams.concat(request.command);
            const ffmpeg = child_process_1.default.spawn(this.options.ffmpegPath, params);
            ffmpeg.on("exit", (code, signal) => {
                if (code === 0) {
                    resolve({ code, signal });
                }
                else {
                    reject(new Error(`code ${code}; signal ${signal}`));
                }
            });
            ffmpeg.on("error", (code, signal) => reject(new Error(`code ${code}; signal ${signal}`)));
        });
    }
}
exports.default = CuteFFMPEG;
//# sourceMappingURL=CuteFFMPEG.js.map