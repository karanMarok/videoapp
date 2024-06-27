import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) {
      return null;
    }

    //Upload File
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    //File Uploaded Successfully
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    //Unlink local saved temp file from local server
    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };
