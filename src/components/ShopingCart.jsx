import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function ShopingCart() {
  const [productArray, setProductArray] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch("api/product/recommend")
      .then((res) => res.json())
      .then((data) => setProductArray(data.shoes));
  }, []);

  const addedProduct = location.state;

  const FilterProduct = addedProduct ? productArray.filter((shoe) => shoe.id === addedProduct.productId) : ["s"];

  return (
    <>
      <div className="shoping-card-container"  >
        {addedProduct ? (
          FilterProduct.map(shoe=>(
            <Link className="shoping-added-products" key={shoe.id} to={`/product/${shoe.id}`}>
                  <img src={shoe.imageUrlOne} width={200} />
                  <h5>{shoe.name}</h5>
                  <h6 className="m-2">${shoe.price}</h6>
                  <span className="m-2">{addedProduct.totalSize} :</span>
                  <button className="btn  btn-outline-secondary text-center">Buy Now</button>
            </Link>
          ))
        ) : (
          <div>
            <h2 className="">SHOPPING BAG</h2>
            <h4>There is nothing in your bag yet.</h4>
          </div>
        )}
      </div>
      <div className="recomendation-shoping-cart">
        <h3>recomendations:</h3>

        <Link className="btn btn-dark" to="/collection">
          Shop Now{" "}
        </Link>

        <Outlet context={{ productArray }} />
      </div>
    </>
  );
}
