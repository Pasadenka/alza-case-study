import ICategoryTabFilterResponseData from "./ICategoryTabFilterResponseData";

export default interface ICategoryTabFilterResponse {
    err: number;
    msg: string;
    data: ICategoryTabFilterResponseData[];
}
