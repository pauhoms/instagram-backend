import { InvalidArgumentError } from "../../../shared/domain/valueObjects/InvalidArgumentError";
import UserRepository from "../../domain/repositories/UserRepository";
import User from "../../domain/User";
import UserDescription from "../../domain/valueObjects/UserDescription";
import UserId from "../../domain/valueObjects/UserId";
import UserName from "../../domain/valueObjects/UserName";
import UserPassword from "../../domain/valueObjects/UserPassword";
import UserProfileName from "../../domain/valueObjects/UserProfileName";
import UserWebPage from "../../domain/valueObjects/UserWebPage";
import UserBody from "../dto/UserBody";
import UserResponse from "../dto/UserResponse";

class UserCreator {
  constructor(private readonly userRepository: UserRepository) {}

  async run(body: UserBody): Promise<UserResponse> {
    this.guard(body);

    const user = new User(
      UserId.random(),
      new UserName(body.name),
      new UserPassword(body.password),
      new UserDescription(body.description),
      new UserProfileName(body.profileName),
      new UserWebPage(body.webSide)
    );

    await this.userRepository.save(user);

    return {
      id: user.id().toString(),
      name: user.name().toString(),
      description: user.description().toString(),
      profileName: user.profileName().toString(),
      webSide: user.webSide().toString(),
    } as UserResponse;
  }

  private guard(body: UserBody): void {
    if (body.name === undefined)
      throw new InvalidArgumentError(`name doesnt exist`);
  }
}

export default UserCreator;
