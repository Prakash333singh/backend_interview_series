function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log("going to start the download");
    setTimeout(function process() {
      let data = "dummy download data";
      console.log("download completed");
      resolve(data);
    }, 10000);
    console.log("timer to mimic download started");
  });
}

function writeFile(data) {
  return new Promise(function (resolve, reject) {
    console.log("stared writing ", data, "in a file ");
    setTimeout(function processWriting() {
      let filename = "result.txt";
      console.log("file written successfully");
      resolve(filename);
    }, 3000);
  });
}

// console.log("starting the progess");
// console.log("we are expecting to mimic a download");
// x = fetchData("www.google.com");
// console.log(
//   "new promise object creted sucessfully,but downloading still going on"
// );

function uploadData(file, url) {
  return new Promise(function (resolve, reject) {
    console.log("upload started on url", url, "filename is", file);
    setTimeout(function processUpload() {
      let result = "Succcess";
      console.log("uploading done");
      resolve(result);
    }, 5000);
  });
}

// let data = fetchData("www.datadrive.com");
// let filename = writeFile(data);
// let response = uploadData(filename, "www.drive.google.com");

let downloadPromise = fetchData("www.datadrive.com");
downloadPromise
  .then(function processDownload(value) {
    console.log("download promise fulfilled");
    console.log(value);
    return value;
  })
  .then(function processWrite(value) {
    console.log("when");
    return writeFile(value);
  })
  .then(function processUpload(value) {
    return uploadData(value, "www.drive.google.com");
  });
