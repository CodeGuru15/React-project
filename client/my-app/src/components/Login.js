import "./style.css";
import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [toggle, setToggle] = useState(true);

  const handleToogle = () => {
    setToggle(!toggle);
  };

  const handleUser = (e) => setUser(e.target.value);
  const handlePassChange = (e) => setPass(e.target.value);

  const submitLogin = (e) => {
    e.preventDefault();
    console.log(user + pass);
    setPass("");
    setUser("");
  };

  const hide = toggle === true ? "password" : "text";
  const show = toggle === true ? <IoMdEyeOff /> : <IoMdEye />;

  return (
    <>
      <div className="grid h-[70vh] place-content-center">
        <p className="m-2 mx-auto text-3xl font-bold">WELCOME BACK</p>
        <p className="m-2 mx-auto text-2xl tracking-wide">
          Enjoy a personalised shopping experience
        </p>
        <div className="mx-auto flex flex-col">
          <p className="p-2 text-center font-semibold">SIGN IN</p>
          <form className="grid" onSubmit={submitLogin}>
            <label htmlFor="email"></label>
            <div className="m-1 flex rounded-sm border border-slate-800">
              <input
                type="email"
                name="email"
                value={user || ""}
                onChange={handleUser}
                id="email"
                placeholder="Email"
                autoComplete="off"
                required={true}
                className="p-2 placeholder:italic"
              ></input>
              <div className="relative px-1 pt-3 text-slate-700">
                <FaUser />
              </div>
            </div>

            <label htmlFor="password"></label>
            <div className="m-1 flex rounded-sm border border-slate-800">
              <input
                type={hide}
                name="password"
                value={pass || ""}
                onChange={handlePassChange}
                id="password"
                placeholder="Password"
                autoComplete="off"
                required={true}
                className="p-2 placeholder:italic"
              ></input>
              <div
                className="relative cursor-pointer px-1 pt-2 text-slate-700"
                onClick={handleToogle}
              >
                {show}
              </div>
            </div>

            <button
              type="submit"
              className="m-2 rounded-sm bg-blue-500 p-2 font-bold tracking-wide hover:bg-blue-300 hover:text-black"
            >
              Login
            </button>
          </form>
          <a className="mx-auto cursor-pointer p-2 hover:font-bold">
            Forget Password
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
