import container from "../../../../src/app/dependency-injection";
import { InvalidArgumentError } from "../../../../src/contexts/shared/domain/valueObjects/InvalidArgumentError";
import UserBody from "../../../../src/contexts/user/application/dto/UserBody";

const userCreator = container.get("fake.user.create-user");

const userBody: UserBody = {
  name: "pauhoms",
  password: "test",
  description: "Liberal",
  profileName: "Pau Homs",
  webSide: "www.github.com/pauhoms",
};

beforeAll((done) => {
  done();
});

afterAll((done) => {
  done();
});

describe("user creator", () => {
  it("user should be created", async () => {
    const creat = async () => userCreator.run(userBody);
    expect(creat).not.toThrow(Error);
  });

  it("user should be have invaid username", () => {
    expect.assertions(1);
    userCreator.run({}).catch((err: Error) => {
      if (err instanceof InvalidArgumentError)
        expect(err.message).toBe(`name doesnt exist`);
    });
  });
});
