import express from "express";
import {addProduct, listProduct, removeProduct, singleProduct} from "../controllers/productController.js";
import upload from "../middleware/multer.js";

const productRouter = express.Router();

// Add product route
productRouter.post('/add',upload.fields([{name:"image1",maxCount:1},{name:"image2",maxCount:1},{name:"image3",maxCount:1},{name:"image4",maxCount:1}]), addProduct);

// List products route
productRouter.get('/list', listProduct);

// Remove product route
productRouter.post("/remove", removeProduct);

// Single product info route
productRouter.post('/single',singleProduct);

export default productRouter;


