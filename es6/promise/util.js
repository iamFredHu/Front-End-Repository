const util = require('util')

const fs = require('fs')

let mineReadFile = util.promisify(fs.readFile)

mineReadFile('./file/1.txt').then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})