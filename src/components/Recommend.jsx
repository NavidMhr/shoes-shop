import React, { useState } from "react";
import { Link, useLocation, useOutletContext } from "react-router-dom";

export default function Recommend() {
  const { productArray } = useOutletContext();
  const [shoeImageHover, setShoeImageHover] = useState(null);

  const Recommendations = productArray.map((shoe) => (
    <Link to={`/product/${shoe.id}`} key={shoe.id} className="recommendation">
      <div>
        <img
          onMouseEnter={() => setShoeImageHover(shoe)}
          onMouseLeave={() => setShoeImageHover(null)}
          src={shoeImageHover === shoe ? shoe.imageUrlTwo : shoe.imageUrlOne}
          alt=""
        />
        <h3>{shoe.name}</h3>
        <h5>${shoe.price}</h5>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="recommendation-container">{Recommendations}</div>
    </>
  );
}
