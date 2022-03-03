import UserRepository from "../../domain/repositories/UserRepository";
import User from "../../domain/User";

class FakerUserRepository implements UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  async save(user: User): Promise<void> {
    await this.users.push(user);
  }
}

export default FakerUserRepository;
