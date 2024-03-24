//taks

//1.write a function to download data from a url
//2.write a function to save that download data in a file and return
//the filename
//3.write the fn to upload the file written in previous step to
// a newurl

function fetchCustom(url, fn) {
  //we are mimicing the function
  //   download the content of the url
  // this download will take some time
  // we will download the content from url and then whatever is the result
  // we will pass to the callback

  console.log("starting downloading from", url);

  setTimeout(function process() {
    console.log("download completed");
    let response = "dummy data";
    fn(response);
    console.log("Ending the function");
  }, 3000);
}

// const response = fetchCustom("www.google.com", function callback(response) {
//   console.log("download content is", response);
//   console.log("end of file");
// });

function writeFile(data, fn) {
  //this function writes data in a new file

  console.log("started writing data", data);
  setTimeout(function process() {
    console.log("writing completed");
    let filename = "output.text";
    fn(filename);
    console.log("writing ended");
  }, 4000);
}

// function uploadFile(filename, newUrl, fn) {
//   console.log("Upload started");
//   setTimeout(function process() {
//     console.log("File", filename, "uploaded sucessfully on", newUrl);
//     let uploadResponse = "SUCCESS";
//     fn(uploadResponse);
//     console.log("uploading ended");
//   }, 2000);
// }

// fetchCustom("www.google.com", function downloadCallback(response) {
//   console.log("Downloaded response is", response);
//   writeFile(response, function writingDataCallback(filenameResponse) {
//     console.log("new file written is", filenameResponse);
//     uploadFile(
//       filenameResponse,
//       "www.drive.google.com",
//       function uploadCallback(uploadResponse) {
//         console.log("sucessfully uploaded", uploadResponse);
//       }
//     );
//   });
// });
