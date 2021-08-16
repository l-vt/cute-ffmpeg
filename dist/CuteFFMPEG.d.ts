import FFMPEGRequest from "./FFMPEGRequest";
import FFMPEGGlobalOptions from "./interfaces/FFMPEGGlobalOptions";
export default class CuteFFMPEG {
    private options;
    constructor(options?: FFMPEGGlobalOptions);
    get globalOptionsArray(): string[];
    /**
     * Converts an input file into an output file
     * @param request Request data
     * @returns Filepath
     */
    convert(request: FFMPEGRequest): Promise<string>;
}
