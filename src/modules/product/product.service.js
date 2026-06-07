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
    if(search){
        filter.title={$regex:search,$options:"i"};
    }
    return await Product.find(filter);
};

export const getPoductById=async(id)=>{
    return await Product.findById(id);
}

export const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
  });
};

export const deleteProduct=async(id)=>{
    return await Product.findByIdAndDelete(id);
}