export default interface FFMPEGMediaOptions {
  /** File path */
  path: string;
  /** Audio bitrate */
  bitrate?: number;
  /** Force audio codec */
  codec?:
    | "libmp3lame"
    | "libvorbis"
    | "copy"
    | "flac"
    | "aac"
    | "ac3"
    | "ac3_fixed"
    | "opus"
    | "libfdk_aac"
    | "libopencore-amrnb"
    | "libopus"
    | "libshine"
    | "libtwolame"
    | "libvo-amrwbenc"
    | "mjpeg"
    | "wavpack";
  /** The number of audio frames to output */
  audioFrames?: number;
  /** Audio quality (codec specific) */
  audioQuality?: string | number;
  /** Audio volume (256=normal) */
  volume?: number;
}
