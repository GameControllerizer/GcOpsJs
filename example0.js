/**
 * @fileoverview Example code for GcOpsJs
 * 
 * @author Kazutaka KURIHARA
 * @author Nobuhiro DOI
 * @version 0.1
 * 
 */
const SerialPort = require('serialport');
const GcOps = require('node-red-contrib-game_controllerizer').GcOps;

// !!! configure the following settings !!!
const SERIAL_PORT_NAME = '/dev/ttyUSB0';

// serial port settings
const serialPort = new SerialPort(SERIAL_PORT_NAME, {
    baudRate: 115200,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false,
});
serialPort.on('close', function(err) {
    console.log('[*] SerialPort closed');
});
serialPort.on('open', function(err) {
    console.log('[*] SerialPort opened');
});
serialPort.on('data', function(input) {
	const button_id = input.readUInt8(0);
	var button_name;	
    switch(button_id){
		case 0x01:
			button_name = "B0";
			break;
        case 0x02:
			button_name = "B1";
			break;
		case 0x04:
			button_name = "B2";
			break;
		case 0x08:
			button_name = "B3";
			break;
	}
	console.log("[*] Tact switch is pressed :", button_name);
});

// define 'Hadouken' command
const gcWord0 = {"dpad": 2, "dur":3};
const gcWord1 = {"dpad": 3, "dur":3};
const gcWord2 = {"dpad": 6, "dur":3};
const gcWord3 = {"btn": [0], "dur":3};
const gc_sentence = [gcWord0, gcWord1, gcWord2, gcWord3];

// serialize gc_sentence
let binary_sentence = [];
let total_bytes = 0;
for (let gc_word of gc_sentence){
    let bytes = GcOps.toBytes(gc_word);
    binary_sentence.push(bytes);
    total_bytes += bytes.length;
}
const final_bytes = Buffer.concat(binary_sentence, total_bytes);
console.log("[*] gc_sentence  >\t" + JSON.stringify(gc_sentence));
console.log("[*] final_length >\t" + final_bytes.length);
console.log("[*] final_bytes  >\t" + final_bytes.toString('hex'));

// then, you can send `final_bytes` to GC H/W gamepad emulator via SerialPort like below
serialPort.write(final_bytes);

// wait a key input to exit
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.on('data', process.exit.bind(process, 0));
console.log('[*] Press any key to exit');
