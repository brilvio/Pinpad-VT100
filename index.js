
var	client = null,
	releaseKeyboard = false,
	home = String.fromCharCode(27) + '[H',
	clearScreen = String.fromCharCode(27) + '[J',
	lineFeed = String.fromCharCode(27) + '[1B',
	lineAt = 1,
	obj = null,
	status = null;
	
var pinpad = module.exports = function(config) {
     

};

(function() {   
     this.cls = function() {
	  client.write(home);
      client.write(clearScreen);
      client.write(home);
      lineAt = 1;
	}
	this.connect = function(options) { 
	    status = options.sts;
		client = require('net').Socket();   
		client.connect(options.port,options.ip);
		client.on("error", function(err) {
			console.log(err.stack) 
		});
		pinpad.cls();
		client.on("data",function(data) {
			if (data.toString() == 'A') { //Keep sending function status to the pinpad 
				releaseKeyboard = false; 
				status(obj,client);
				sleep(900,client);	    
			} else if (data.toString().charCodeAt(0) == 13) { //clear the screen and realese the keyboard
				pinpad.cls();
				releaseKeyboard = true;
			} else if (releaseKeyboard) {
				//print on the screen what was press on the keyboard
				pinpad.print(data.toString(),false); 
			}
		});
	};    
	
	this.print = function(text,jumpLine) {
		client.write(text);
		if (jumpLine) {
			client.write(lineFeed);
			lineAt += 1;
			client.write(String.fromCharCode(27) + '[' + lineAt.toString() + ';1f');	
		};
	};
	
    
	
}).call(pinpad);

	
function sleep(millis, cli) {
    setTimeout(function()
            { if (!releaseKeyboard) {
			  sleep(millis,cli);
			  status(obj,cli); }
			}
    , millis);
}
