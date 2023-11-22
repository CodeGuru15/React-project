import "./style.css";
import { FaUser } from "react-icons/fa";
import { FaMobile } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Inputs = () => {
  return (
    <div className="m-1 grid border-indigo-300 text-center sm:border-r-2 sm:pr-5">
      <div>
        <label>
          <FaUser />
        </label>
        <input
          placeholder="Enter your name"
          className="m-1 border-b border-black p-1"
        ></input>
      </div>
      <div>
        <label>
          <FaMobile />
        </label>
        <input
          placeholder="Mobile No."
          className="m-1 border-b border-black p-1"
        ></input>
      </div>
      <div>
        <label>
          <MdEmail />
        </label>
        <input
          placeholder="Email"
          className="m-1 border-b border-black p-1"
        ></input>
      </div>
      <div>
        <label>
          <RiLockPasswordFill />
        </label>
        <input
          placeholder="Password"
          className="m-1 border-b border-black p-1"
        ></input>
      </div>
      <button className="mb-2 mt-5 rounded-2xl border-2 border-transparent bg-blue-500 px-5 py-1  text-white hover:text-black">
        Sign Up
      </button>
    </div>
  );
};

export default Inputs;
