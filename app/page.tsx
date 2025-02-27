"use client";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Nav from "./Components/Navbar/Navbar";
import HOME from "./Components/Main/Home";

export default function Home() {
  const [NavTab, setNavTab] = useState("home");

  const handleChildData = (data: string) => {
    setNavTab(data);
  };

  const [Night_mode, setNight_mode] = useState(false);
  const [NavToggle, setNavToggle] = useState(false);

  return (
    <div className="app">
      <div className="btn fixed right-3 top-3">
        <button onClick={() => setNight_mode(!Night_mode)}>
          {Night_mode === false ? (
            <div className="p-2 text-xl rounded-full border border-black text-black">
              <FaMoon />
            </div>
          ) : (
            <div className="p-2 text-xl rounded-full bg-[#22104d] text-white">
              <FaSun />
            </div>
          )}
        </button>
      </div>

      <div className={Night_mode ? "Night_mode" : "Day_mode"}>
        <div className="main h-screen flex justify-center">
          <div
            className={`nav hidden md:flex w-[15pc] ${
              Night_mode ? "bg-[#160b31]" : "bg-[#d7c9f8]"
            }`}
          >
            <div className="md_nav hidden md:flex">
              <Nav sendDataToParent={handleChildData} />
            </div>
          </div>

          <div
            className="menu_icon text-2xl fixed top-3 left-3 rounded-full p-1 px-2 cursor-pointer bg-blue-500 text-white font-bold md:hidden"
            onClick={() => setNavToggle(!NavToggle)}
          >
            ☰
          </div>
          {NavToggle === true && (
            <div>
              <Nav sendDataToParent={handleChildData} />
            </div>
          )}

          <div
            className={`w-full ${Night_mode ? "bg-[#050516]" : "bg-gray-100"} `}
          >
            <HOME NavTab={NavTab} />
          </div>
        </div>
      </div>
    </div>
  );
}
