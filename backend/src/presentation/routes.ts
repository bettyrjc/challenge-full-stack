import { Router } from "express";
import { UsersRoutes } from "./app/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    router.use(`/api/v1/`, UsersRoutes.routes );


    return router;
  }
}
