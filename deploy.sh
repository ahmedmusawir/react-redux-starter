#!/bin/bash

docker build -t moosedev/redux-react-kit .
docker push moosedev/redux-react-kit

ssh moose@128.199.122.47 << EOF 
docker pull moosedev/redux-react-kit:latest
docker stop redux-kit || true
docker rm redux-kit || true
docker rmi moosedev/redux-react-kit:current || true
docker tag moosedev/redux-react-kit:latest moosedev/redux-react-kit:current
docker run -d --restart always --name redux-kit -p 4001:80 moosedev/redux-react-kit
EOF
