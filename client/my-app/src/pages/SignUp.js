import "../components/style.css";
import { TfiFacebook } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="grid h-[80vh] place-content-center">
      <div className="grid">
        <div className="m-1 text-center">
          <h1 className="text-indigo-600 sm:text-3xl">SIGN UP</h1>
        </div>
        <div className="m-1 text-center">
          <span>
            Already have an account?
            <a className="cursor-pointer pl-1 text-blue-500 hover:underline">
              Log In
            </a>
          </span>
        </div>
        <div className="m-1 sm:flex sm:justify-center">
          <SignUpForm />
          <div className="m-1 grid place-content-center pl-2">
            <div className="flex p-2">
              <div className="border px-1 pt-2 text-blue-800">
                <TfiFacebook />
              </div>
              <a className="cursor-pointer bg-blue-700 p-2 text-sm text-white">
                Continue with Facebook
              </a>
            </div>
            <div className="flex p-2">
              <div className="border px-1 pt-2">
                <FcGoogle />
              </div>
              <a className="cursor-pointer bg-blue-400 p-2 text-sm text-white">
                Continue with Google
              </a>
            </div>
          </div>
        </div>
        <div className="m-2 text-center">
          <div>
            <a className="cursor-pointer pl-1 text-sm text-blue-500 hover:underline">
              Terms of use and Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
