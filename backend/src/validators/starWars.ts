import { object, string } from 'yup';

export const startWarsApiRequestSchema = object().shape({
    name: string().required(),
}).noUnknown(true);
