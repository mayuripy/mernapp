const express = require("express");
const dotenv =require("dotenv").config();

const app =express();


const port=process.env.PORT ||5000;

app.use("/api/contscts", require("./routes/constactRouters"));
//app.put("/api/contacts",)

app.listen(port,() =>{
    console.log(`running server $ {port}`);
});