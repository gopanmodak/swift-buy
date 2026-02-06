import React from "react";

import loginImage from "../assets/loginImage.png";
import SocialLogin from "./SocialLogin";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <div className="grid grid-cols-12 gap-2">
          <div className="grid col-span-6">
            <img
              src={loginImage}
              alt=""
              className="max-w-55  lg:max-w-100 rounded-2xl"
            />
          </div>

          <div className="grid col-span-6 ml-10 gap-5">
            <div className="flex flex-col gap-15">
              <h1 className="text-2xl lg:text-4xl font-Volkhov font-bold">
                Swift Buy
              </h1>
              <h2 className="text-lg text-center sm:text-start lg:text-xl font-popains mt-5">
                Create Your Account
              </h2>

              <SocialLogin />

              <p className="text-[#838383] font-bold text-xl md:text-2xl text-center max-w-lg">
                {" "}
                - OR -{" "}
              </p>
            </div>
          </div>

          <div className="sm:hidden md:grid md:col-span-6"></div>

          <div className="grid col-span-6">
            <form action="" className="flex flex-col gap-5 md:gap-10">
              <input
                type="text"
                placeholder="Email"
                className="border-b-2 border-[#838383] sm:w-full sm:max-w-lg p-2 focus-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="border-b-2 border-[#838383] w-full max-w-lg p-2 focus-none"
              />

              <div className="flex flex-col gap-3 max-w-lg">
                <button className="btn btn-primary w-full max-w-lg mt-5">
                  Login
                </button>
                <Link
                  to="/register"
                  className="btn btn-outline w-full max-w-lg text-[#5B86E5]"
                >
                  Register Now
                </Link>
                <p className="text-end text-[#5B86E5] cursor-pointer">
                  Forget Password?
                </p>
              </div>
            </form>
          </div>
        </div>
        <p className="text-end mt-20 max-w-full">
          *Swift Buy Terms & Codnitions
        </p>
      </div>
    </div>
  );
};

export default Login;
