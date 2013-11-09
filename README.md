E.B.U.R.P Engine
================

The "Eight-Bit Universal Role Playing" Engine is a feverishly retro-inspired RPG system, optimized for simple, single-handed mobile play.
It is written in CoffeeScript (which compiles to JavaScript), so that it can be run on any platform that supports HTML5.
This includes iOS and Android, as well as compliant desktop browsers such as Chrome, Firefox and Safari.
Some of the build tools are written in Java, so this is required to build the game from source.

Included is a playable and fun demo game. Go here to play it: http://pents90.github.io/eburp

This engine was written to make Gurk III, an RPG for [Android](http://play.google.com/store/apps/details?id=com.larvalabs.gurk3) and [iOS](http://itunes.apple.com/us/app/gurk-iii-the-8-bit-rpg/id685128493?mt=8).

## Philosophy

The goal of this engine is to use a very simple push-button approach to play, as opposed to complex gestures and menus.
The result is not the most ideal interface, but it is very easy to develop for, and players can learn it and become quite fast and satisfied with it.
The game itself is also simple, but has enough complexity to support an interesting story and subtle combat strategy.

## If You Use This Project

Even though the name "Gurk" is all over the source and the demo game. Please don't call your game "Gurk", that's our little brand!
Also, you can use anything that is in this open-source project, but please don't pirate any graphics or music from the Gurk series that is not included here.
That's all, enjoy!

## Making Your Own Game

Have a look at the file 'game/gurkDemo.js'. This is a self-documented JavaScript file that shows you how to customize the game data.
You can also use the map editor by running the Java class gurk.MapEditor.

## Build Instructions

There are three steps to building this bad boy.

1. Run the Java class gurk.ImageCompiler with two arguments: the game file (game/gurkDemo.js for the demo game) and the platform target, which is either web, android or ios.
2. Run the build.sh file, giving it one of three arguments, based on what platform you are targeting:
    `./build.sh web`
    `./build.sh android/assets`
    `./build.sh ios/Gurk/Gurk`
3. For web, simply load `index.html` in a web browser. Note that if try load it as a file: URL instead of hosting it via HTTP, Chrome will complain about security and the game won't run (on platforms with Python installed type `python -m SimpleHTTPServer` in the directory containing `index.html` for a simple webserver). For Android, build and install the included Android project in the 'android' folder. For iOS, build and install the Xcode project in the 'ios' folder.

## Architecture

The engine consists of the following CoffeeScript files: 

* core.coffee - This has all the fundamental drawing and GUI utilities.
* model.coffee - This defines the core data model for the game, including heroes, items, creatures and spells.
* adventure.coffee - This has all the user interface for the entire except for combat.
* combat.coffee - This has the combat user interface and engine.
* gurk.coffee - This ties everything together and serves as the entry point into the game.

There will be more to docs to come!
