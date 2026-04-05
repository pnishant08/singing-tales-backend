import mongoose from "mongoose";

const customCardSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    message:String,
    fontStyle:String,
    color:String,
    image:[String],
    previewUrl:String,
    
    status:{
        type:String,
        enum:["draft","submitted","approved","rejected"],
        default:"draft"
    }
},{timestamps:true});

export default mongoose.model("CustomCard", customCardSchema);