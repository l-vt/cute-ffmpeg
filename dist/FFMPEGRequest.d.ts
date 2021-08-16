import FFMPEGMediaOptions from "./interfaces/FFMPEGMediaOptions";
export default class FFMPEGRequest {
    /** Options for input file */
    inputOptions: FFMPEGMediaOptions;
    /** Options for output file */
    outputOptions: FFMPEGMediaOptions;
    constructor(options: {
        input: FFMPEGMediaOptions;
        output: FFMPEGMediaOptions;
    });
    private optionsToArray;
    get command(): string[];
}
