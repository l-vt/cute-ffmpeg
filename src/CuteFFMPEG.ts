import child_process from "child_process";
import FFMPEGRequest from "./FFMPEGRequest";
import FFMPEGGlobalOptions from "./interfaces/FFMPEGGlobalOptions";

export default class CuteFFMPEG {
  private options: FFMPEGGlobalOptions = {
    overwrite: false,
    ffmpegPath: "ffmpeg",
  };

  constructor(options: FFMPEGGlobalOptions = {}) {
    this.options = Object.assign({}, this.options, options);
  }

  get globalOptionsArray(): string[] {
    const params = [] as string[];

    if (this.options.overwrite) params.push("-y");

    return params;
  }

  /**
   * Converts an input file into an output file
   * @param request Request data
   * @returns Filepath
   */
  public convert(request: FFMPEGRequest): Promise<string> {
    return new Promise((resolve, reject) => {
      const params = this.globalOptionsArray.concat(request.command);

      const ffmpeg = child_process.spawn(this.options.ffmpegPath, params);

      ffmpeg.on("exit", (code, signal) => {
        if (code === 0) {
          const path = request.outputOptions.path;
          resolve(path);
        } else {
          reject(new Error(`code ${code}; signal ${signal}`));
        }
      });

      ffmpeg.on("error", (code, signal) =>
        reject(new Error(`code ${code}; signal ${signal}`))
      );
    });
  }
}
