import IFilterParametersParams from "./IFilterParametersParams";

export default interface IFilterParameters {
    id: number;
    isInStockOnly: boolean;
    newsOnly: boolean;
    wearType: number;
    orderBy: number;
    page: number;
    params: IFilterParametersParams;
}
