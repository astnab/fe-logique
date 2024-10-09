import React, { useState } from "react";
import logo from "../assets/logo.png";
import {
  IoPlayCircleOutline,
  IoSearch,
  IoHeartCircleOutline,
  IoHeartOutline,
} from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 px-10 bg-zinc-100 fixed w-screen z-10">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <img src={logo} alt="logo" className="w-12 h-12" />
      </div>

      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#" className="hover:text-gray-400 flex items-center gap-3">
            <div className="text-xl text-primary font-bold">
              <IoSearch />
            </div>
            <div className="flex flex-col">
              <div className="text-primary font-bold">Discover</div>
              <div className="font-light text-xs">
                How too much decision making is tiring us out
              </div>
            </div>
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-gray-400 flex items-center gap-3">
            <div className="text-xl text-primary font-bold">
              <IoPlayCircleOutline />
            </div>
            <div className="flex flex-col">
              <div className="text-primary font-bold">Watch</div>
              <div className="font-light text-xs">
                Psychologist breaks down decision fatigue
              </div>
            </div>
          </a>
        </li>

        <li>
          <a href="#" className="hover:text-gray-400 flex items-center gap-3">
            <div className="text-xl text-primary font-bold">
              <IoHeartOutline />
            </div>
            <div className="flex flex-col">
              <div className="text-primary font-bold">Detox</div>
              <div className="font-light text-xs">
                Start the decision detox program
              </div>
            </div>
          </a>
        </li>
      </ul>

      {/* MOBILE */}

      <div
        className="md:hidden flex flex-col space-y-1 cursor-pointer text-primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RxHamburgerMenu />
      </div>

      <div
        className={`md:hidden absolute top-16 left-0 w-full bg-zinc-100 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row items-center space-y-6 py-6 md:space-y-0 md:space-x-6">
          <li>
            <a href="#" className="text-primary font-semibold">
              Discover
            </a>
          </li>
          <li>
            <a href="#" className="text-primary font-semibold">
              Watch
            </a>
          </li>
          <li>
            <a href="#" className="text-primary font-semibold">
              Detox
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
