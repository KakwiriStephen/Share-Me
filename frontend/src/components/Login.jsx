import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
//

const Login = () => {
  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoplay
          className="w-full h-full object-cover"
        ></video>

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="mb-4 P-5">
            <img src={logo} width="130px" alt="logo" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId=""
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center  p-4 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className=" mt-4" /> Sign In With Google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
