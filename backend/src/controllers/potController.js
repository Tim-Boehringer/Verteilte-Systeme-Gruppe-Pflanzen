import { check, validationResult } from "express-validator";
import { Pots } from "../models/pots.js";

const pots = [
  {
    id: 0,
    name: "Alutopf",
    dimensions: "25x15cm",
    material: "Aluminium",
  },
  {
    id: 1,
    name: "Tontopf",
    dimensions: "10x12cm",
    material: "Ton",
  },
];

export const getAllPots = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const pots = await Pots.find();
  res.status(200).send(pots);
};

export const findPotsByName = async (req, res) => {
  let result = await Pots.find({ name: req.query.name });
  res.status(200).send(result);
};

export const findPotsById = async (req, res) => {
  let book = await Pots.findById(req.params.id);
  res.status(200).send(plants);
};

export const addPots = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const pots = new Pots({
    name: req.body.name,
    dimensions: req.body.dimensions,
    material: req.body.material,
  });

  pots.save(pots).then((todo) => res.status(201).send(todo));
};

// attached as second param in a route
export const newPlantValidators = [
  check("name").notEmpty().withMessage("name field required"),
  check("maße").notEmpty().withMessage("dimensions field required"),
  check("material").notEmpty().withMessage("material field required"),
];
