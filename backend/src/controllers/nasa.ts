import { Request, Response } from 'express';
import NasaService from '../services/nasa';
import { handleErrorResponse } from "../helpers/errorHandler";

export class NasaController {
  /**
   * Gets an array of mars pictures
   *
   * @param {Request} req - The request object.
   * @param {Response} res - The response object.
   * @return {Promise<void>} - A promise that resolves with no value.
   */
  static async getMarsRandomPictures(req: Request, res: Response):Promise<void> {
    try {
      const pictures = await NasaService.getMarsRandomPictures();
      res.status(200).send({data: pictures});
    } catch (error) {
      handleErrorResponse(res, error);
    }
  }
}