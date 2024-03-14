import axios from 'axios';
import { SpaceshipData } from '../types/starWars';

const STAR_WARS_API_URL = process.env.STAR_WARS_API_URL ?? "";

export default class StarWarsService {
  
  /**
   * Retrieves information about the Millennium Falcon.
   *
   * @return {Promise<SpaceshipData>} - A promise that resolves with the Millennium Falcon Data.
   */
  static async getMillenniumFalconData(): Promise<SpaceshipData>{
    try{
      const response = await axios.get(STAR_WARS_API_URL);
      return response?.data as SpaceshipData;
    }catch(error){
      throw(error);
    }
  }
}