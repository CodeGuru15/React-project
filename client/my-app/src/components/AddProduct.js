import { useState } from "react";
import axios from "axios";
import "../components/style.css";

const AddProduct = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:2000/products", data);
    setData({});
  };

  return (
    <div className="m-2 grid w-[350px] place-items-center border">
      <h1 className="text-center text-2xl">Add New Product</h1>
      <form onSubmit={handleSubmit} className="grid p-1">
        <label htmlFor="title">
          Product Title:
          <input
            type="text"
            name="title"
            id="title"
            value={data.title || ""}
            onChange={handleChange}
            autoComplete="off"
            required={true}
            className="m-1 border-b-2 p-1"
          ></input>
        </label>
        <label htmlFor="description">
          Description:
          <input
            type="text"
            name="description"
            id="description"
            value={data.description || ""}
            onChange={handleChange}
            autoComplete="off"
            required={true}
            className="m-1 border-b-2 p-1"
          ></input>
        </label>
        <label htmlFor="price">
          Price (in Rs.):
          <input
            type="number"
            name="price"
            id="price"
            value={data.price || ""}
            onChange={handleChange}
            autoComplete="off"
            required={true}
            className="m-1 border-b-2 p-1"
          ></input>
        </label>
        <label htmlFor="imgUrl">
          Image Url:
          <input
            type="text"
            name="imgUrl"
            id="imgUrl"
            value={data.imgUrl || ""}
            onChange={handleChange}
            autoComplete="off"
            required={true}
            className="m-1 border-b-2 p-1"
          ></input>
        </label>
        <button type="submit" className="m-1 border bg-blue-400 p-1">
          ADD
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
