import { Router } from "express"
import { StarWarsController } from '../controllers/starWars';
export const StarWarsRouter = Router();

StarWarsRouter.get('/api/starWars/millenniumFalcon', StarWarsController.getMillenniumFalconData);