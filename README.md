# cute-FFMPEG
*cute-FFMPEG* is an easy-to-use wrapper for FFMPEG, with a primary focus on audio conversion.
## Disclaimer
This module is still lacking a lot of different custom features, and therefore **not production ready**.

# Usage
## Example
```Javascript
// CommonJS
const CuteFFMPEG = require("cute-ffmpeg").default;
const FFMPEGRequest = require("cute-ffmpeg").FFMPEGRequest;
// ES6
import CuteFFMPEG, { FFMPEGRequest } from "cute-ffmpeg";

const ffmpeg = new CuteFFMPEG({
  overwrite: true
});

const request = new FFMPEGRequest({
  input: {
    path: "input.wav"
  },
  output: {
    path: "output_320k.mp3",
    bitrate: 320,
  }
});

ffmpeg.convert(request)
.then(filePath => {
  // Done
})
.catch(error => {
  // Something went wrong
})
;
```

## Options
### FFMPEGGlobalOptions
| Property   | Type    | Description                                        | FFMPEG       |
|------------|---------|----------------------------------------------------|--------------|
| overwrite  | boolean | Overwrite output file                              | -y |   |
| ffmpegPath | string  | Define path to ffmpeg (default uses PATH variable) |              |

### FFMPEGGlobalOptions
| Property     | Type             | Description                               | FFMPEG   |
|--------------|------------------|-------------------------------------------|----------|
| path         | string           | Path to file                              |          |
| codec        | string           | Force audio codec ([Full list](https://www.ffmpeg.org/ffmpeg-codecs.html#Audio-Encoders)) | -c:a    |
| bitrate      | number           | Bitrate for audio; adds "k" automatically | -b:a     |
| volume       | number           | Volume (default is 256)                   | -vol     |
| audioQuality | string \| number | Codec-specific audio quality setting      | -q:a     |
| audioFrames  | number           | Audio Frames                              | -aframes |
