#!/bin/bash

npm run build
GITHASH=$(git rev-parse --short HEAD)
mv out/_next .
mv out _out
mkdir -p out/builds/$GITHASH
mv _out/* out/builds/$GITHASH
rm -rf _out
mv _next out/
