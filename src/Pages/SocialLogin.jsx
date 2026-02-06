import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";

const SocialLogin = () => {
  return (
    <div className="flex flex-col gap-10 md:flex-row  md:gap-10">
      <button className="btn btn-outline text-[#000000] flex gap-2 justify-center text-center">
        <span className="text-xl">
          <FcGoogle />
        </span>{" "}
        Login with Google
      </button>
      <button className="btn btn-outline text-[#000000] flex gap-2 justify-center text-center">
        <span className="text-xl">
          <BsTwitterX />
        </span>{" "}
        Login with Twitter
      </button>
    </div>
  );
};

export default SocialLogin;
