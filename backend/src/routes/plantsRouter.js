import express from "express";
import {
  getAllPlants,
  findPlantsByName,
  findPlantsById,
  addPlants,
} from "../controllers/plantsController.js";

const router = express.Router();

router.get("/", getAllPlants);
router.get("/search", findPlantsByName);
router.get("/:id", findPlantsById);
router.post("/", addPlants);

export default router;
