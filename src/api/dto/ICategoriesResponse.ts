import ICategoriesResponseData from "./ICategoriesResponseData";

export default interface ICategoriesResponse {
    err: number;
    msg: string;
    name: string;
    data: ICategoriesResponseData[];
}
