import { v2 as cloudinary } from "cloudinary";
import productModel from "../models/productModel.js";
// Add product
const addProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];
    const images = [image1, image2, image3, image4].filter(
      (item) => item !== undefined,
    );

    let imageUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return result.secure_url;
      }),
    );

    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestSeller: bestseller === "true",
      sizes: JSON.parse(sizes),
      image: imageUrl,
      date: Date.now(),
    };

    console.log(req.body);
    console.log(productData);
    const product = new productModel(productData);
    await product.save();
    res.json({ success: true, message: "Product added successfully" });
  } catch (error) {
    res.json({
      success: false,
      message: "Error adding product",
      error: error.message,
    });
  }
};

// List product
const listProduct = async (req, res) => {
  try {
  } catch (error) {}
};

// Removing product
const removeProduct = async (req, res) => {
  try {
  } catch (error) {}
};

// Single product Info
const singleProduct = async (req, res) => {
  try {
  } catch (error) {}
};

export { addProduct, listProduct, removeProduct, singleProduct };
