#!/usr/bin/env bash
fuser -k 3000/tcp

#cd utils / sudo ./install_server.sh / sudo service redis_6379 start | stop
sudo service redis_6379 start
cd ./oj-server
npm install
nodemon server.js &
cd ../oj-client
npm install
ng build --watch

echo "======================================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES." PRESSKEY

fuser -k 3000/tcp
service redis_6379 stop
