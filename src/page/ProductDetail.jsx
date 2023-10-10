import React, { useEffect, useState } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link, useOutletContext } from "react-router-dom";

export default function ProductDetail() {
  const { product } = useOutletContext();
  const [number, setNumber] = useState(0);
  const [addedProduct, SetAddedProduct] = useState(null);

  number < 0 ? setNumber(number === 0) : number;

  function handleNumber(increase, decrease) {
    setNumber((prevState) => prevState + increase - decrease);
    SetAddedProduct(product.id);
  }

  return (
    <>
      {product ? (
        <div className="product-detail">
          <span className="product-company"> {product.company} </span>
          <h2 className="product-name">{product.name}</h2>
          <p>{product.description}</p>

          <div>
            <h3 className="current-price">$ {product.price} </h3>
          </div>

          <div className="add-cart-container">
            <div>
              <button
                onClick={() => handleNumber(0, 1)}
                className="btn btn-light btn-lg m-3"
              >
                -
              </button>
              <button className="current-number btn btn-light p-2">
                {number}
              </button>
              <button
                onClick={() => handleNumber(1, 0)}
                className="btn btn-light btn-lg m-3"
              >
                +
              </button>
            </div>

            <Link
              className="button-buy"
              to={number >= 1 ? "/shopingcart" : ""}
              state={{ productId: addedProduct, totalSize : number }}
            >
              <FaShoppingBasket /> Add To Cart
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
