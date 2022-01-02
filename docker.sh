#!/bin/sh
m=$(cat ./build_number)
echo $m
docker build -t ghcr.io/lucxjo/ligitaj:build-$m .
docker build -t ghcr.io/lucxjo/ligitaj:latest .
docker push ghcr.io/lucxjo/ligitaj:build-$m
docker push ghcr.io/lucxjo/ligitaj:latest

echo $((m+1)) > ./build_number