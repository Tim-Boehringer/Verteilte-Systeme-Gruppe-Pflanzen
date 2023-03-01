const swaggerDocpot = {
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
  basePath: "/pots",
  tags: [
    {
      name: "Pots",
      description: "the pots in the database",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/": {
      get: {
        tags: ["Pots"],
        summary: "Get all pots that exist in the system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Pots",
            },
          },
        },
      },
      post: {
        tags: ["Pots"],
        summary: "Add a new pot",
        parameters: [
          {
            name: "pot",
            in: "body",
            description: "Pot to be added",
            schema: {
              $ref: "#/definitions/Pots",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/Pots",
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
        tags: ["Pots"],
        summary: "Get a specific pot by its id",
        parameters: [
          {
            name: "id",
            in: "body",
            description: "Id of the pot searched for",
            schema: {
              $ref: "#/definitions/Pots",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Pots",
            },
          },
        },
      },
    },
    "/search": {
      get: {
        tags: ["Pots"],
        summary: "Get a specific pot by name",
        parameters: [
          {
            name: "name",
            in: "path",
            description: "Name of the pot searched for",
            schema: {
              $ref: "#/definitions/Pots",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Pots",
            },
          },
        },
      },
    },
  },
  definitions: {
    Pots: {
      required: ["name", "dimensions", "material"],
      properties: {
        name: {
          type: "string",
        },
        category: {
          type: "string",
        },
        price: {
          type: "string",
        },
      },
    },
  },
};

export default swaggerDocpot;
