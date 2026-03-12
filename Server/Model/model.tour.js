import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
    name :{
         type : String,
         required : true
    },
    location: {
        type : String,
        required: true
    },
    price : {
        type : Number,
        required : true
    },
    duration : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    images:[{
         type: String
    }],
    dates :[{
        type : Date ,
        required : true
    }],
    Total_Seats : {
        type : Number ,
        required : true
    },
      bookedSeats: {
      type: Number,
      default: 0
    }


  

},{timestamps:true});

const tour  = mongoose.model("Tour", tourSchema);
export default tour