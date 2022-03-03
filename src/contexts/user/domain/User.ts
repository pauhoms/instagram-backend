import { AggregateRoot } from "../../shared/domain/AggregateRoot";
import UserDescription from "./valueObjects/UserDescription";
import UserId from "./valueObjects/UserId";
import UserName from "./valueObjects/UserName";
import UserPassword from "./valueObjects/UserPassword";
import UserProfileName from "./valueObjects/UserProfileName";
import UserWebPage from "./valueObjects/UserWebPage";

class User extends AggregateRoot {
  constructor(
    private _id: UserId,
    private _name: UserName,
    private _password: UserPassword,
    private _description: UserDescription,
    private _profileName: UserProfileName,
    private _webSide: UserWebPage
  ) {
    super();
  }

  id(): UserId {
    return this._id;
  }

  name(): UserName {
    return this._name;
  }

  password(): UserPassword {
    return this._password;
  }

  description(): UserDescription {
    return this._description;
  }

  profileName(): UserProfileName {
    return this._profileName;
  }

  webSide(): UserWebPage {
    return this._webSide;
  }

  toPrimitives(): object {
    return {
      name: this._name,
      password: this._password,
      description: this._description,
      profile_name: this._profileName,
      web_side: this._webSide,
    };
  }
}

export default User;
