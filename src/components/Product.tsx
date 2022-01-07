import './Product.css';
import IProduct from "./IProduct";
import RatingLine from "./RatingLine";
import BuyButton from "./BuyButton";

const Product = ({img, title, rating, description, price, priceWithoutVat, url, avail, availPostfix}: IProduct) => {
    
    return (
      <div className="product">
          <div className="top">
            <img src={img} onClick={() => window.location.href = url} alt={title}/>
            <RatingLine rating={rating}/>
            <a href={url}>{title}</a>
            <p>
            {description}
            </p>
          </div>
          <div className="bottom">
              <div className="buy-box">
                <div>
                    <div className="price">{price}</div>
                    <div className="price-without-vat">bez DPH {priceWithoutVat}</div>
                </div>
                <div>
                    <BuyButton/>
                </div>
              </div>
              <div className="available">
                  <div dangerouslySetInnerHTML={{__html: availPostfix}}>
                  </div>
                  <div className="in-stock">
                    {avail}
                  </div>
            </div>
          </div>
      </div>
    );
}

export default Product;
