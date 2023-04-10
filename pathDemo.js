const path = require('path')
const fs = require('fs')

console.log(path.basename(__filename))
console.log(path.extname(__filename));

// create folder 
// fs.mkdir(path.join(__dirname,'./yoyo'), (err)=>{
//     if(err){throw err}
//     console.log('folder created');
// })
//create file 
// fs.writeFile(path.join(__dirname,'./yoyo', 'yohtml.html'), "<h1>YOYO</h1>" ,(err)=>{
//     if(err){throw err}
//     console.log('file created');
// })
fs.writeFile(path.join(__dirname,'./yoyo', 'yojsOne.js'), `function yo(){console.log("YOYO")} yo()` ,(err)=>{
    if(err){throw err}
    console.log('file created');
})