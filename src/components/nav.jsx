import { useState } from "react";
import { LuMenuSquare } from "react-icons/lu";
import { FaHome, FaUser, FaFilePdf } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiHiking } from "react-icons/gi";
import { PiPlanetFill } from "react-icons/pi";
import { GiCycling } from "react-icons/gi";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div className="p-4 bg-primary">
      <nav>
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white font-bold text-xl flex flex-row items-center space-x-2">
            <GiHiking size={25} />
            <div className="text-xl">Explore & Trek In Nepal</div>
          </div>
          <div className="hidden lg:block">
            <div className="flex flex-row space-x-10">
              <div className="text-white flex flex-row items-center space-x-2 font-semibold hover:text-gray-300 hover:underline">
                <FaHome />
                <button>
                  <a href="/">Home</a>
                </button>
              </div>
              <div className="text-white flex flex-row items-center space-x-2 font-semibold hover:text-gray-300 hover:underline">
                <PiPlanetFill />
                <button>
                  <a href="/destination">Destination</a>
                </button>
              </div>
              <div className="text-white flex flex-row items-center space-x-2 font-semibold hover:text-gray-300 hover:underline">
                <GiCycling />
                <button>
                  <a href="/activities">Activities</a>
                </button>
              </div>
              <div className=" text-white font-semibold flex flex-row items-center space-x-2 hover:text-green-500">
                <button>Contacts</button>
              </div>
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white">
              <div>
                <LuMenuSquare size={24} />
              </div>
            </button>
          </div>
        </div>
        <div className={`${openMenu ? "block" : "hidden"} lg:hidden`}>
          <div className="flex flex-col space-y-2 mt-3">
            <div className="text-white flex flex-row items-center space-x-2 font-semibold hover:text-gray-300 hover:underline">
              <FaHome />
              <button>
                <a href="/">Home</a>
              </button>
            </div>
            <div className="text-white flex flex-row items-center space-x-2 font-semibold hover:text-gray-300 hover:underline">
              <FaUser />
              <button>
                <a href="/about">About</a>
              </button>
            </div>
            <div className="text-white flex flex-row items-center space-x-2 font-semibold hover:text-gray-300 hover:underline">
              <AiOutlineFundProjectionScreen />
              <button>
                <a href="/projects">Projects</a>
              </button>
            </div>
            <div className=" text-white font-bold flex flex-row items-center space-x-2">
              <FaFilePdf />
              <button>Download Resume</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
