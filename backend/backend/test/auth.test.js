const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");   // add this line

describe("Authentication API Tests", () => {

  const testUser = {
    name: "Test User",
    email: "test${Date.now()}@example.com",
    password: "123456",
    role: "Citizen",
    contact_number: "0771234567"
  };

  test("Register user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send(testUser);

    expect(res.statusCode).toBe(201);
  });

  test("Login user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: testUser.email,
        password: testUser.password
      });

    expect(res.statusCode).toBe(200);
  });

});

// 👇 ADD THIS PART HERE (bottom of file)

afterAll(async () => {
  await mongoose.connection.close();
});