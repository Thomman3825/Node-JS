const http = require('http')
http.createServer((req,res)=>{
    res.write("YOYO this is a demo server")
    res.end()
}).listen(9606,()=>{console.log("running")})