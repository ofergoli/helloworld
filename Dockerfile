FROM node:0.12.7

ADD ./ /helloworld
WORKDIR /helloworld

EXPOSE 3000
