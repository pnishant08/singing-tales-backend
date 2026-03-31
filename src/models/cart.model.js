import mongoose from "mongoose";

const cartSchema =new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
   itmes:[
    {
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product"
        },
        quantity:{
            type:Number,
            default:1
        },
        customCard:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"CustomCard"
        }
    }]
},{timestamps:true});

export default mongoose.model("Cart", cartSchema);