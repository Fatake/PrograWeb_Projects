#!/bin/bash

if [ -x "$(command -v docker)" ]; then
    echo "[!] Update docker"
else
    echo "[!] This scritp require de docker software Install docker"
    exit 1
fi


if [ ! -d ".env" ]; then
    echo -e "[+] Creating  dir .env"
    cp conf.env .env
fi

echo -e "[+] Launching LAMP Server"

docker-compose up -d


echo -e "[i] Server init at http://127.0.0.1:80"