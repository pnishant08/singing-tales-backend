import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ["Birthday", "Aniversary", "Wedding", "Festival", "Custom"],
    },
    image: {
        type: String,
        default: ""
    },
    isCustomizable: {
        type: Boolean,
        default: false
    },
    isAvailable: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}
    ,
    {
        timestamps: true
    })

export default mongoose.model("Product", productSchema)  