import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
        rating: rating
      }
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((
              _,
              i // helps make rating dynamic
            ) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt=""></img>

      <button onClick={addToBasket}>BUY</button>
    </div>
  );
}

export default Product;
