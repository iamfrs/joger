const express = require("express");
const app = express();
const db = require('./models/index');
const port = process.env.Port;

app.get("/dbcnnect",async(req,res)=>{
    try{
        await db.Sequelize.sync({alert:true});
        res.status(200).send('ok');
    }catch(error){
        res.send(error.toString());
    }
});
app.listen(Port,()=>{
    console.log("server is running on :"+Port);
});







