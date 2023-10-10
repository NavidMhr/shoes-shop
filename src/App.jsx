import react from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Product from "./page/Product";
import ShopingCart from "./components/ShopingCart";
import Home from "./page/Home"
import "../data";
import Recommend from "./components/Recommend";
import ProductDetail from "./page/ProductDetail";
import Collection from "./page/Collection";
import About from "./page/About";
import MenProduct from "./page/MenProducts";
import WomenProducts from "./page/WomenProducts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<About />} />
          <Route path="product/:id" element={<Product />}>
            <Route index element={<ProductDetail />} />
          </Route>
          <Route path="shopingcart" element={<ShopingCart />}>
            <Route index element={<Recommend />} />
          </Route>
          <Route path="collection" element={<Collection />} />
          <Route path="men" element={<MenProduct />} />
          <Route path="women" element={<WomenProducts/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
