const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose"); 
describe("Incident API", () => {

  test("Create incident", async () => {

    const res = await request(app)
      .post("/api/incidents")
      .send({
        type: "Accident",
        description: "Test accident",
        location: "Colombo"
      });

    expect(res.statusCode).toBe(403);

  });

});

afterAll(async () => {
  await mongoose.connection.close();
});