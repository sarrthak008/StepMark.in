import mongoose  from "mongoose";

const bookingSchame = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user"
    },
    tour : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "tour"
    },
  date: {
    type: Date,
    required: true
  },
 status : {
    type : String,
    enum : ["Pending","Confirmed","Cancelled"],
    default : "Pending"
 }

},{timestamps:true})

const booking = mongoose.model("booking",bookingSchame)
export default booking;