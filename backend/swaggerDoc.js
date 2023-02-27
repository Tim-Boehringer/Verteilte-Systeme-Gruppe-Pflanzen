const swaggerDocs = {
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
  basePath: "/plants",
  tags: [
    {
      name: "Plants",
      description: "the plants in the database",
    },
  ],
  consumes: ["application/json"],
  produces: ["application/json"],
  paths: {
    "/": {
      get: {
        tags: ["Plants"],
        summary: "Get all plants that exist in the system",
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Plants",
            },
          },
        },
      },
      post: {
        tags: ["Plants"],
        summary: "Add a new plant",
        parameters: [
          {
            name: "plant",
            in: "body",
            description: "Plant to be added",
            schema: {
              $ref: "#/definitions/Plants",
            },
          },
        ],
        responses: {
          201: {
            description: "Created",
            schema: {
              $ref: "#/definitions/Plants",
            },
          },
        },
      },
    },
    "/{id}": {
      get: {
        tags: ["Plants"],
        summary: "Get a specific plant by its id",
        parameters: [
          {
            name: "id",
            in: "body",
            description: "Id of the plant searched for",
            schema: {
              $ref: "#/definitions/Plants",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/Plants",
            },
          },
        },
      },
    },
    "/search": {
      get: {
        tags: ["Plants"],
        summary: "Get a specific plant by title",
        parameters: [
          {
            name: "name",
            in: "path",
            description: "Name of the plant searched for",
            schema: {
              $ref: "#/definitions/Plants",
            },
          },
        ],
        responses: {
          200: {
            description: "OK",
            schema: {
              $ref: "#/definitions/PLants",
            },
          },
        },
      },
    },
  },
  definitions: {
    Plants: {
      required: ["name", "category", "price"],
      properties: {
        name: {
          type: "string",
        },
        category: {
          type: "string",
        },
        price: {
          type: "integer",
        },
      },
    },
  },
};

export default swaggerDocs;
