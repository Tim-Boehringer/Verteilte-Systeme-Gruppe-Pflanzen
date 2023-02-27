import express from "express";
import {
  getAllCustomers,
  findCustomersByName,
  findCustomersById,
  addCustomers,
} from "../controllers/customerControllers.js";

const router = express.Router();

router.get("/", getAllCustomers);
router.get("/search", findCustomersByName);
router.get("/:id", findCustomersById);
router.post("/add", addCustomers);

export default router;
