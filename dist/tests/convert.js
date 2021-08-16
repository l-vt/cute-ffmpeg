"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = __importDefault(require("../src"));
const FFMPEGRequest_1 = __importDefault(require("../src/FFMPEGRequest"));
const ffmpeg = new src_1.default({
    overwrite: true
});
ffmpeg.convert(new FFMPEGRequest_1.default({
    input: {
        path: "./tests/input.wav"
    },
    output: {
        path: "./tests/output2.googl",
        bitrate: 128
    }
})).then(console.log).catch(console.error);
//# sourceMappingURL=convert.js.map