import AddProduct from "../components/AddProduct";
import DeleteProduct from "../components/DeleteProduct";
import UpdateProduct from "../components/UpdateProduct";
import "../components/style.css";

const Admin = () => {
  return (
    <div>
      <div className="p-1 text-center text-3xl font-bold text-slate-900">
        <h1>Admin Panel</h1>
      </div>
      <div className="sm:flex sm:justify-center">
        <AddProduct />
        <DeleteProduct />
        <UpdateProduct />
      </div>
    </div>
  );
};

export default Admin;
