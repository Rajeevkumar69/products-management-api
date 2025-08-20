import express from "express";
import {
     createProduct,
     getProducts,
     getProductById,
     updateProduct,
     deleteProduct,
     deleteAllProducts,
     findProductsByCondition,
} from "../controller/product-controller.js";

const router = express.Router();


router.get("/", getProducts);
router.post("/create", createProduct);
router.get("/:id", getProductById);
router.patch("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);
router.delete("/delete-all", deleteAllProducts);
router.post("/search", findProductsByCondition);

export default router;
