import ICategoriesResponse from "./dto/ICategoriesResponse";
import ICategoryTabFilterResponse from "./dto/ICategoryTabFilterResponse";
import ICategoryTabFilterResponseData from "./dto/ICategoryTabFilterResponseData";
import IProductResponse from "./dto/IProductResponse";
import IProductResponseData from "./dto/IProductResponseData";
import ProductRequest from "./dto/ProductRequest";
import IApi from "./IApi";

const isAlzaMode = process.env.REACT_APP_ALZA_MODE === 'true';

class Api implements IApi {
    getCategories(category: string): Promise<ICategoriesResponse> {
        const response = new Promise<ICategoriesResponse>((resolve, reject) => {
            fetch(`data/${category}.json`)
            .then((response: Response) => response.json())
            .then((categories: ICategoriesResponse) => {
                if (categories.err === 0)
                    resolve(categories);
                else
                    reject(categories.msg);
            })
            .catch(error => reject(`Chyba komunikace: ${error}`));
        });

        return response;
    }

    private getProductsAlza(filter: number): Promise<IProductResponseData[]> {
        const request = new ProductRequest();
        request.filterParameters.id = 18855843;
        request.filterParameters.orderBy = filter;

        const response = new Promise<IProductResponseData[]>((resolve, reject) => {
            fetch('https://www.alza.cz/Services/RestService.svc/v2/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(request) ,
            })
            .then((response: Response) => response.json())
            .then((products: IProductResponse) => {
                if (products.err === 0)
                    resolve(products.data);
                else
                    reject(products.msg);
            })
            .catch(error => reject(`Chyba komunikace: ${error}`));
        });
        
        return response;
    }

    getProducts(filter: number = 0): Promise<IProductResponseData[]> {

        if (isAlzaMode) {
            return this.getProductsAlza(filter);
        }

        const response = new Promise<IProductResponseData[]>((resolve, reject) => {
            fetch(`data/products${filter === 0 ? '' : filter}.json`)
            .then((response: Response) => response.json())
            .then((products: IProductResponse) => {
                if (products.err === 0)
                    resolve(products.data);
                else
                    reject(products.msg);
            })
            .catch(error => reject(`Chyba komunikace: ${error}`));
        });
        
        return response;
    }

    getProductTabs(category: string): Promise<ICategoryTabFilterResponseData[]> {
        const response = new Promise<ICategoryTabFilterResponseData[]>((resolve, reject) => {
            fetch(`data/${category}tabfilter.json`)
            .then((response: Response) => response.json())
            .then((categoryTabFilter: ICategoryTabFilterResponse) => {
                if (categoryTabFilter.err === 0)
                    resolve(categoryTabFilter.data);
                else
                    reject((categoryTabFilter as any).msg);
            })
            .catch(error => reject(`Chyba komunikace: ${error}`));
        });
        
        return response;
    }
}

const api = new Api();

export default api;
