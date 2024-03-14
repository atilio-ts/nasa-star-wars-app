import { Router } from "express"
import { NasaController } from '../controllers/nasa';
export const NasaRouter = Router();

//this could also be /nasa/planets/mars/pictures?parameters
NasaRouter.get('/api/nasa/marsRandomPictures', NasaController.getMarsRandomPictures);