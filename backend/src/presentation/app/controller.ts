import { Request, Response } from "express";
import fs from "fs";
import csvParser from "csv-parser";

import { CustomError } from "../../domain/errors/custom.error";
import { fileModel } from "../../data/models/file.model";

export class AppController {
  constructor() {}

  private handleError(error: any, res: Response) {
    if (error instanceof CustomError) {
      return res
        .status(Number(error.statusCode))
        .json({ error: error.message });
    }
    return res.status(500).json({ error: `internal server error ${error}` });
  }

  uploadFile = async (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: "No file was provided" });
    }

    const results: any = [];
    fs.createReadStream(req.file.path)
      .pipe(csvParser())
      .on("data", async (data: any) => {
        results.push(data);
        //save data in the database no duplicate phone
        await fileModel.findOneAndUpdate({ phone: data.phone }, data, { upsert: true });
      })
      .on("end", () => {
        res.status(200).json({ message: "El archivo se cargó correctamente" });
      })
      .on("error", (error) => {
        this.handleError(error, res);
      });
  };

  getUsers = async (req: Request, res: Response) => {
    try {
      const params = req.query.q;
      let users;
      if (params) {
        //Look for users that match the query
        users = await fileModel.find({ name: new RegExp(params.toString(), 'i') });
      } else {
        users = await fileModel.find();
      }
      res.status(200).json(users);
    } catch (error) {
      this.handleError(error, res);
    }
  }
}
