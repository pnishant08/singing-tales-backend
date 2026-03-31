import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    items:[
        {
            product:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Product"
            },
            quantity:Number,
            price:Number,
            customCard:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"CustomCard"
            }
        }
    ],
    totalAmount:Number,
    shippingAddress:{
        address:String,
        city:String,
        pincode:String,
        state:String,
        country:String
    },
    paymentStatus:{
        type:String,
        enum:["pending","success","failed"],
        default:"pending"
    },
    orderStatus:{
        type:String,
        enum:["placed","processsing","shipped","delivered","cancelled"],
        default:"placed"
    }
}, {timestamps:true});

export default mongoose.model("Order", orderSchema);