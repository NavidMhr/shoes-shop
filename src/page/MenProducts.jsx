import {React , useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function MenProduct() {
  const [products, setProducts] = useState([]);
  const [imageHover, setImageHover] = useState(null);

  useEffect(() => {
    fetch("/api/products/men")
      .then((res) => res.json())
      .then((data) => setProducts(data.shoes));
  }, []);

  return (
    <>
      <div className="collection-container">
        {products.map((shoe) => (
          <Link key={shoe.id} to={`/product/${shoe.id}`}>
            <div className="collection-div">
              <img
                onMouseEnter={() => setImageHover(shoe)}
                onMouseLeave={() => setImageHover(null)}
                src={imageHover === shoe ? shoe.imageUrlTwo : shoe.imageUrlOne}
              />
              <h3>{shoe.name}</h3>
              <h5>${shoe.price}</h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
