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
