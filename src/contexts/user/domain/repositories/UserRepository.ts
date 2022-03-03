import User from "../User";

interface UserRepository {
  save(user: User): Promise<void>;
}

export default UserRepository;
