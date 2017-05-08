var express = require('express');
var router = express.Router();
var fs = require('fs');

var path = require('path');
var formidable = require('formidable');
var mkdirp = require('mkdirp');

const DOWNLOAD_DIR = '/var/lib/files/';

/* GET home page. */
router.get('/', function(req, res, next) {  
  res.render('index', { title: 'Node Docker Volumes' });
});

router.post('/upload', function(req, res, next){
  try{
    if(!fs.existsSync(DOWNLOAD_DIR)){
      //when parent folders must be created otherwise it will give error or User `mkdirp`.
      mkdirp(path.resolve(DOWNLOAD_DIR), function (err) {
        if (err) console.error(err)
        else console.log('dir created')
      });
    }

    // create an incoming form object
    var form = new formidable.IncomingForm();
    // specify that we want to allow the user to upload multiple files in a single request
    form.multiples = false;
    // store all uploads in the DOWNLOAD_DIR directory
    form.uploadDir = DOWNLOAD_DIR;
    // every time a file has been uploaded successfully,
    // rename it to it's orignal name
    form.on('file', function(field, file) {
      fs.rename(file.path, path.join(form.uploadDir, file.name));
    });
    // log any errors that occur
    form.on('error', function(err) {
      console.log('An error has occured: \n' + err);
    });
    // once all the files have been uploaded, send a response to the client
    form.on('end', function() {
      res.end('success');
    });
    // parse the incoming request containing the form data
    form.parse(req);
  }
  catch(err){
    console.log('An error has occured: \n' + err);
  }
});

module.exports = router;
