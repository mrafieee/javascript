var http = require("http");
http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type": "text/plain"});
    res.end("Hello world!\n");
}).listen(1337,process.env.IP);
console.log("server running at http://127.0.0.1:1337");
console.log(process.env.PORT)