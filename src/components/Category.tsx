import './Category.css';
import ICategory from "./ICategory";

const Category = ({icon, title, link}: ICategory) => {
    return (
      <a className="category" href={link}>
        <img src={icon} alt={`Obrázek ${title}`}/>
        <span>{title}</span>
      </a>
    );
}

export default Category;
