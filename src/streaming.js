// test script for streaming

// function processStream(stream, mediaSource) {
//       const mediaRecorder = new MediaRecorder(stream)
//       const videoBuffer = mediaSource.addSourceBuffer('video/webm;codecs=vp8');

//       mediaRecorder.ondataavailable = (data) => {
//             let fileReader = new FileReader();
//             let arrayBuffer;

//             fileReader.onloadend = () => {
//                   arrayBuffer = fileReader.result;
//                   videoBuffer.appendBuffer(arrayBuffer)
//             }
//             fileReader.readAsArrayBuffer(data.data);


//       }
//       mediaRecorder.start()

//       setInterval(() => {
//             mediaRecorder.requestData()
//       }, 1000)
// }
// if (permittedGetUserMedia()) {

// }
// function processVideo(file) {
//       const video = document.querySelector('video');
//       const mediaSource = new MediaSource();
//       video.src = URL.createObjectURL(mediaSource);

//       navigator.mediaDevices.getUserMedia({
//             video: true
//       }).then((stream) => processStream(stream, mediaSource));
// }

import cors from 'cors';
import express, { Request, Response } from 'express';

const app = express();
const port = 8000;

app.use(cors());

app.get('/video', (req, res) => {
      const path = 'src/static/pexels-zlatin-georgiev-15708449 (2160p).mp4';
      const stat = fs.statSync(path);
      const fileSize = stat.size;
      const range = req.headers.range;
      if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

            const chunksize = end - start + 1;
            const file = fs.createReadStream(path, { start, end });
            const head = {
                  'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                  'Accept-Ranges': 'bytes',
                  'Content-Length': chunksize,
                  'Content-Type': 'video/mp4',
            };

            res.writeHead(206, head);
            file.pipe(res);
      } else {
            const head = {
                  'Content-Length': fileSize,
                  'Content-Type': 'video/mp4',
            };

            res.writeHead(200, head);
            fs.createReadStream(path).pipe(res);
      }
});

app.listen(port, () => {
      console.log(`Server listening at ${process.env.SERVER_URL}:${port}`);
});