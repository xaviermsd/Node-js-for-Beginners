const EventEmmiter = require('events') //Event Module
const url = 'imharsh-wplearner.com'
class EventCall extends EventEmmiter {
    logs() {
        console.log('Modules')

        //Raise an Event
        this.emit('hello', {
            id: 1,
            url: `${url}` //Event Argument
        })
    }
}
module.exports = EventCall