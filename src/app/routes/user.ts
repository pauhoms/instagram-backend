import { Application, Request, Response } from "express";

import { Container } from "../../contexts/shared/infrastructure/Container";
import UserCreatorController from "../controllers/user/UserCreatorController";

export const user = (
  app: Application,
  container: Container,
  version: string
): void => {
  app.post(
    `/api/${version}/user/create`,
    async (req: Request, res: Response) => {
      const controller: UserCreatorController = container.get(
        "controllers.user.create-user"
      );

      await controller.run(req, res);
      res.end();
    }
  );
};
