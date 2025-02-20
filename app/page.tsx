"use client";
import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Nav from "./Components/Navbar/Navbar";
import HOME from "./Components/Home/Home";

export default function Home() {
  const [NavTab, setNavTab] = useState("");

  const handleChildData = (data: string) => {
    setNavTab(data);
  };

  const [Night_mode, setNight_mode] = useState(false);

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
            className={`nav w-[15pc] ${
              Night_mode ? "bg-[#160b31]" : "bg-[#d7c9f8]"
            }`}
          >
            <Nav sendDataToParent={handleChildData} />
          </div>

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
