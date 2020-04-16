const path = require('path') //Path Module
const os = require('os') //OS Module
const file = require('fs') //Files Module

//const fileList = file.readdirSync('./'); //asynchronous
//console.log(fileList);

file.readdir('', function(err, files) {
    //Synchronous
    if (err) console.log('error:', err)
    else console.log('result:', files)
})

//console.log(path);
var pathObj = path.parse(__filename)
console.log(pathObj)

/* var freeMemory = os.freemem(mb);
var totalMemory = os.totalmem(mb); */

const bytesToSize = bytes => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
    if (bytes == 0) return '0 Byte'
    const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i]
}

console.log('free memory : ', bytesToSize(os.freemem()))
console.log('total memory : ', bytesToSize(os.totalmem()))

/* console.log(`Free memory is: ${freeMemory} and Total Memory is: ${totalMemory}`); */