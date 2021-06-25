const JSZip = require("jszip");
const url =
  "https://freesound.org/people/soundbytez/sounds/99226/download/99226__soundbytez__black-and-white-ruffed-lemur02.wav";

var folder = new JSZip();

var promise = new Promise(function (resolve, reject) {
  request(url, function (error, response, body) {
    if (error) {
      reject(error);
    } else {
      resolve(body);
    }
  });
});
folder.file("file.wav", promise);
