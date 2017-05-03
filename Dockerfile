# lighter image for node applications.
FROM mhart/alpine-node:7.7.1

MAINTAINER Fahid Nasir <fahidnasir@hotmail.com>

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
ADD . /opt/app

# 80 = HTTP, 443 = HTTPS, 9000 = MEAN.JS server
# EXPOSE 9000

CMD npm start
