Pinpad-VT100
============

Node.js Module to comunicate with pinpads that work with protocol VT100

## Installation
```javascript
  npm install pinpad-vt100 --save
```
## Usage

```javascript
var pinpad = require('pinpad-vt100');
  
function status(obj,cli) {    //function that will be call if the user press A on the keyboard
	pinpad.cls();
	pinpad.print('Status....',true);    
}

pinpad.connect({ip:"192.168.1.253",port:8126,sts:status}); //ip and port of the pinpad
pinpad.print('test',true); // print and jump one line
```  

## Tests

In the folder test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
