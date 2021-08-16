export default interface FFMPEGGlobalOptions {
  /** Overwrite output files */
  overwrite?: boolean;
  /** Define custom path for ffmpeg if not in PATH */
  ffmpegPath?: string;
}
