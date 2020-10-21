import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js"; // these are controllers which fetch data from mongoDB

router.route("/").get(getProducts);

router.route("/:id").get(getProductById);

export default router;
