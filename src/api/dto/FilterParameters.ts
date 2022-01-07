import FilterParametersParams from './FilterParametersParams';
import IFilterParameters from './IFilterParameters';
import IFilterParametersParams from './IFilterParametersParams';

export default class FilterParameters implements IFilterParameters {
    constructor(
        public id: number = 0,
        public isInStockOnly: boolean = false,
        public newsOnly: boolean = false,
        public wearType: number = 0,
        public orderBy: number = 0,
        public page: number = 1,
        public params: IFilterParametersParams = new FilterParametersParams(),
    ){}
    
}
