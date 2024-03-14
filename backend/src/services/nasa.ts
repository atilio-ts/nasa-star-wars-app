import axios from 'axios';
import { MarsPicture } from '../types/nasa';

const NASA_API_KEY = process.env.NASA_API_KEY ?? "" ;
const NASA_MARS_PICTURES_API_URL = process.env.NASA_MARS_PICTURES_API_URL ?? "";

export default class NasaService {
  
  /**
   * Retrieves an account by its account number.
   *
   * @return {Promise<Array<MarsPicture>>} - A promise that resolves to an array of mars pictures.
   */
  static async getMarsRandomPictures(): Promise<Array<MarsPicture>>{
    try{
      const randomPageNumber = Math.round(Math.random()*30);
      const response = await axios.get(`${NASA_MARS_PICTURES_API_URL}&page=${randomPageNumber}&api_key=${NASA_API_KEY}`);
      return response?.data?.photos as [MarsPicture];
    }catch(error){
      throw(error);
    }
  }

}