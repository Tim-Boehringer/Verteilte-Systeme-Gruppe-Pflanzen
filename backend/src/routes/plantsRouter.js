import express from "express";
import {
  getAllPlants,
  findPlants,
  findPlantsById,
  addPlants,
} from "../controllers/plantsControllers.js";

const router = express.Router();

router.get("/", getAllPlants);
router.get("/search", findPlants);
router.get("/:id", findPlantsById);
router.post("/add", addPlants);

export default router;
