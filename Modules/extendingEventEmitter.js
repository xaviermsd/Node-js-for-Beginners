const EventEmmiter = require('events') //Event Module

const EventCall = require('./eventLogger')
const eventObj = new EventCall()

//Register a Listner
eventObj.on('hello', e => console.log('listner called..', e))

eventObj.logs()