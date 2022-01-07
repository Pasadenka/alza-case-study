import IProductResponseData from "./IProductResponseData";

export default interface IProductResponse {
    err: number;
    msg: string;
    vzt: number;
    user_name: string;
    basket_cnt: number;
    basket_total_cnt: number;
    user_id: number;
    favCnt: number;
    alzaCredit: string;
    countryID: number;
    countryPhonePrefix: string;
    serverTime: number;
    data_cnt: number;
    data: IProductResponseData[];
}
