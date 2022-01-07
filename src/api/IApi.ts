import ICategoriesResponse from "./dto/ICategoriesResponse";
import ICategoryTabFilterResponseData from "./dto/ICategoryTabFilterResponseData";
import IProductResponseData from "./dto/IProductResponseData";

export default interface IApi {
    getCategories(category: string): Promise<ICategoriesResponse>;
    getProducts(filter: number): Promise<IProductResponseData[]>;
    getProductTabs(category: string): Promise<ICategoryTabFilterResponseData[]>;
}
