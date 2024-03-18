export enum SelectedPage {
    Home = "home",
    NASA = "nasa",
    StarWars = "starwars",
}

export interface IPicture{
    id: number;

    img_src: string;

}

export interface ISwapiData{
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
    CHARACTER = 'people'
}