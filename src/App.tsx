import { useState, useEffect } from 'react';
import logo from './assets/logo.svg';
import './App.css';
import Categories from './components/Categories';
import Products from './components/Products';
import Carousel from './components/Carousel';
import Loader from './components/Loader';
import ErrorModal from './components/ErrorModal';

const App = () => {
  const [isLoadingCategories, setLoadingCategories] = useState<boolean>(true);
  const [isLoadingCarousel, setLoadingCarousel] = useState<boolean>(true);
  const [isLoadingProducts, setLoadingProducts] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

    useEffect(() => {
    }, []);

    function onCategoriesLoading(isLoading: boolean) {
      setLoadingCategories(isLoading);
    }
    function onCarouselLoading(isLoading: boolean) {
      setLoadingCarousel(isLoading);
    }
    function onProductsLoading(isLoading: boolean) {
      setLoadingProducts(isLoading);
    }

    function onError(msg: string) {
      setErrorMsg(msg);
      setIsError(true);
    }

    function onErrorClose() {
      setIsError(false);
    }

  return (
    <div className="app">
      <Loader show={isLoadingCategories || isLoadingCarousel || isLoadingProducts}/>
      <ErrorModal show={isError} message={errorMsg} onClose={onErrorClose}/>
      <div className='header'>
        <img src={logo} width="20px" height="20px" alt='logo'/>
        ALZON
        <strong>domácí úkol</strong>
      </div>
      <div className="container">
        <Categories onLoadingData={onCategoriesLoading} onError={onError}/>
      </div>
      <div className="container">
        <Carousel onLoadingData={onCarouselLoading} onError={onError}/>
      </div>
      <div className="container">
        <Products onLoadingData={onProductsLoading} onError={onError}/>
      </div>
    </div>
  );
}

export default App;
