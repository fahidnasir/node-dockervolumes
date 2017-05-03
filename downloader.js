var request = require('request');
var fs = require('fs');
var path = require('path');

var download = function(file_url, download_location, callback){
  var file_name = path.basename(file_url);
  var dest = path.join(download_location, file_name);
  var writeStream = fs.createWriteStream(dest);

  writeStream.on('finish', function(){
    callback(null, dest);
  });

  writeStream.on('error', function(err){
    fs.unlink(dest, callback(err));
  });

  var readStream = request.get(file_url);
  readStream.on('error', function(err){
    fs.unlink(dest, callback(err));
  });

  readStream.pipe(writeStream);
};

module.exports = download;
