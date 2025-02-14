import React from "react";
import login from "../assets/login.png";
import { IoMdContact, IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="grid place-items-center  py-12 md:p-0">
      <img className="w-64 h-64 object-contain" src={login} alt="" />
      <h1 className="text-2xl font-bold ">Create a new account</h1>
      <form onSubmit={{}}>
        <div className="flex gap-2 items-center justify-normal mt-6">
          <i>
            <IoMdContact fontSize={30} fill="#ff63fc" />
          </i>
          <input
            className="border-2 border-gray-500 rounded-xl py-1 px-2 w-56"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex gap-2 items-center justify-normal mt-6">
          <i>
            <IoMdMail fontSize={30} fill="#ff63fc" />
          </i>
          <input
            className="border-2 border-gray-500 rounded-xl py-1 px-2 w-56"
            type="text"
            placeholder="Email address"
          />
        </div>

        <div className="flex gap-2 items-center justify-normal mt-6">
          <i>
            <RiLockPasswordFill fontSize={30} fill="#ff63fc" />
          </i>
          <input
            className="border-2 border-gray-500 rounded-xl py-1 px-2 w-56"
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="flex flex-col items-center mt-8">
          <input
            className=" rounded-xl cursor-pointer bg-[#ff63fc] text-white px-4 py-2 text-center w-full"
            type="submit"
            value="Sign up"
          />
        </div>
        <Link to="/login">
          <a className="text-xs text-blue-700 flex justify-end pt-3 hover:underline">
            Already have an account?
          </a>
        </Link>
      </form>
    </div>
  );
};

export default Register;
