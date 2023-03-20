import { check, validationResult } from "express-validator";
import { Plants } from "../models/plants.js";

export const getAllPlants = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const plants = await Plants.find();
  res.status(200).send(plants);
};

export const findPlantsByName = async (req, res) => {
  let result = await Plants.find({ name: req.query.name });
  res.status(200).send(result);
};

export const findPlantsById = async (req, res) => {
  let result = await Plants.findById(req.params.id);
  res.status(200).send(result);
};

export const addPlants = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const plants = new Plants({
    name: req.body.name,
    category: req.body.category,
    price: req.body.price,
  });

  plants.save(Plants).then((todo) => res.status(201).send(todo));
};

export const deletePlants = (req, res) => {
  Plants.deleteOne({ name: req.query.name });
  res.status(200);
};

export const patchPrice = (req, res) => {
  Plants.updateOne(
    { name: req.query.name },
    { price: req.query.price },
    function (err, docs) {
      if (err) {
        return res.status(400).json(err);
      } else {
        res.status(200);
      }
    }
  );
};

// attached as second param in a route
export const newPlantValidators = [
  check("name").notEmpty().withMessage("name field required"),
  check("category").notEmpty().withMessage("category field required"),
  check("price").notEmpty().withMessage("price field required"),
];
