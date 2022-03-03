import { Request, Response } from "express";

import { InvalidArgumentError } from "../../../contexts/shared/domain/valueObjects/InvalidArgumentError";
import UserCreator from "../../../contexts/user/application/create/UserCreator";
import UserBody from "../../../contexts/user/application/dto/UserBody";

class UserCreatorController {
  constructor(private readonly userCreator: UserCreator) {}

  async run(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userCreator.run(req.body as UserBody);

      res = res.status(201).send(user);
    } catch (error) {
      if (error instanceof InvalidArgumentError) {
        res = res.status(400);
      }
    }

    return res;
  }
}

export default UserCreatorController;
