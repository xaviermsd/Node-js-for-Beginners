const EventEmitter = require('events') //Event Module
const emmiter = new EventEmitter()

//Register a Listner
emitter.on('hello', e => console.log('listner called..', e))

//Raise an Event
// emmiter.emit('hello')
emitter.emit('hello', { id: 1, url: 'https://' }) //Event Argument