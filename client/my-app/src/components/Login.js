import "./style.css";
import { useState } from "react";

const Login = () => {
  let [show, setShow] = useState("visible");

  const skipLogin = () => {
    setShow("none");
  };

  return (
    <>
      <div
        style={{ display: show }}
        className="absolute z-50 flex h-screen w-full flex-col bg-black/50 p-[20vh] text-white backdrop-blur-md"
      >
        <p className="m-2 mx-auto text-3xl font-bold text-white">
          WELCOME BACK
        </p>
        <p className="m-2 mx-auto text-2xl tracking-wide text-white">
          Enjoy a personalised shopping experience
        </p>
        <div className="mx-auto flex flex-col">
          <p className="p-2 text-center">SIGN IN</p>
          <input
            className="m-2 rounded-sm bg-white/30 p-2 backdrop-blur-md placeholder:italic placeholder:text-white/50"
            placeholder="Email or username"
          ></input>
          <input
            className="m-2 rounded-sm bg-white/30 p-2 backdrop-blur-md placeholder:italic placeholder:text-white/50"
            placeholder="password"
          ></input>
          <button className="m-2 rounded-sm bg-blue-500 p-2 font-bold tracking-wide hover:text-black">
            Login
          </button>
          <a className="mx-auto cursor-pointer p-2 hover:underline">
            Forget Password
          </a>
          <p className="p-2">
            Don't have an account yet?{" "}
            <a className="cursor-pointer p-2 hover:underline">SIGN UP</a>
          </p>
        </div>
        <button className="m-2 hover:underline" onClick={skipLogin}>
          SKIP
        </button>
      </div>
    </>
  );
};

export default Login;
