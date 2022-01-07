import FilterParameters from './FilterParameters';
import IFilterParameters from './IFilterParameters';
import IProductRequest from './IProductRequest';

export default class ProductRequest implements IProductRequest {
    constructor(
        public filterParameters: IFilterParameters = new FilterParameters(),
        public producers: [] = [],
        public sendPrices: boolean = true,
        public type: string = "action",
        public typeId: string = "",
        public branchId: string = "",
    ) {

    }
}
