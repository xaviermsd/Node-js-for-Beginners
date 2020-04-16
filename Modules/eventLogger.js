const EventEmmiter = require('events') //Event Module

class EventCall extends EventEmmiter {
    logs() {
        console.log('Modules')

        //Raise an Event
        this.emit('hello', { id: 1, url: 'https://' }) //Event Argument
    }
}
module.exports = EventCall