#!/usr/bin/env bash
fuser -k 3000/tcp
fuser -k 5000/tcp
fuser -k 5001/tcp
fuser -k 5002/tcp

#cd utils / sudo ./install_server.sh / sudo service redis_6379 start | stop
sudo service redis_6379 start
cd ./oj-server
npm install
nodemon server.js &
cd ../oj-client
npm install
ng build --watch &
cd ../executor
pip install -r requirements.txt
python executor_server.py 5000&
python executor_server.py 5001&
python executor_server.py 5002&

echo "======================================================="
read -p "PRESS [ENTER] TO TERMINATE PROCESSES." PRESSKEY

fuser -k 3000/tcp
fuser -k 5000/tcp
fuser -k 5001/tcp
fuser -k 5002/tcp
service redis_6379 stop
