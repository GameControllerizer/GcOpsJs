# GcOpsJs
node.js interface for [G.C. H/W gamepad emulator](https://github.com/GameControllerizer/GcHwEmulator).

## Overview
[G.C. H/W gamepad emulator](https://github.com/GameControllerizer/GcHwEmulator) 
can be controlled from not only GUI programming 
environment (e.g. Makecode, Node-RED), but also program.
This repository contains node.js sample codes.

There are two methods, 

1. Network access
2. Direct access

---

## 1. Network access 
This method is best for easy-to-use system.

<img src="https://raw.githubusercontent.com/wiki/GameControllerizer/GcOpsJs/images/overview_ws.png" width="620px">

### Requirements
#### H/W
- PC(win/mac/linux)
- [G.C. H/W gamepad emulator](https://github.com/GameControllerizer/GcHwEmulator)
- Raspberry Pi (* as G.C. host)
#### S/W
- node.js (>8.0)
- node.js libraries
    - [node-serialport](https://www.npmjs.com/package/serialport)
    - [node-red-contrib-game_controllerizer](https://www.npmjs.com/package/node-red-contrib-game_controllerizer)
    - [websocket](https://www.npmjs.com/package/websocket) (* any other websocket libraries also avairable.)

`node-red-contrib-game_controllerizer` is the library for Node-RED basically.
But, programmer can call inner functions of the library directly.

### Step-1. H/W setup
Setup G.C. H/W emulator and RasPi kit. See [node-red-contrib-game_controllerizer](https://www.npmjs.com/package/node-red-contrib-game_controllerizer) library page. After the Node-RED is running on RasPi, import [chearsheet](https://raw.githubusercontent.com/wiki/GameControllerizer/node-red-contrib-game_controllerizer/docs/node-red-contrib-game_controllerizer-cheatsheet.json) as predefined Node-RED flow.

### Step-2. Run an example code

```bash
# clone this repository
% git clone https://github.com/GameControllerizer/GcOpsJs
% cd GcOpsJs
# setup libraries
% npm i serialport
% npm i node-red-contrib-game_controllerizer
% npm i websocket
# run an example code
% node -v
v8.10.0
# !!! Do not forget to configure websocket port & host defined in the example code !!!
% node example_network.js
```
When the program is runnning, the marker of `ws:/gamepad` node in `MISC` tab must be green as followed.

<img src="https://raw.githubusercontent.com/wiki/GameControllerizer/GcOpsJs/images/connection0_ws.png" width="520px">

---
## 2. Direct access 
This method is best for low latency system.

<img src="https://raw.githubusercontent.com/wiki/GameControllerizer/GcOpsJs/images/overview.png" width="520px">

### Requirements
#### H/W
- PC(win/mac/linux)
- [G.C. H/W gamepad emulator](https://github.com/GameControllerizer/GcHwEmulator)
- USB serial interface (e.g. FT23x)
- UBS cables
#### S/W
same as 'Network access'

### Step-1. H/W setup
<img src="https://raw.githubusercontent.com/wiki/GameControllerizer/GcOpsJs/images/connection1.png" width="520px">

<img src="https://raw.githubusercontent.com/wiki/GameControllerizer/GcOpsJs/images/connection0.png" width="520px">

### Step-2. Run an example code
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
% node example_direct.js
```

## Note
All the programmer have to do is call `GcOps.toBytes()` function to 
convert JSON based command list into bytes.
Check [DSL4GC](https://github.com/GameControllerizer/DSL4GC) for command format.
