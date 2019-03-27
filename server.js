var http = require('http');
var dt = require('./myFirstModule');
const port  = process.env.PORT||8080;

http.createServer((req,res)=>{
    res.writeHead(200,
    {'Content-Type':'text/html'});
    res.write('The date and time are currently: '+ dt.myDateTime());
    res.end();
}).listen(port,()=>{
    console.log(`Server is up on port ${port}`)
});