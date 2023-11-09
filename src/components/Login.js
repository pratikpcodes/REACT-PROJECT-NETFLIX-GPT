import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="non"
        />
      </div>
      <div class=" flex relative justify-center items-center min-h-screen">
        <div class="max-w-md w-full px-16 py-8 bg-black bg-opacity-60 rounded-lg">
          <h1 class="text-3xl font-bold mt-10 mb-6   text-white">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          <form>
            {!isSignIn &&(
        
              <div class="mb-6">
                <label class="block text-white text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  class="appearance-none border rounded w-full py-4 px-6 text-white leading-tight "
                  id="Name"
                  type="Name"
                  placeholder="Enter Name"
                />
              </div>
              
            )}
            <div class="mb-4 ">
              <label class="block text-white text-sm font-bold mb-2">
                Email
              </label>
              <input
                placeholder="youremail@example.com"
                class="rounded w-full  mx-auto py-4 px-6  text-gray-700 "
                id="email"
                type="email"
              />
            </div>
            <div class="mb-6">
              <label class="block text-white text-sm font-bold mb-2">
                Password
              </label>
              <input
                class="appearance-none border rounded w-full py-4 px-6 text-white leading-tight "
                id="password"
                type="password"
                placeholder="********"
              />
            </div>
            <div class="items-center">
              <button
                class="bg-red-700 hover:bg-red-950 text-white font-bold py-4 px-8 rounded w-full"
                type="submit"
              >
                {isSignIn ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div class="justify-between flex mt-6">
              <div>
                <label class="text-white text-sm">
                  <input type="checkbox" class="form-checkbox" />
                  Remember Me?
                </label>
              </div>
              <a class="text-white text-sm" href="#">
                Need Help?
              </a>
            </div>
            <div class="justify-between flex mt-10 pb-12">
              <div>
                <p onClick={toggleSignInForm} class="text-white text-sm">
                  {isSignIn
                    ? "New to Netflix? Sign Up Now"
                    : "Already a User? Sign In"}
                </p>
              </div>
            </div>
            <div class="text-white opacity-70 mb-20">
              Support Piracy?Give your address
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
