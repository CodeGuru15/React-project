import { useState } from "react";
import "./style.css";
import { FaUser } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Inputs = () => {
  const [data, SetData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const user = e.target.name.value;
    const contact = e.target.contact.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    SetData({
      name: user,
      contact: contact,
      email: email,
      password: password,
    });
    console.log(data);
  };

  return (
    <div className="m-1 grid border-indigo-300 text-center sm:border-r-2 sm:pr-5">
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          <i>
            <FaUser />
          </i>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            autoComplete="off"
            required="true"
            className="m-1 border-b border-black p-1"
          ></input>
        </label>
        <label htmlFor="contact">
          <FaMobile />
          <input
            type="number"
            name="contact"
            id="contact"
            placeholder="Contact No."
            autoComplete="off"
            className="m-1 border-b border-black p-1"
          ></input>
        </label>
        <label htmlFor="email">
          <MdEmail />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            required="true"
            className="m-1 border-b border-black p-1"
          ></input>
        </label>
        <label htmlFor="password">
          <RiLockPasswordFill />
          <input
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="off"
            required="true"
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

export default Inputs;
