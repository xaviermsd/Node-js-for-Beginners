const httpServer = require('http')
    // const createSever = httpServer.createServer();

/* createSever.on('connection',socket => console.log('New connection'));

createSever.listen(3000);

console.log('Server is listening to port 3000'); */

//Above method is not a good practice for making an server. //It's too low level method

//Good Practice method for live server
const createSever = httpServer.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World, Welcome to Node.js - First Server')
        res.end()
    }
    if (req.url === '/api/module') {
        res.write(JSON.stringify([1, 2, 3]))
        res.end()
    }
})
createSever.listen(3000)

console.log('Server is listening to port 3000')