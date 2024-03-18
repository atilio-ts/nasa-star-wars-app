export interface SwapiData {
    name: string;
    //starship
    model?: string;
    passengers?: string;
    manufacturer?: string;
    //person
    gender?: string;
    mass?: string;
    height?: string;
}

export enum searchReqType{
    STARSHIPS = 'starships',
    PEOPLE = 'people'
}