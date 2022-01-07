import { useEffect, useRef, useState } from 'react';
import api from '../api';
import IProductResponseData from '../api/dto/IProductResponseData';
import './Carousel.css';
import CarouselItem from './CarouselItem';
import IContainerModule from './IContainerModule';

function arrayRotate(arr: any[], reverse: boolean) {
    if (reverse)
        arr.unshift(arr.pop());
    else
        arr.push(arr.shift());
    return arr;
}

const Carousel = ({onLoadingData, onError}: IContainerModule) => {
    const isInited = useRef(false);
    const [isSlidingLeft, slideLeft] = useState(false);
    const [isSlidingRight, slideRight] = useState(false);
    const [isBaseState, setBaseState] = useState(true);
    const [cards, rotate] = useState([{}]);
    const [cardsLimit, setCardsLimit] = useState(4);
    
    useEffect(() => {
        function handleResize(): void {
            const width = window.innerWidth;
            if (width >= 950) {
                setCardsLimit(4);
            } else if (width < 950 && width >= 640) {
                setCardsLimit(3);
            } else if (width < 640 && width >= 376) {
                setCardsLimit(2);
            } else {
                setCardsLimit(1);
            }
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        
        if (!isInited.current) {
            onLoadingData && onLoadingData(true);
            api.getProducts()
            .then((cards: IProductResponseData[]) => {
                rotate(cards);
            })
            .catch((errorMsg: string) => onError && onError(errorMsg))
            .finally(() => onLoadingData && onLoadingData(false));
            isInited.current = true;
        }
        
    }, [onLoadingData, onError]);

    function atferSlide(): void {
        if(isSlidingLeft) {
            slideLeft(false);
            rotate(arrayRotate(cards, true));
        } else {
            slideRight(false);
            rotate(arrayRotate(cards, false));
        }
        setBaseState(true);
    }

    return (
        <div className="carousel">
            <h1>Nejprodávanější</h1>
            <div className='container'>
                {cards.length > cardsLimit &&
                    <button onClick={() => { slideLeft(true); setBaseState(false); }}>
                        <svg viewBox="0 0 100 100">
                            <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"></path>
                        </svg>
                    </button>
                }
                
                <div className={`
                    slider
                    cards-limit-${cardsLimit}
                `}>
                {cards.map((card: any, index: number) =>
                    index === 0 && cards.length > cardsLimit ?
                    <div 
                    key={index}
                    className={
                        `
                        item
                        ${isSlidingRight ? `slide-p${cardsLimit}-right` : ""}
                        ${isSlidingLeft ? `slide-p${cardsLimit}-left` : ""}
                    ${isBaseState ? `p${cardsLimit}-0` : "0"}
                    `}
                    onAnimationEnd={atferSlide}
                    >
                        <CarouselItem
                            img={card.img}
                            title={card.name}
                            description={card.spec}
                            rating={card.rating}
                            price={card.price}
                            url={card.url}
                        />
                    </div>
                    :
                    <div
                        key={index}
                        className='item'
                        >
                            <CarouselItem
                                img={card.img}
                                title={card.name}
                                description={card.spec}
                                rating={card.rating}
                                price={card.price}
                                url={card.url}
                            />
                            </div>
                )}
                </div>
                {cards.length > cardsLimit &&
                    <button onClick={() => {slideRight(true); setBaseState(false);}}>
                        <svg viewBox="0 0 100 100">
                            <path
                                d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" 
                                transform="translate(100, 100) rotate(180)"></path>
                        </svg>
                    </button>
                }
            </div>
        </div>
    );
}

export default Carousel;
