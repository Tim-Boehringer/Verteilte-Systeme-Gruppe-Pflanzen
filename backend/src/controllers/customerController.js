import { check, validationResult } from "express-validator";
import { Customers } from "../models/customers.js";

const customer = [
  {
    id: 0,
    name: "Maria Hummer",
    address: "Müllerstraße 12",
    email: "maria.hummer@gmail.com",
  },
  {
    id: 1,
    name: "Hans Huber",
    address: "Schildkrötenweg 33",
    email: "hans.huber33@gmail.com",
  },
];

export const getAllCustomer = async (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3000");
  const customers = await Customers.find();
  res.status(200).send(customers);
};

export const findCustomersByName = async (req, res) => {
  let result = await Customers.find({ name: req.query.name });
  res.status(200).send(result);
};

export const findCustomersById = async (req, res) => {
  let book = await Customers.findById(req.params.id);
  res.status(200).send(customers);
};

export const addCustomers = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const customers = new Customers({
    name: req.body.name,
    adress: req.body.address,
    email: req.body.email,
  });

  customers.save(customers).then((todo) => res.status(201).send(todo));
};
export const deleteCustomers = (req, res) => {
  Customers.deleteOne({ name: req.query.name });
  res.status(200);
};

export const patchEmail = (req, res) => {
  Customers.updateOne(
    { name: req.query.name },
    { email: req.query.email },
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
  check("address").notEmpty().withMessage("address field required"),
  check("email").notEmpty().withMessage("email field required"),
];
