const express =require('express');

let app = express();

//route = http method + URL
app.get('/',(req,res)=>{
    res.status(200).json({
        message: "Hello , world", status:200
    });

    
})
// creating the server
app.listen(3000,()=>{
    console.log("Server has started......");
});
































































































