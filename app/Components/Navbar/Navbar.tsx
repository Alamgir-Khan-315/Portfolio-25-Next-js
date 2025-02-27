import { useEffect, useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import {
  MdOutlineMiscellaneousServices,
  MdOutlineWork,
  MdContactPhone,
} from "react-icons/md";

interface NavbarProps {
  sendDataToParent: (data: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ sendDataToParent }) => {
  const [Nav, setNav] = useState("Home");

  useEffect(() => {
    sendDataToParent(Nav);
  }, [Nav]);

  return (
    <div className="h-full p-2 flex flex-col justify-between">
      <div className="portfolio_name w-fit mx-auto mt-[2rem]">
        <div className="h-[1.5px] mr-10 bg-blue-500"></div>
        <h1 className="text-blue-500 text-5xl font-extrabold">
          A<span className="text-blue-700">K</span>
        </h1>
        <div className="h-[2px] mt-[2px] ml-10 bg-blue-500"></div>
      </div>

      <div className="Navbar_icon container -mt-[100%] md:md_text lg:lg_text font-semibold mx-auto flex flex-col items-center gap-1">
        <div
          className={`w-full flex gap-2 items-center p-2 px-[2pc] rounded-lg cursor-pointer drop-shadow-lg hover:text-white hover:bg-[#8c5eff]
            ${Nav === "home" && "bg-[#6f36ff]"} `}
          onClick={() => setNav("home")}
        >
          <div>
            <FaHome />
          </div>
          <div>Home</div>
        </div>
        <div
          className={`w-full flex gap-2 items-center p-2 px-[2pc] rounded-lg cursor-pointer drop-shadow-lg hover:text-white hover:bg-[#8c5eff]
            ${Nav === "about" && "bg-[#6f36ff]"} `}
          onClick={() => setNav("about")}
        >
          <div>
            <FaUser />
          </div>
          <div>About</div>
        </div>
        <div
          className={`w-full flex gap-2 items-center p-2 px-[2pc] rounded-lg cursor-pointer drop-shadow-lg hover:text-white hover:bg-[#8c5eff]
            ${Nav === "services" && "bg-[#6f36ff]"} `}
          onClick={() => setNav("services")}
        >
          <div>
            <MdOutlineMiscellaneousServices />
          </div>
          <div> Services</div>
        </div>
        <div
          className={`w-full flex gap-2 items-center p-2 px-[2pc] rounded-lg cursor-pointer drop-shadow-lg hover:text-white hover:bg-[#8c5eff]
            ${Nav === "portfolio" && "bg-[#6f36ff]"} `}
          onClick={() => setNav("portfolio")}
        >
          <div>
            <MdOutlineWork />
          </div>
          <div> Portfolio</div>
        </div>
      </div>

      <div
        className={`w-full btn_blue flex gap-2 items-center p-2 px-[2pc] rounded-lg cursor-pointer drop-shadow-lg hover:text-white hover:bg-[#8c5eff]
             ${Nav === "contact" && "bg-[#6f36ff]"} `}
        onClick={() => setNav("contact")}
      >
        <div>
          <MdContactPhone />
        </div>
        <div> Contact us</div>
      </div>
    </div>
  );
};

export default Navbar;
