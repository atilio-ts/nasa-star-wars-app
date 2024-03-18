/* eslint-disable @typescript-eslint/ban-types */
export enum SelectedPage {
    Home = "home",
    NASA = "nasa",
    StarWars = "starwars",
}
  
export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}
  
export interface PictureInterface {
    id: number;
    sol: number;
    camera: Object;
    img_src: string;
    earth_date: string;
    rover: Object;
}