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
        enum: ["Vintage", "Floral", "Modern", "Minimal", "Luxury"],
        default: "Vintage",
    },

    occasion: {
        type: String,
        enum: ["Birthday", "Anniversary", "Wedding", "Festival", "Custom"],
        required: true,
    },
    image: {
        type: String,
        default: ""
    },
    imagePublicId: {
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