import { object, number } from 'yup';

export const nasaApiRequestSchema = object().shape({
    page: number().positive().required()
}).noUnknown(true);
