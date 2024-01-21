import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import { config } from "./config/config";
import UserRouter from "./routes/user";


const app=express()

mongoose.connect(config.mongo.url)
    .then(()=>{
    console.log("Db Connected")
    app.use(express.json())
    app.use(cors())

    app.get("/api/ping", async (req, res) => {
        res.status(200).json({msg:"pong"})
    })
    
    // USER ROUTES
    
    app.use("/users",UserRouter)

    //NOT FOUND

    app.use((req,res,next)=>{
        res.status(404).json({msg:"404 : NOT FOUND"})
    })

    app.listen(config.server.port, () => {
        console.log(`server started at port:${config.server.port}`);
    });
    
    })
    .catch((err)=>{
        console.log(err)
    })