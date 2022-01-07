import IRating from './IRating';
import './Rating.css';

const Rating = ({ rating }: IRating) => {
    const style: { [key: string]: string; } = {};

    if (rating > 0) {
        style.backgroundImage = `linear-gradient(90deg, #FCD514 ${rating*20}%, rgba(0,0,0,0) ${100-(rating*20)}%)`;
    }

    return (
        <div className="rating" style={style}>★★★★★</div>
    );
}

export default Rating;
