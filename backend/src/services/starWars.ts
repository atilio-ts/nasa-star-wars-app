import axios from 'axios';
import { StarshipData } from '../types/starWars';

const STAR_WARS_API_URL = process.env.STAR_WARS_API_URL ?? "";

export default class StarWarsService {
  
  /**
   * Retrieves information about starships.
   *
   * @return {Promise<StarshipData>} - A promise that resolves with the data of the starship.
   */
  static async getStarshipData(name: string): Promise<Array<StarshipData>>{
    try{
      
      const response = await axios.get(`${STAR_WARS_API_URL}?search=${name}`);
      console.log(response?.data);
      return response?.data.results as Array<StarshipData>;
    }catch(error){
      throw(error);
    }
  }
}