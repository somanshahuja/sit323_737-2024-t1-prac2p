// Require Express: Import the Express module.
var express = require("express")
//Create Express App: Create an Express application.
var app = express()
var port = process.env.port || 3000;
//Start Server: Set the server to listen on port 3040 and log a message when the server starts.
app.listen(port,()=>{
console.log("App listening to: "+port)
})