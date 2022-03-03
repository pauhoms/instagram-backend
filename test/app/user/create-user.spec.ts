import request from "supertest";

import app from "../../../src/app/app";
import { version } from "../../../src/app/routes/index";
import UserBody from "../../../src/contexts/user/application/dto/UserBody";
import MongoEnvironmentArranger from "../../context/shared/infrastructure/persistance/MongoEnvirommentArranger";

const userBody: UserBody = {
  name: "pauhoms",
  password: "test",
  description: "Liberal",
  profileName: "Pau Homs",
  webSide: "www.github.com/pauhoms",
};

beforeAll((done) => {
  MongoEnvironmentArranger.arrange();
  done();
});

afterAll((done) => {
  MongoEnvironmentArranger.arrange();
  done();
});

describe("POST create user", () => {
  it("user should be created", async () => {
    await request(app)
      .post(`/api/${version}/user/create`)
      .send(userBody)
      .expect(201);
  });

  it("user should be have invaid username", async () => {
    await request(app).post(`/api/${version}/user/create`).expect(400);
  });
});
