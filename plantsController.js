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
