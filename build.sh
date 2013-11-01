#!/bin/sh

# Compile coffee script
coffee --join $1/gurk.js --compile src/device.coffee src/core.coffee src/model.coffee src/adventure.coffee src/combat.coffee src/gurk.coffee

# Copy images
cp images/* $1

# Compile game data
java -cp out/production/jurk gurk.GameCompiler gurkDemo.js $1
#java -cp out/production/jurk gurk.GameCompiler game.js $1
