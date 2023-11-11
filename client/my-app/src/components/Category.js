import "./style.css";

const CatLi = ({ cat, link }) => {
  return (
    <a href={link}>
      <li className="my-2 w-[10vw] border border-transparent p-2 text-center tracking-wider text-slate-950 hover:border-b hover:border-b-red-600 hover:font-bold">
        {cat}
      </li>
    </a>
  );
};

const Category = () => {
  return (
    <div className="flex justify-center align-middle">
      <ul className="justify-betwenn flex">
        <CatLi cat="MEN" link="" />
        <CatLi cat="WOMEN" link="" />
        <CatLi cat="BOYS" link="" />
        <CatLi cat="GIRLS" link="" />
        <CatLi cat="NEW ARRIVAL" link="" />
      </ul>
      <button className="mx-[1vw] my-[1vw] rounded-3xl border-2 border-transparent bg-yellow-400 px-[1vh] text-black duration-500 hover:border-2 hover:border-black hover:bg-green-500">
        EXPRESS DELIVERY
      </button>
    </div>
  );
};

export default Category;
