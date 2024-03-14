import { Request, Response } from 'express';
import StarWarsService from '../services/starWars';
import { handleErrorResponse } from "../helpers/errorHandler";

export class StarWarsController {
  /**
   * Creates an account.
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @return {Promise<void>} - A promise that resolves with no value.
   */
  static async getMillenniumFalconData(req: Request, res: Response) {
    try {
      let millenniumFalconData = await StarWarsService.getMillenniumFalconData();
      res.status(200).send({ data: millenniumFalconData });
    } catch (error) {
      handleErrorResponse(res, error);
    }
  }
}