import React, { useState } from "react";
import Header from "./Header";
import { validate } from "../utils/validate";
import { useRef } from "react";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [hidelogphone, setHidelogphone] = useState(true);
  const [phone, setPhone] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const mobile = useRef(null);
  const [emailvalid, setEmailValid] = useState();
  const [passvalid, setPassValid] = useState();
  const [namevalid, setNameValid] = useState();
  const [mobilevalid, setMobileValid] = useState();
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
    setHidelogphone(!hidelogphone);
  };
  const PhoneLogin = () => {
    setPhone(!phone);
  };

  const handleClick = () => {
    const [emailvalid, passvalid, namevalid, mobilevalid] = validate(
      email?.current?.value,
      password?.current?.value,
      name?.current?.value,
      mobile?.current?.value
    );
    console.log(emailvalid, passvalid);
    setPassValid(passvalid);
    setEmailValid(emailvalid);
    setNameValid(namevalid);
    setMobileValid(mobilevalid);

    // password.current.value
  };
  const handleClickN = () => {};
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
          <form onSubmit={(e) => e.preventDefault()}>
            {!isSignIn && (
              <div class="mb-6">
                <label class="block text-white text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  ref={name}
                  class="appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight "
                  id="Name"
                  type="Name"
                  placeholder="Enter Name"
                />
                <p className="block text-white text-sm font-bold mb-2">
                  {namevalid}
                </p>
              </div>
            )}

            {!phone ? (
              <div class="mb-6">
                <label class="block text-white text-sm font-bold mb-2">
                  Phone Number
                </label>
                <input
                  ref={mobile}
                  class="appearance-none border rounded w-full py-4 px-6 text-gray-700 leading-tight "
                  id="Phone Number"
                  type="Phone Number"
                  placeholder="Enter Phone Number"
                />
                <p className="block text-white text-sm font-bold mb-2">
                  {mobilevalid}
                </p>
              </div>
            ) : (
              <>
                <div class="mb-4 ">
                  <label class="block text-white text-sm font-bold mb-2">
                    Email
                  </label>
                  <input
                    ref={email}
                    placeholder="youremail@example.com"
                    class="rounded w-full  mx-auto py-4 px-6  text-gray-700 "
                    id="email"
                    type="email"
                  />
                  <p className="block text-white text-sm font-bold mb-2">
                    {emailvalid}
                  </p>
                </div>

                <div class="mb-6">
                  <label class="block text-white text-sm font-bold mb-2">
                    Password
                  </label>
                  <input
                    ref={password}
                    class="appearance-none border rounded w-full py-4 px-6  text-gray-700 leading-tight "
                    id="password"
                    type="password"
                    placeholder="********"
                  />
                  <p className="block text-white text-sm font-bold mb-2">
                    {passvalid}
                  </p>
                </div>
              </>
            )}

            {!isSignIn && (
              <div class="mb-6">
                <label class="block text-white text-sm font-bold mb-2">
                  Phone
                </label>
                <input
                  class="appearance-none border rounded w-full py-4 px-6 text-black leading-tight "
                  id="Phone"
                  type="tel"
                  placeholder="Enter Phone"
                />
                <p className="block text-white text-sm font-bold mb-2">
                  {mobilevalid}
                </p>
              </div>
            )}
            <div class="items-center">
              <button
                class="bg-red-700 hover:bg-red-950 text-white font-bold py-4 px-8 rounded w-full"
                type="submit"
                onClick={handleClick}
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

            {hidelogphone && (
              <div class="justify-between flex mt-6">
                <div>
                  <p onClick={PhoneLogin} class="text-white text-sm">
                    {phone ? "Sign In phone" : "Sign in email"}
                  </p>
                </div>
              </div>
            )}

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
      <div className="absolute w-full">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/77d35039-751f-4c3e-9c8d-1240c1ca6188/cf244808-d722-428f-80a9-052acdf158ec/IN-en-20231106-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="non"
        />
      </div>
    </>
  );
};

export default Login;
