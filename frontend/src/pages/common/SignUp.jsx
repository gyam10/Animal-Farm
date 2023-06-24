import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <div className="bg-[rgb(213,213,213)] h-[92vh] py-5 ">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/70 text-white">
          <div className="max-w-[320px] mx-auto py-16">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <form className="flex flex-col w-full py-4" onSubmit={""}>
              <input
                type="email"
                placeholder="Email"
                autoComplete="email"
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 my-2 bg-gray-500 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                autoComplete="password"
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 my-2 bg-gray-500 rounded-md"
              />
              <button
                className="bg-[#007bff] py-3 my-4 rounded-md font-bold"
                type="submit"
              >
                Sign Up
              </button>
              <div className="flex justify-between text-sm text-gray-500">
                <p className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </p>
                <p>Need Help</p>
              </div>
              <p className="py-4 ">
                <span className="text-gray-500 mr-3">
                  Already have an Account?
                </span>
                <Link to={"/login"}> Sign In</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
