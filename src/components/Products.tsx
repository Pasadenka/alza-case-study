import { useEffect, useRef, useState } from "react";
import api from "../api";
import ICategoryTabFilterResponseData from "../api/dto/ICategoryTabFilterResponseData";
import './Products.css';
import Product from "./Product";
import IContainerModule from "./IContainerModule";
import IProductResponseData from "../api/dto/IProductResponseData";

const Products = ({onLoadingData, onError}: IContainerModule) => {
    const isInited = useRef(false);
    const [filterTabs, setFilterTabs] = useState<ICategoryTabFilterResponseData[]>([]);
    const [products, setProducts] = useState<IProductResponseData[]>([]);

    useEffect(() => {
        async function loadProductTabs() {
            onLoadingData && onLoadingData(true);
            try {
                const filterTabsResponse: ICategoryTabFilterResponseData[] = await api.getProductTabs('category');
                
                if (filterTabsResponse.length === 0) {
                    onLoadingData && onLoadingData(false);
                    onError && onError('Nenačetli se žádné záložky');
                }
    
                filterTabsResponse[0].isSelected = true;
                setFilterTabs(filterTabsResponse);
                setProducts(await api.getProducts(filterTabsResponse[0].value));
            } catch(errorMsg) {
                onError && onError(errorMsg as string);
            } finally {
                onLoadingData && onLoadingData(false);
            }
        }

        if (!isInited.current) {
            loadProductTabs();
            isInited.current = true;
        }
    }, [onLoadingData, onError]);

    async function loadProducts(filter: number) {
        try {
            setProducts(await api.getProducts(filter));
        } catch(err) {
            onError && onError(err as string);
        } finally {
            onLoadingData && onLoadingData(false);
        }
    }

    function onTabItem(index: number) {
        filterTabs.forEach((tab:ICategoryTabFilterResponseData) => tab.isSelected = false);
        filterTabs[index].isSelected = true;
        setFilterTabs([...filterTabs]);
        onLoadingData && onLoadingData(true);
        loadProducts(filterTabs[index].value);
    }

    return (
      <div className="products">
        <div className="tab-items">
            {filterTabs.map((tab: ICategoryTabFilterResponseData, index: number) =>
                <button
                    className={`tab-item ${tab.isSelected ? 'selected' : null}`}
                    key={tab.value}
                    onClick={() => onTabItem(index)}
                >
                    {tab.name}
                </button>
            )}
        </div>
        <div className="products-list">
            {products.map((product: IProductResponseData, index: number) => 
                <Product
                    key={index}
                    img={product.img}
                    title={product.name}
                    rating={product.rating}
                    description={product.spec}
                    price={product.price}
                    priceWithoutVat={product.priceWithoutVat}
                    url={product.url}
                    avail={product.avail}
                    availPostfix={product.avail_postfix}
                />
            )}
        </div>
      </div>
    );
}

export default Products;
