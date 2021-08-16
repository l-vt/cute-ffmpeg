const CuteFFMPEG = require("../dist").default;
const FFMPEGRequest = require("../dist").FFMPEGRequest;

const ffmpeg = new CuteFFMPEG({
  overwrite: true
});

const dir = name => "./tests/output/" + name;

(async () => {
  const req = new FFMPEGRequest({
    input: {
      path: "./tests/input.wav"
    },
    output: {
      path: dir("output_320k.mp3"),
      bitrate: 320
    }
  });

  await ffmpeg.convert(req);

  req.outputOptions = {
    path: dir("output_8k.mp3"),
    bitrate: 8
  };

  await ffmpeg.convert(req);
  
  req.outputOptions = {
    path: dir("output_16k.mp3"),
    bitrate: 16
  };

  await ffmpeg.convert(req);
})();