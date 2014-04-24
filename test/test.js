var pinpad = require('../index');

function status(obj,cli) {    //function that will be call if the user press A on the keyboard
  pinpad.cls();
  pinpad.print('Status....',true);    
}

pinpad.connect({ip:"192.168.1.253",port:8126,sts:status}); //ip and port of the pinpad
pinpad.print('test',true); // print and jump one line