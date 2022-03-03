import { Application } from "express";

import container from "./../dependency-injection/index";
import { shared } from "./shared";
import { user } from "./user";

export const version = process.env.VERSION || "v1";
export const loadApiEndpoints = (app: Application): void => {
  user(app, container, version);
  shared(app, container, version);
};
