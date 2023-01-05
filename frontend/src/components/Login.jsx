import React from "react";
import { gapi } from "gapi-script";
import { useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

import { FcGoogle } from "react-icons/fc";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import { client } from "../client";

//login component
const Login = () => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({});
    };
    gapi.load("client:auth2", initClient);
  });
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));
    var decodedHeader = jwt_decode(response.credential);
    // console.log(decodedHeader);

    const { name, aud, picture } = decodedHeader;
    const doc = {
      _id: aud,
      _type: "user",
      userName: name,
      image: picture,
    };
    console.log(doc);
    client.createIfNotExists(doc).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        ></video>

        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="mb-4">
            <img src={logo} width="130px" alt="logo" />
          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center  p-4 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle /> Sign In With Google
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
