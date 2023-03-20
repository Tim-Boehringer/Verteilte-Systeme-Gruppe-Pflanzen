import express from "express";
import {
  getAllPlants,
  findPlantsByName,
  findPlantsById,
  addPlants,
  deletePlants,
  patchPrice,
} from "../controllers/plantsController.js";

const router = express.Router();

router.get("/", getAllPlants);
router.get("/search", findPlantsByName);
router.get("/:id", findPlantsById);
router.post("/", addPlants);
router.patch("/patchPrice", patchPrice);
router.delete("/deleteByName", deletePlants);

export default router;
