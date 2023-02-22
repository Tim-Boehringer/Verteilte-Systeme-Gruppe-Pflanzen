import { check, validationResult } from "express-validator";

const plants = [
  {
    id: 0,
    name: "Efeu",
    category: "Kletterpflanze",
    price: "19€",
  },
  {
    id: 1,
    name: "Tulpe",
    category: "Blume",
    price: "1.20€",
  },
];

export const getAllPlants = (req, res) => {
  res.status(200).send(plants);
};

export const findPlants = (req, res) => {
  let result = plants.filter((plant) => plant.name == req.query.name);
  res.status(200).send(result);
};

export const findPlantsById = (req, res) => {
  let plants = plants.find((p) => p.id == req.params.id);
  res.status(200).send(plant);
};

export const addPlants = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let plants = req.body;
  plants.push(plant);
  res.status(201).send(`Added ${plant.name} to plant collection`);
};

// attached as second param in a route
export const newPlantValidators = [
  check("name").notEmpty().withMessage("name field required"),
  check("category").notEmpty().withMessage("category field required"),
  check("price").notEmpty().withMessage("price field required"),
];
