export interface MarsPicture {//I could also define camera and rover types 
    id: number;
    sol: number;
    camera: Object;
    img_src: string;
    earth_date: string;
    rover: Object;
}