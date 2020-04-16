var url = 'https://imharsh-wplearner.com'

function logs() {
    console.log('Modules')
        // console.log("Value of this is" + exports);
        // console.log("Value of this is" + require);
        // console.log("Value of this is" + __filename);
        // console.log("Value of this is" + __dirname);
}
// module.exports.mylogs = log;
module.exports = logs //We can export a single function or object
    // module.exports.endPointURL = url; //No need of implenatation logs

//Module Wrapper Function

// (function(exports, require, module, __filename, __dirname) {
//     //code
// })