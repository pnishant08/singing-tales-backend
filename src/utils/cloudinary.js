import cloudinary from "../config/cloudinary.js";
import fs from "fs";

export const uploadOnCloudinary = async (
  localFilePath,
  folder = "singing-tales/products"
) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      folder,
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    if (localFilePath && fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    console.log("Cloudinary upload error:", error);
    return null;
  }
};
