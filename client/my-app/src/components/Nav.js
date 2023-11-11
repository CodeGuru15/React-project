import "./style.css";

const Li = ({ item, link }) => {
  return (
    <>
      <a href={link}>
        <li className="cursor-pointer border-2 border-transparent p-2 tracking-wide hover:border-2 hover:border-solid hover:border-teal-300">
          {item}
        </li>
      </a>
    </>
  );
};

const Nav = () => {
  return (
    <div className="sticky top-0 flex justify-between bg-slate-900 p-2  align-middle text-teal-300">
      <div className="text-[2vw]">
        <a href="#">LOGO</a>
      </div>
      <div className="text-[2vw] tracking-wider">Welcome User</div>
      <div>
        <ul className="flex">
          <Li item="Home" link="" />
          <Li item="About" link="" />
          <Li item="Contact" link="" />
          <Li item="My Account" link="" />
        </ul>
      </div>
    </div>
  );
};

export default Nav;
