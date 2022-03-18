const fs = require('fs')
 fs.readFile(process.argv[0], function(err, aze){
const str = aze.toString().split('\n').length-1
console.log(str)})