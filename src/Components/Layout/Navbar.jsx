import React from "react";
import { LuUserRound } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { VscSettings } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div>
        <nav className="w-11/12 mx-auto flex justify-between items-center p-2">
          <ul className="hidden lg:flex text-lg justify-center gap-x-10 text-black">
            <li className="relative group">
              HOME
              <span className="bg-black rounded-lg  absolute -bottom-1 left-0 w-0 h-1 transition-all duration-300 ease-out group-hover:w-[50%]"></span>
            </li>
            <li className="relative group">
              SHOP
              <span className="bg-black rounded-lg  absolute -bottom-1 left-0 w-0 h-1 transition-all duration-300 ease-out group-hover:w-[50%]"></span>
            </li>
          </ul>

          <h1 className="lg:text-3xl text-2xl text-black w-74 font-light lg:p-5 flex gap-[0.5px] lg:gap-2">
            thetotebagshop
            <span className="border border-green-950 lg:size-5 size-4 flex justify-center items-center text-xs lg:text-sm rounded-full ">
              R
            </span>
          </h1>

          <div className="flex justify-center items-center gap-x-5">
            <button>
              {" "}
              <LuUserRound className="lg:text-3xl text-xl font-bold text-black" />
            </button>
            <button>
              <FiShoppingCart className="lg:text-3xl text-xl font-bold text-black" />
            </button>

            <div className="lg:hidden flex flex-col justify-center items-end gap-[1.5px]">
              <span className="w-3 h-1 bg-black rounded-full"></span>
              <span className="w-5 h-1 bg-black rounded-full"></span>
              <span className="w-3 h-1 bg-black rounded-full"></span>
            </div>
          </div>
        </nav>

        {/* Mobile search bar */}
        <div className="lg:block lg:w-2/5 mx-auto h-16 hidden relative rounded-xl shadow-sm shadow-stone-500 overflow-hidden">
          <button className="absolute size-16 border-none rounded-l-xl top-0 left-0 text-3xl flex justify-center items-center text-white bg-black">
            <CiSearch />
          </button>
          <input
            type="text"
            placeholder="search for your favourite totebag, colour, design patterns"
            className="focus:outline-none border-none w-full h-full pl-20"
          />
        </div>

        {/* Desktop search bar */}
        <div className="lg:hidden block lg:w-2/5 w-11/12 mx-auto h-14 relative rounded-xl shadow-sm shadow-stone-500 overflow-hidden">
          <button className="absolute size-16 border-none rounded-l-xl top-0 left-0 text-3xl flex justify-center items-center text-stone-700">
            <CiSearch />
          </button>
          <input
            type="text"
            placeholder="search for your favourite totebags.."
            className="focus:outline-none border-none w-full h-full pl-14"
          />
          <button className="absolute top-1 right-2 h-12 size-12 flex justify-center gap-3 items-center bg-black rounded-lg text-white text-2xl">
            <VscSettings />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
