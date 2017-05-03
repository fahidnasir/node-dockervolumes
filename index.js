'use strict';

var download = require('./downloader');

// App variables
var file_url = 'https://dl.google.com/picasa/picasa39-setup.exe';
var DOWNLOAD_DIR = 'D:\\demo-folder\\downloads\\';

download(file_url, DOWNLOAD_DIR, function(err, id){
	if(err)
		throw err;

	console.log('File Downloaded: %s', id);
});
