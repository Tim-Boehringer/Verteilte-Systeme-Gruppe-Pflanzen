import express from "express";
import {
  getAllPots,
  findPotsByName,
  findPotsById,
  addPots,
} from "../controllers/potsControllers.js";

const router = express.Router();

router.get("/", getAllPots);
router.get("/search", findPotsByName);
router.get("/:id", findPotsById);
router.post("/add", addPots);

export default router;
