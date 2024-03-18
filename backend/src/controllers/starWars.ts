import { Request, Response } from 'express';
import StarWarsService from '../services/starWars';
import { handleErrorResponse } from "../helpers/errorHandler";
import * as StarWarsValidator from "../validators/starWars";
import { validatorOptions } from '../validators/validatorOptions';

export class StarWarsController {
  /**
   * Retrieves starship data based in the name paramter.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @return {Promise<void>} - A promise that resolves with no value.
   */
  static async getStarshipData(req: Request, res: Response) {
    try {
      const name = req.query.name?.toString() ?? "";
      await StarWarsValidator.getStarshipDataSchema.validate({name}, validatorOptions);

      let starshipData = await StarWarsService.getStarshipData(name);
      res.status(200).send({ data: starshipData });
    } catch (error) {
      handleErrorResponse(res, error);
    }
  }
}