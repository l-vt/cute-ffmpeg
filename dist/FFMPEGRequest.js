"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FFMPEGRequest {
    constructor(options) {
        this.inputOptions = options.input;
        this.outputOptions = options.output;
    }
    optionsToArray(options) {
        if (options === undefined)
            return [];
        const arr = [];
        if (options.codec !== undefined)
            arr.push("-codec:a", options.codec);
        if (options.bitrate !== undefined)
            arr.push("-b:a", options.bitrate + "k");
        if (options.audioFrames !== undefined)
            arr.push("-aframes", options.audioFrames.toString());
        if (options.volume !== undefined)
            arr.push("-vol", options.volume.toString());
        if (options.audioQuality !== undefined)
            arr.push("-q:a", options.audioQuality.toString());
        return arr;
    }
    get command() {
        const params = [];
        params.push(...this.optionsToArray(this.inputOptions));
        params.push("-i", this.inputOptions.path);
        params.push(...this.optionsToArray(this.outputOptions));
        params.push(this.outputOptions.path);
        return params;
    }
}
exports.default = FFMPEGRequest;
//# sourceMappingURL=FFMPEGRequest.js.map