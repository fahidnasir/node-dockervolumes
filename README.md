## Intro
This project will show a screen to upload files and save those files in [Docker Volume](https://github.com/fahidnasir/node-dockervolumes/tree/docker-container) or [Local Folder](https://github.com/fahidnasir/node-dockervolumes/tree/local-folder) (both feature have separate branches)

## Why?
To show the power of node.js and demonstrate some file-system features.

## Technologies/Packages
Package | Version | Description
[Node.js](https://nodejs.org/en/) | v7.6.0 | But it should work with all versions
[express](https://www.npmjs.com/package/express) | v4+ | Light-Weight web framework for node.js
[pug](https://www.npmjs.com/package/pug) | v2+  View Engine
[jquery](https://www.npmjs.com/package/jquery) | v3   client-side javascript library
[bootstrap](https://www.npmjs.com/package/bootstrap) | v3   client-side design library

## Docker Setup
### Pre-Requities
* npm (Node Package Manager) by default ship with node.js Executable.
* Docker (Verify installation with command `docker -v`)
* Docker-Compose (Verify installation with command `docker-compose -v`)

### Steps to run local folder sample

1. Open Command Line
2. Clone or Download Project (`git clone https://github.com/fahidnasir/node-dockervolumes.git`)
3. Navigate inside folder (in this case `node-dockervolumes`)
4. Switch to Branch `docker-container` (`git checkout docker-container`)
5. run command `docker-compose build` to create docker image from existing code
6. run command `docker-compose up` to start docker image
7. visit [http://localhost:3000](http://localhost:3000)
8. upload some files in browser


Note: Now you want to see the uploaded files inside the docker container
### Want to see Uploaded Files in Docker?
While the application is still running in docker, do these steps

#### Steps
1. run command `docker exec <docker container id/name> sh`
2. Now you are inside docker container navigate to the folder with files
3. run command `cd /var/lib/files/` to navigate into the folder
4. run command `ls` to list all the files in the folder

## Local Setup
### Pre-Requities

npm (Node Package Manager) by default ship with node.js Executable.

### Steps to run local folder sample

1. Open Command Line
2. Clone or Download Project (`git clone https://github.com/fahidnasir/node-dockervolumes.git`)
3. Navigate inside folder (in this case `node-dockervolumes`)
4. run command `npm install` to install the required packages
5. run command `npm start` to start project
6. visit [http://localhost:3000](http://localhost:3000)
