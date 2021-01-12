/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const request = require("supertest");
const app = require("../build/app");

//Test for resizing an image for the first time
describe("GET /api/image/:fileName/resize ", () => {
  test("It should return the resized image and respond Ok", async () => {
    const response = await request(app).get("/api/image/london.jpg/resize?width=400&height=200");
    expect(response.statusCode).toBe(200);
    expect(response.type).toEqual('image/jpeg');
  });
});

//Test for resizing an image which not in the server
describe("GET /api/image/:fileName/resize ", () => {
  test("It should get error", async () => {
    const response = await request(app).get("/api/image/invalid.jpg/resize?width=400&height=200");
    expect(response.statusCode).toBe(404);
  });
});

