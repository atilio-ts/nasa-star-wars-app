import { object, string } from 'yup';

export const getStarshipDataSchema = object().shape({
    name: string().required()
}).noUnknown(true);
