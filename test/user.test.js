const app = require("../server");
const request = require("supertest");

const { getUsers, usersData } = require("../controllers/userController");

jest.mock("../controllers/userController.js");

describe("GET /api/usersData", () => {
  it("should return 200 status code", async () => {
    const users = [
      { id: 1, name: "sandeep", city: "nagpur" },
      { id: 2, name: "john", city: "pune" },
    ];

    usersData.mockImplementation(async () => users);
    const response = await request(app).get("/api/usersData");
    expect(response.status).toBe(200);
  });
}, 10000);
