/**
 * @fileoverview Example code for GcOpsJs (network access)
 * 
 * @author Kazutaka KURIHARA
 * @author Nobuhiro DOI
 * @version 0.1
 * 
 */
const GcOps = require('node-red-contrib-game_controllerizer').GcOps;
const WebSocketClient = require('websocket').w3cwebsocket;

// !!! configure the following settings !!!
const WS_HOST = '192.168.11.10';
const WS_PORT = '1880';

// Websocket client settings
const wsclient = new WebSocketClient('ws://' + WS_HOST + ':' + WS_PORT + '/gamepad', null);
wsclient.onerror = function() {
    console.log('Connection Error');
};
wsclient.onopen = function() {
    console.log('WebSocket Client Connected');
    // send some commands to G.C.
    sendCmd();
};
wsclient.onclose = function() {
    console.log('echo-protocol Client Closed');
};

sendCmd = function(){
    // define 'Hadouken' command
    const gcWord0 = {"dpad": 2, "dur":3};
    const gcWord1 = {"dpad": 3, "dur":3};
    const gcWord2 = {"dpad": 6, "dur":3};
    const gcWord3 = {"btn": [0], "dur":3};
    const gc_sentence = [gcWord0, gcWord1, gcWord2, gcWord3];

    wsclient.send(JSON.stringify(gc_sentence));
}
