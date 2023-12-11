import Login from "../components/Login";
import { useState } from "react";
import SignUp from "../components/SignUp";

const MyAccount = () => {
  const [login, setLogin] = useState(true);

  const handleChange = () => {
    setLogin(!login);
  };

  return (
    <div>
      <div>{login == true ? <Login /> : <SignUp />}</div>
      <div className=" flex justify-center">
        <p className="my-auto">
          {login == true
            ? "Don't have an account ?"
            : "Already have an account ?"}
        </p>
        <button
          onClick={handleChange}
          className="w-[100px] border-2 border-transparent p-1 text-blue-600 hover:underline"
        >
          {login == true ? "SIGN UP" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default MyAccount;
