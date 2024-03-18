import { Request, Response } from 'express';
import StarWarsService from '../services/starWars';
import { handleErrorResponse } from "../helpers/errorHandler";
import * as StarWarsValidator from "../validators/starWars";
import { validatorOptions } from '../validators/validatorOptions';

export class StarWarsController {
  /**
   * Retrieves swapi data based in their type and name paramter.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @return {Promise<void>} - A promise that resolves with no value.
   */
  static async getSwapiData(req: Request, res: Response) {
    try {
      const type = req.query.type?.toString() ?? "";
      const name = req.query.name?.toString() ?? "";

      await StarWarsValidator.getSwapiDataSchema.validate({type, name}, validatorOptions);

      let swapiData = await StarWarsService.getSwapiData(type, name);
      res.status(200).send({ data: swapiData });
    } catch (error) {
      handleErrorResponse(res, error);
    }
  }
}