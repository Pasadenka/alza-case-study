import IRating from './IRating';
import Rating from './Rating';
import './RatingLine.css';

const RatingLine = ({ rating }: IRating) => {
    return (
        <div className="rating-line">
            <Rating rating={rating}/>
            <div className="actions">
                <div className="compare">⚖</div>
                <div className="favorites">♥</div>
            </div>
        </div>
    );
}

export default RatingLine;
