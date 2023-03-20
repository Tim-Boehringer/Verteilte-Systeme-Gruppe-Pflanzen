const swaggerDocsCustomer = {
  swagger: "2.0",
  info: {
    version: "1.0.0",
    title: "Example REST API Plants Store Service",
    description: "API for a Plant Store",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  host: "localhost:4000",
  basePath: "/customers",
  tags: [
    {
      name: "Customers",
      description: "the customers in the database",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/": {
      get: {
        tags: ["Customers"],
        summary: "Get all customers that exist in the system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Customers",
            },
          },
        },
      },
      post: {
        tags: ["Customers"],
        summary: "Add a new customer",
        parameters: [
          {
            name: "customer",
            in: "body",
            description: "Plant to be added",
            schema: {
              $ref: "#/definitions/Customers",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/Customers",
            },
          },
          400: {
            description: "Validators for the inpur weren't matched",
          },
        },
      },
    },
    "/{id}": {
      get: {
        tags: ["Customers"],
        summary: "Get a specific customer by its id",
        parameters: [
          {
            name: "id",
            in: "body",
            description: "Id of the customer searched for",
            schema: {
              $ref: "#/definitions/Customers",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Customers",
            },
          },
        },
      },
    },
    "/search": {
      get: {
        tags: ["Customers"],
        summary: "Get a specific customer by title",
        parameters: [
          {
            name: "name",
            in: "path",
            description: "Name of the customer searched for",
            schema: {
              $ref: "#/definitions/Customers",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Customers",
            },
          },
        },
      },
    },
  },
  definitions: {
    Plants: {
      required: ["name", "adress", "email"],
      properties: {
        name: {
          type: "string",
        },
        address: {
          type: "string",
        },
        email: {
          type: "string",
        },
      },
    },
  },
};

export default swaggerDocsCustomer;
