import "../components/style.css";

const SingleProduct = ({ title, description, price, imgUrl }) => {
  return (
    <div className="w-[220px] overflow-hidden rounded-lg border border-solid border-slate-500 text-center">
      <div className="grid place-content-center bg-[#f7f7f7] px-5 pt-2">
        <img className="h-[200px] mix-blend-darken " src={imgUrl} />
      </div>
      <div className=" bg-white">
        <h1 className="p-1 text-2xl font-bold">{title}</h1>
        <p className="p-1">{description}</p>
        <p className="text-2xl">Rs. {price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
