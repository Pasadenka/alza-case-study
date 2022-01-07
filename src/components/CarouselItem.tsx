import './CarouselItem.css';
import ICarouselItem from './ICarouselItem';
import Rating from './Rating';

const CarouselItem = ({img, title, rating, description, price, url}: ICarouselItem) => {

    return (
        <a className="carousel-item" href={url}>
            <img src={img} alt={title}/>
            <h1>{title}</h1>
            <Rating rating={rating}/>
            <p>{description}</p>
            <div className='price'>{price}</div>
        </a>
    );
}

export default CarouselItem;
