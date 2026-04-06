import Product from "../../models/product.model.js";

export const createProduct =async(data)=>{
   return await Product.create(data);
};

export const getAllproducts =async(query)=>{
    const {category,search}=query;
    const filter={};
    if(category){
        filter.category=category;
    }
    if(seach){
        filter.title={$regex:search,$options:"i"};
    }
    return await Product.find(filter);
};

export const getPoductById=async(id)=>{
    return await Product.findById(id);
}

export const deleteProduct=async(id)=>{
    return await Product.findByIdAndDelete(id);
}