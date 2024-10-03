import request from "supertest";
import { app, server } from "../app";
import connectionDB from "../database/connectionDB.js";

describe("crudBooks", () => {
  test("should return a response with status 200 and type json", async () => {
    const response = await request(app).get("/book");
    expect(response.statusCode).toBe(200);
    expect(response.headers["content-type"]).toContain("application/json");
  });
  afterAll(() => {
    connectionDB.close();
    server.close();
  });
});
