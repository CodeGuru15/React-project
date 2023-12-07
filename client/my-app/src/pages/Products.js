import "../components/style.css";

import axios from "axios";
import { useState, useEffect } from "react";
import SingleProduct from "../components/SingleProduct";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:2000/products");
  const data = res.data;
  return data;
};

const Products = () => {
  const [myproducts, setMyproducts] = useState([]);

  const getProduct = async () => {
    const productData = await fetchProducts();
    setMyproducts(productData);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className=" bg-yellow-300">
      <h1 className="py-2 text-center text-3xl font-bold text-black">
        ALL PRODUCTS
      </h1>
      <div className="grid grid-cols-5 place-items-center content-stretch gap-2">
        {myproducts.map((item) => {
          return (
            <SingleProduct
              title={item.title}
              description={item.description}
              price={item.price}
              imgUrl={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
