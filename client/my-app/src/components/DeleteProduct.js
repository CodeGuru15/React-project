import axios from "axios";
import "../components/style.css";
import { useState } from "react";

const DeleteProduct = () => {
  const [deleteId, setDeleteId] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setDeleteId(value);
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:2000/products/${deleteId}`);
    setDeleteId("");
  };

  return (
    <div className="m-2 grid w-[350px] place-items-center border">
      <h1 className="text-center text-2xl">Delete Product</h1>
      <form onSubmit={handleDelete} className="grid p-1">
        <label htmlFor="id">
          Product Id:
          <input
            type="text"
            name="id"
            id="id"
            value={deleteId || ""}
            onChange={handleChange}
            autoComplete="off"
            required={true}
            className="m-1 border-b-2 p-1"
          ></input>
        </label>
        <button type="submit" className="m-1 border bg-blue-400 p-1">
          DELETE
        </button>
      </form>
    </div>
  );
};

export default DeleteProduct;
