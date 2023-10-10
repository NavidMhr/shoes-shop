import React, { useEffect, useState } from "react";
import { Link, Outlet , useParams } from "react-router-dom";

export default function Product() {
  const [product, setProduct] = useState(null);
  const [currentImage, setCurrentImage] = useState("imageUrlOne");
  const params = useParams();

  useEffect(() => {
    fetch(`/api/product/${params.id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data.shoe));
  }, [params.id]);

  function changeImage(imageUrl) {
    setCurrentImage(imageUrl);
  }

  return (
    <>
      <div className="product-container">
        {product ? (
          <div className="product-image-container">
            <img
              src={product[currentImage]}
              className="product-current-image"
            />
            <div className="product-images">
              <img
                src={product.imageUrlOne}
                onClick={() => changeImage("imageUrlOne")}
                className={ currentImage === "imageUrlOne" ? "current-image" :""  }
              />
              <img
                src={product.imageUrlTwo}
                onClick={() => changeImage("imageUrlTwo")}
                className={ currentImage === "imageUrlTwo" ? "current-image" :""  }
              />
              <img
                src={product.imageUrlThree}
                onClick={() => changeImage("imageUrlThree")}
                className={ currentImage === "imageUrlThree" ? "current-image" :""  }
              />
            </div>
          </div>
        ) : ""}
        
        {/* ProductDetail */}
        < Outlet context={{ product }} />
        {/* ProductDetail */}
      </div>
    </>
  );
}
