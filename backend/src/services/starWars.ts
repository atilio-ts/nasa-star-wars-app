import axios from 'axios';
import { SwapiData } from '../types/starWars';

const STAR_WARS_API_URL = process.env.STAR_WARS_API_URL ?? "";

export default class StarWarsService {
  
  /**
   * Retrieves information about starships or characters.
   *
   * @return {Promise<SwapiData | null>} - A promise that resolves with the data of the starship or character if they exist.
   */
  static async getSwapiData(type: string, name: string): Promise<SwapiData | null>{
    try{
      const response = await axios.get(`${STAR_WARS_API_URL}/${type}/?search=${name}`);
      if(response?.data.results[0]){
        if (type == 'starship')
          return ({
            name: response?.data.results[0].name,
            model: response?.data.results[0].model,
            passengers: response?.data.results[0].passengers,
            manufacturer: response?.data.results[0].manufacturer
          } as SwapiData)
        else
        return ({
          name: response?.data.results[0].name,
          gender: response?.data.results[0].gender,
          hairColor: response?.data.results[0].hairColor,
          height: response?.data.results[0].height
        } as SwapiData)
      }
      return null;
    }catch(error){
      throw(error);
    }
  }
}