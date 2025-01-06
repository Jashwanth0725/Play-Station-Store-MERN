import mongoose, { trusted } from "mongoose";
// import { Category } from "./category.model";

const productSchema = new mongoose.Schema(
    {
        id:
        {
            type: String,
            required: true,
            unique: true
        },
        name:
        {
            type: String,
            required: true
        },
        description:
        {
            type: String,
            required: true
        },
        price:
        {
            type: Number,
            default: 0
        },
        stars:
        {
            type: Number,
            default: 1
        },
        category:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: true
        },
        owner:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }

    }, { timestamps: true });

export const Product = mongoose.model("Product", productSchema)