import express from "express";
import {config} from "dotenv"
config();
const app = express();
const PORT = 3000 || process.env.PORT;

// configure database
import connectDB from "./config/db_connection.js";

// utils files
import responder from "./Utils/responder.js";

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// add routes here 

//user

//admin

// Super Admin


app.get("/ping",(req,res)=>{
     return responder(res,true,200,"pong",null);
})

app.listen(PORT,()=>{
    // connectDB();
    console.log(`Server is running on port ${PORT}`);
})