import express  from "express";
import cors from "cors";
import mongoose from "mongoose";
import FormRouter from "./FromRouter.js";

const app = express()

const connection = mongoose.connect("mongodb://127.0.0.1:27017/Form")

app.use(cors())

app.use(express.json())
app.use("/form" , FormRouter)

connection.then(()=>{
    app.listen(8080 , ()=> console.log("server started at 8080"))
})
.catch((err)=> console.log("error"+ err))