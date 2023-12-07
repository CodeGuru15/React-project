import "../components/style.css";
import { Outlet, Link } from "react-router-dom";

const Li = ({ item, link }) => {
  return (
    <>
      <Link to={link}>
        <li className="cursor-pointer border-2 border-transparent p-2 tracking-wide hover:border-2 hover:border-solid hover:border-teal-300">
          {item}
        </li>
      </Link>
    </>
  );
};

const Layout = () => {
  return (
    <>
      <div className="sticky top-0 flex justify-between bg-slate-900 p-2  align-middle text-teal-300">
        <div className="text-[2vw]">
          <Link to="/">LOGO</Link>
        </div>
        {/* <div className="text-[2vw] tracking-wider">Welcome User</div> */}
        <div>
          <ul className="flex">
            <Li item="Home" link="/" />
            <Li item="Products" link="products" />
            <Li item="Contact" link="contact" />
            <Li item="My Account" link="myaccount" />
            <Li item="Admin" link="admin" />
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
