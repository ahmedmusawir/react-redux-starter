FROM nginx:latest
MAINTAINER Moose

COPY ./nginx.conf /etc/nginx

WORKDIR /usr/share/nginx/html

COPY ./build .