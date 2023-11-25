import { useState } from "react";
import "./style.css";
import { FaUser } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const SignUpForm = () => {
  const [data, setData] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="m-1 grid border-indigo-300 text-center sm:border-r-2 sm:pr-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="flex">
          <div className="relative pt-3">
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
            className="m-1 border-b border-black p-1"
          ></input>
        </label>
        <label htmlFor="contact" className="flex">
          <div className="relative pt-3">
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
            className="m-1 border-b border-black p-1"
          ></input>
        </label>
        <label htmlFor="email" className="flex">
          <div className="relative pt-3">
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
            className="m-1 border-b border-black p-1"
          ></input>
        </label>
        <label htmlFor="password" className="flex">
          <div className="relative pt-3">
            <RiLockPasswordFill />
          </div>
          <input
            name="password"
            value={data.password || ""}
            onChange={handleChange}
            id="password"
            placeholder="Password"
            autoComplete="off"
            required={true}
            className="m-1 border-b border-black p-1"
          ></input>
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
