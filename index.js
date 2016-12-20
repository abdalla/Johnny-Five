const tessel = require('tessel');

tessel.led[2].on();

setInterval(function () {
  tessel.led[2].toggle();
  tessel.led[3].toggle();
}, 100);

console.log("Press CTRL + C to stop");