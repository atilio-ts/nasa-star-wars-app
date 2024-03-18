import axios from 'axios';
import { MarsPictureResponse, MarsPicture } from '../types/nasa';

const NASA_API_KEY = process.env.NASA_API_KEY ?? "" ;
const NASA_MARS_PICTURES_API_URL = process.env.NASA_MARS_PICTURES_API_URL ?? "";

export default class NasaService {
  
  /**
   * Retrieves an array of random mars pictures.
   *
   * @return {Promise<Array<MarsPicture>>} - A promise that resolves to an array of mars pictures.
   */
  static async getMarsRandomPictures(): Promise<Array<MarsPicture>>{
    try{
      const randomPageNumber = Math.round(Math.random()*30);
      const response = await axios.get(`${NASA_MARS_PICTURES_API_URL}&page=${randomPageNumber}&api_key=${NASA_API_KEY}`);
      
      const pictures = response?.data?.photos as [MarsPictureResponse];
      return pictures.map((picture) => {
        return { id: picture.id, img_src: picture.img_src}
      }) as Array<MarsPicture>;
    }catch(error){
      throw(error);
    }
  }

}