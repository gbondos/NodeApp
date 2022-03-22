const http = require('http')
const port = 8080
const server = http.createServer(function(req, res){
    res.write("Hello world, first node application on Nodeapp")
    res.end()
})

server.listen(port, function(error){
    if (error){
        console.log("Something went wrong", error)
    }
    else{
        console.log("Server is listening on port " + port)
    }
})