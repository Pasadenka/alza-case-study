import { useEffect, useRef, useState } from "react";
import api from "../api";
import ICategoriesResponse from "../api/dto/ICategoriesResponse";
import ICategoriesResponseData from "../api/dto/ICategoriesResponseData";
import './Categories.css';
import Category from "./Category";
import IContainerModule from "./IContainerModule";

const Categories = ({onLoadingData, onError}: IContainerModule) => {
    const isInited = useRef(false);
    const [categories, setCategories] = useState<ICategoriesResponseData[]>([]);
    const [title, setTitle] = useState<string>('');

    useEffect(() => {

      async function loadCategories(): Promise<void> {
        try {
          const categoriesResponse: ICategoriesResponse = await api.getCategories('categories');
          setCategories(categoriesResponse.data);
          setTitle(categoriesResponse.name);
        } catch(err) {
            onError && onError(err as string);
        } finally {
            onLoadingData && onLoadingData(false);
        }
      }

      if (!isInited.current) {
        onLoadingData && onLoadingData(true);
        loadCategories();
        isInited.current = true;
      }

    }, [onLoadingData, onError]);

    return (
      <div className="categories">
        <h1>{title}</h1>
        <div className="items">
          {categories.map((category: ICategoriesResponseData) =>
            <Category
              key={category.url}
              title={category.name}
              link={category.url}
              icon={category.img}
            />
          )}
        </div>
      </div>
    );
}

export default Categories;
