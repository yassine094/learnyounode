const fs = require('fs')
const aze = fs.readFileSync(process.argv[2])
const str = aze.toString().split('\n').length-1
console.log(str)