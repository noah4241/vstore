<template>
    <div class="">

      <div class="text-xl text-black border-slate-300 space-x-1 py-2">
        <div class="bg-white border-2 border-slate-300  items-center rounded-xl shadow-xl p-12 my-2 flex justify-center">
          <div class="grid grid-rows-2">
            <div>
              <input type="file" id="selector" accept="" class="file file-input-bordered file-input" multiple
                style="width: 1000px" />
              <button type="submit" class="btn bg-blue-500 hover:bg-blue-400 text-white " @click="upload()">
                Upload
              </button>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
      };
    },
    mounted() {
    },
    methods: {
      // uploadFile(file, url) {
      //   if (document.querySelector("#status").innerText === "No uploads") {
      //     document.querySelector("#status").innerHTML = "";
      //   }
      //   fetch(url, {
      //     method: "PUT",
      //     body: file,
      //   })
      //     .then(() => {
      //       // If multiple files are uploaded, append upload status on the next line.
      //       document.querySelector(
      //         "#status"
      //       ).innerHTML += `<br>Uploaded ${file.name}.`;
      //     })
      //     .catch((e) => {
      //       console.error(e);
      //     });
      // },
      // retrieveNewURL(file, cb) {
      //   fetch(
      //     `${process.env.backEndUrl}/polls/minio?name=${file.name}`
      //   )
      //     .then((response) => {
      //       response.text().then((url) => {
      //         cb(file, url);
      //       });
      //     })
      //     .catch((e) => {
      //       console.error(e);
      //     });
      // },
      // async upload() {
      //   // Get selected files from the input element.
      //   console.log();
      //   var files = await document.querySelector("#selector").files;
      //   for (var i = 0; i < files.length; i++) {
      //     var file = files[i];
      //     // Retrieve a URL from our server.
      //     await this.retrieveNewURL(
      //       file,
      //       (file, url) => {
      //         // Upload the file to the server.
      //         var url = url;
      //         url = JSON.parse(url);
      //         this.uploadFile(file, url.url);
      //       },
      //     );
      //   }
      // },
    },
  };
  
  </script>
  