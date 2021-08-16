import FFMPEGMediaOptions from "./interfaces/FFMPEGMediaOptions";

export default class FFMPEGRequest {
  /** Options for input file */
  public inputOptions: FFMPEGMediaOptions;
  /** Options for output file */
  public outputOptions: FFMPEGMediaOptions;

  constructor(options: {
    input: FFMPEGMediaOptions;
    output: FFMPEGMediaOptions;
  }) {
    this.inputOptions = options.input;
    this.outputOptions = options.output;
  }

  private optionsToArray(options?: FFMPEGMediaOptions): string[] {
    if (options === undefined) return [];

    const arr = [] as string[];

    if (options.codec !== undefined) arr.push("-codec:a", options.codec);

    if (options.bitrate !== undefined) arr.push("-b:a", options.bitrate + "k");

    if (options.audioFrames !== undefined)
      arr.push("-aframes", options.audioFrames.toString());

    if (options.volume !== undefined)
      arr.push("-vol", options.volume.toString());

    if (options.audioQuality !== undefined)
      arr.push("-q:a", options.audioQuality.toString());

    return arr;
  }

  get command(): string[] {
    const params = [] as string[];

    params.push(...this.optionsToArray(this.inputOptions));
    params.push("-i", this.inputOptions.path);

    params.push(...this.optionsToArray(this.outputOptions));

    params.push(this.outputOptions.path);

    return params;
  }
}
