import mongoose  from "mongoose";

const userSchema = new mongoose.Schema({
    name : {
        type : String
    },
    mobile : {
        type : Number,
        maxlenght : 10
    },
    email : {
        type : String ,
        required : true,
        unique : true 
    },
    passworld : {
        type : String,
        default : "easycode@123"
    }
    

},{timestamps : true})

const user = mongoose.model("user",userSchema)

export default user