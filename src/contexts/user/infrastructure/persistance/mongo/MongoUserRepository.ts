import { MongoRepository } from "../../../../shared/infrastructure/persistance/mongo/MongoRepository";
import UserRepository from "../../../domain/repositories/UserRepository";
import User from "../../../domain/User";

class MongoUserRepository
  extends MongoRepository<User>
  implements UserRepository
{
  protected moduleName(): string {
    return "user";
  }

  async save(user: User): Promise<void> {
    await this.persist(user.id().value, user);
  }
}

export default MongoUserRepository;
