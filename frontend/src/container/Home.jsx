import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";
import { userQuery } from "../utils/data";

import { Sidebar, UserProfile } from "../components";
import Pins from "./Pins";
import { client } from "../client";
import logo from "../assets/logo.png";

const Home = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState(null);

  let userInfo = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  useEffect(() => {
    const query = userQuery(userInfo?._id);
    client.fetch(query).then((data) => {
      setUser(data[0]);
      console.log(data);
    });
  }, []);

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar user={user && user} />
      </div>
      <div className="flex md:hidden flex-row">
        <HiMenu
          fontSize={40}
          className="cursor-pointer"
          onClick={() => setToggleSidebar(true)}
        />
        <Link to="/">
          <img src={logo} alt="logo" className="w-28" />
        </Link>
        <Link to={`user-profile/${user?._id}`}>
          <img src={user?.image} alt="l" className="w-28" />
        </Link>
      </div>
      {toggleSidebar && (
        <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
          <div className="absolute w-full flex justify-end items-center p-2">
            <AiFillCloseCircle
              fontSize={30}
              className="cursor-pointer"
              onClick={() => setToggleSidebar(false)}
            />
          </div>
          <Sidebar user={user && user} closeToggle={setToggleSidebar} />
        </div>
      )}
    </div>
  );
};

export default Home;
