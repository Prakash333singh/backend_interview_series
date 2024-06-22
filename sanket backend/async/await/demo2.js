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

async function processing() {
  let downloadedData = await fetchData("www.google.com");
  console.log("Downloading await completed");
  let file = await writeFile(downloadedData);
  console.log("writing await complted");
  let uploadResponse = await uploadData(file, "www.drive.google.com");
  console.log("uploading await complted");
  console.log("complted process with response:", uploadResponse);

  return true;
}

console.log("start");
processing();
console.log("end");
