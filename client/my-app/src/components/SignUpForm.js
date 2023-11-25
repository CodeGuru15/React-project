import { useState } from "react";
import "./style.css";
import { FaUser } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const SignUpForm = () => {
  const [data, setData] = useState({});
  const [toggle, setToggle] = useState(true);
  const [hide, setHide] = useState("password");
  const [eye, setEye] = useState(true);
  const pass = eye == true ? <IoMdEyeOff /> : <IoMdEye />;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData({});
  };

  const handleToogle = () => {
    setToggle(!toggle);
    setHide(toggle == true ? "password" : "text");
    setEye(!eye);
  };

  return (
    <div className="m-1 grid border-indigo-300 text-center sm:border-r-2 sm:pr-5">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="m-1 flex border-b border-slate-500 p-1"
        >
          <div className="relative pt-2">
            <FaUser />
          </div>
          <input
            type="text"
            name="username"
            value={data.username || ""}
            onChange={handleChange}
            id="name"
            placeholder="Your name"
            autoComplete="off"
            required={true}
            className="p-1"
          ></input>
        </label>
        <label
          htmlFor="contact"
          className="m-1 flex border-b border-slate-500 p-1"
        >
          <div className="relative pt-2">
            <FaMobile />
          </div>
          <input
            type="number"
            name="contact"
            value={data.contact || ""}
            onChange={handleChange}
            id="contact"
            placeholder="Contact No."
            autoComplete="off"
            className="p-1"
          ></input>
        </label>
        <label
          htmlFor="email"
          className="m-1 flex border-b border-slate-500 p-1"
        >
          <div className="relative pt-2">
            <MdEmail />
          </div>
          <input
            type="email"
            name="email"
            value={data.email || ""}
            onChange={handleChange}
            id="email"
            placeholder="Email"
            autoComplete="off"
            required={true}
            className="p-1"
          ></input>
        </label>
        <label
          htmlFor="password"
          className="m-1 flex border-b border-slate-500 p-1"
        >
          <div className="relative pt-2">
            <RiLockPasswordFill />
          </div>
          <input
            type={hide}
            name="password"
            value={data.password || ""}
            onChange={handleChange}
            id="password"
            placeholder="Password"
            autoComplete="off"
            required={true}
            className="p-1"
          ></input>
          <div
            className="relative ml-1 cursor-pointer pt-2"
            onClick={handleToogle}
          >
            {pass}
          </div>
        </label>
        <div>
          <button
            type="submit"
            className="mb-2 mt-5 rounded-2xl border-2 border-transparent bg-blue-500 px-5 py-1  text-white hover:text-black"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
