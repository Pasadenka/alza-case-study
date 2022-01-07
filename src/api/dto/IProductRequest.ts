import IFilterParameters from "./IFilterParameters";

export default interface IProductRequest {
    filterParameters: IFilterParameters;
    producers: [];
    sendPrices: boolean;
    type: string;
    typeId: string;
    branchId: string;
}
