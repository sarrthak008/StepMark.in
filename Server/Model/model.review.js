import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    tour : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "tour"
    },
    rating : {
        type : Number ,
        min : 1,
        max : 5
    },

    comment : {
        type : String,
    }
},{timestamps:true})

const review = mongoose.model("review",reviewSchema)

export default review