import { Router } from "express";
import { AppController } from "./controller";
import multer from 'multer';

const upload = multer({ dest: 'uploads/' });

export class UsersRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new AppController();

    router.post("/files", upload.single("file"), controller.uploadFile);
    router.get("/users", controller.getUsers);

    return router;
  }
}
