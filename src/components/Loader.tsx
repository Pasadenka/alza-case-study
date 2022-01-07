import './Loader.css';
import spinner from '../assets/spinner.gif';
import ILoader from './ILoader';

const Loader = ({show = false}: ILoader) => {
    const className = {
        hidden: show ? '' : 'hidden',
        toString() {
            return `loader ${this.hidden}`;
        }
    };

    return (
        <div className={`${className}`}>
            <img src={spinner} alt='spinner'/>
        </div>
    );
}

export default Loader;