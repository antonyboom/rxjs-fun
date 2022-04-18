#!/bin/bash
nohup java -jar ../../server/target/web-server-0.0.1-SNAPSHOT.jar > ../../server/target/log.txt 2>&1 &
echo $! > /path/to/app/pid.file
