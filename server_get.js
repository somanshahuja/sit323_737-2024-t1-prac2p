// Require Express: Import the Express module.
const express= require("express");
//Create Express App: Create an Express application.
const app= express();
const addTwoNumber= (n1,n2) => {
    return n1+n2;
}
//Define Function: Define a function addTwoNumber that adds two numbers.
app.get("/addTwoNumber", (req,res)=>{
    //Define Route: Create a route /addTwoNumber that accepts GET requests. It parses query parameters n1 and n2, adds them using the addTwoNumber function, and returns the result as JSON.
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result }); 
});
//Test Function: Call addTwoNumber with parameters (19, 12) and log the result.
console.log (addTwoNumber(19,12));
const port=3040;
//Start Server: Set the server to listen on port 3040 and log a message when the server starts.
app.listen(port,()=> {
    console.log("hello i'm listening to port "+port);
})
