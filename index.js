'use strict';

const express = require('express');
const app = express();
const PORT = 9000;


var download = require('./downloader');

app.get('/', function(req, res) {
	res.render('');
});

// App variables
var file_url = 'https://dl.google.com/picasa/picasa39-setup.exe';
var DOWNLOAD_DIR = 'D:\\demo-folder\\downloads\\';

download(file_url, DOWNLOAD_DIR, function(err, id){
	if(err)
		throw err;

	console.log('File Downloaded: %s', id);
});


app.listen(PORT);

console.log("express server is started on " + PORT);
