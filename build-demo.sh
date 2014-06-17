#!/bin/sh

# Compile tools
echo Building tools...
mkdir -p out/production/jurk
javac -d out/production/jurk tools/gurk/*.java

# Run image compiler
echo Processing images...
java -cp out/production/jurk gurk.ImageCompiler game/gurkDemo.js web

# Run build script
echo Building game...
./build.sh web

echo Done!