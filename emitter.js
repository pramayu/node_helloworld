var events = require('events');
var util = require('util');

var Person = function(name) {
  this.name = name;
};

util.inherits(Person, events.EventEmitter);

var intan = new Person('Intan');
var permata = new Person('Permata');

var hunny = [intan, permata];

hunny.map(function(person){
  person.on('speak', function(msg){
    console.log(person.name + ' said: ' + msg);
  });
});

intan.emit('speak', 'Hey..');
permata.emit('speak', 'hi... \nWhats up?');
