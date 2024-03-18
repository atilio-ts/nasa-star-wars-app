import { object, string } from 'yup';

export const getSwapiDataSchema = object().shape({
    type: string().required(),
    name: string().required()
}).noUnknown(true);
