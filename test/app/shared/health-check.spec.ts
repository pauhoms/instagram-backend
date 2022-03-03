import request from "supertest";

import app from "../../../src/app/app";
import { version } from "../../../src/app/routes/index";
import MongoEnvironmentArranger from "../../context/shared/infrastructure/persistance/MongoEnvirommentArranger";

beforeAll((done) => {
  MongoEnvironmentArranger.arrange();
  done();
});

afterAll((done) => {
  MongoEnvironmentArranger.arrange();
  done();
});

describe("GET health check", () => {
  it("should return 200 OK", async () => {
    const response = await request(app)
      .get(`/api/${version}/status`)
      .expect(200);

    expect(response.body.mongo_status).toEqual("ok");
  });
});
