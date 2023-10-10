import React, { useEffect, useState } from "react";
import { Link , Outlet, useSearchParams } from "react-router-dom";
import { FaFilter } from "react-icons/fa";

export default function Collection() {
  const [products, setProducts] = useState([]);
  const [ imageHover , setImageHover] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.shoes));
  }, []);
  const filter = products.filter(
    (shoe) => searchParams.get("type") === shoe.company
  );
  const ProductsArray = filter.length > 0 ? filter : products;

  function handleFilterChange(key, value) {
    setSearchParams((prevSearch) => {
      if (value === null) {
        prevSearch.delete(key);
      } else {
        prevSearch.set(key, value);
      }
      return prevSearch;
    });
  }

  return (
    <>
    <div className="filter-button-container">
      <span> Filters <FaFilter/> </span>
      <button  onClick={()=>handleFilterChange("type", "adidas")}>Adidas</button>
      <button  onClick={()=>handleFilterChange("type", "jordan")}>Jordan</button>
      <button  onClick={()=>handleFilterChange("type", "new balance")}>New Balance</button>
      <button  className="btn-clear" onClick={()=>handleFilterChange("type", null )}>Clear</button>
    </div>

      <div className="collection-container">
        {ProductsArray.map((shoe) => (
          <Link key={shoe.id} to={`/product/${shoe.id}`}>
            <div className="collection-div">
              <img 
               onMouseEnter={()=> setImageHover(shoe)}
               onMouseLeave={()=> setImageHover(null)}
               src={ imageHover === shoe ? shoe.imageUrlTwo : shoe.imageUrlOne }/>
              <h3>{shoe.name}</h3>
              <h5>${shoe.price}</h5>
            </div>
          </Link>
        ))}
      </div>
      <Outlet/>
    </>
)}