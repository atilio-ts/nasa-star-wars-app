import { object, string } from 'yup';
import { searchReqType } from '../types/starWars'
export const getSwapiDataSchema = object().shape({
    type: string().oneOf(Object.values(searchReqType)).required(),
    name: string().required()
}).noUnknown(true);
