import IFilterParametersParams from './IFilterParametersParams';

export default class FilterParametersParams implements IFilterParametersParams {
    constructor(
        public tId: number = 0,
        public v: [] = [],
    ) {}
}
