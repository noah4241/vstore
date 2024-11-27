<template>
    <div>
        <input type="file" id="selector" multiple>
        <button @click="upload()">Upload</button>

        <div id="status">No uploads</div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
        return {
        };
    },
    // `upload` iterates through all files selected and invokes a helper function called `retrieveNewURL`.
    methods: {
        uploadFile(file, url) {
            // console.log(url)
            if (document.querySelector('#status').innerText === 'No uploads') {
                document.querySelector('#status').innerHTML = '';
            }
            fetch(url, {
                method: 'PUT',
                body: file
            }).then(() => {
                // If multiple files are uploaded, append upload status on the next line.
                document.querySelector('#status').innerHTML += `<br>Uploaded ${file.name}.`;
            }).catch((e) => {
                console.error(e);
            });
        },
        // `retrieveNewURL` accepts the name of the current file and invokes the `/presignedUrl` endpoint to
        // generate a pre-signed URL for use in uploading that file: 
        retrieveNewURL(file, cb) {
            fetch(
                `${process.env.backEndUrl}/polls/presignedUrl?name=${file.name}`
                // `/polls/presignedUrl?name=${file.name}`
            )
                .then((response) => {
                    response.text().then((url) => {
                        cb(file, url);
                    });
                }).catch((e) => {
                    console.error(e);
                });
        },
        // ``uploadFile` accepts the current filename and the pre-signed URL. It then uses `Fetch API`
        // to upload this file to S3 at `play.min.io:9000` using the URL:
        async upload() {
            // Get selected files from the input element.
            var files = document.querySelector("#selector").files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                // Retrieve a URL from our server.
                this.retrieveNewURL(file, (file, url) => {
                    // Upload the file to the server.
                    var url = url;
                    url = JSON.parse(url);
                    this.uploadFile(file, url.url);
                    // console.log(url.url)
                });
            }
        },

    }
}
</script>

<!-- var url = url;
            url = JSON.parse(url); -->