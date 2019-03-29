# GcOpsJs
node.js interface for [G.C. H/W gamepad emulator](https://github.com/GameControllerizer/GcHwEmulator).

## Overview
[G.C. H/W gamepad emulator](https://github.com/GameControllerizer/GcHwEmulator) 
can be controlled from not only GUI programming 
environment (e.g. Makecode, Node-RED), but also program.
This repository contains node.js sample code.

<img src="https://raw.githubusercontent.com/wiki/GameControllerizer/GcOpsJs/images/overview.png" width="540px">

## Requirements
#### H/W
- PC(win/mac/linux)
- [G.C. H/W gamepad emulator](https://github.com/GameControllerizer/GcHwEmulator)
- USB serial interface (e.g. FT23x)
- UBS cables
#### S/W
- node.js (>8.0)
- node.js libraries
    - [node-serialport](https://www.npmjs.com/package/serialport)
    - [node-red-contrib-game_controllerizer](https://www.npmjs.com/package/node-red-contrib-game_controllerizer)

`node-red-contrib-game_controllerizer` is the library for Node-RED basically.
But, programmer can call inner functions of the library directly.

## Getting started

#### 1. H/W setup
<img src="https://raw.githubusercontent.com/wiki/GameControllerizer/GcOpsJs/images/connection1.png" width="540px">

<img src="https://raw.githubusercontent.com/wiki/GameControllerizer/GcOpsJs/images/connection0.png" width="540px">

#### 2. Run an example code
```bash
# clone this repository
% git clone https://github.com/GameControllerizer/GcOpsJs
% cd GcOpsJs
# setup libraries
% npm i serialport
% npm i node-red-contrib-game_controllerizer
# run an example code
% node -v
v8.10.0
# !!! Do not forget to configure serialport name defined in the example code !!!
% node example0.js
```

## Note
All the programmer have to do is call `GcOps.toBytes()` function to 
convert JSON based command list into bytes.
Check [DSL4GC](https://github.com/GameControllerizer/DSL4GC) for command format.
