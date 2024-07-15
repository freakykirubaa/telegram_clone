"use client";
import { useState } from "react";

const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <button className="text-white focus:outline-none" onClick={toggleMenu}>
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
          />
        </svg>
      </button>
      <div
        className={`fixed inset-0 z-50 w-64 bg-[#212121] text-white transform shadow-lg ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:fixed md:w-64 md:bg-[#212121]`}
      >
        <ul className="p-4 space-y-2">
          <li className="py-2 md:py-0 flex">
            <a href="#" className="hover:underline">
              Saved Messages
            </a>
            <div className="relative">
              <button
                className="text-white focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      menuOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16m-7 6h7"
                    }
                  />
                </svg>
              </button>
            </div>
          </li>
          <li className="py-2 md:py-0">
            <a href="#" className="hover:underline">
              Contacts
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#" className="hover:underline">
              My Stories
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#" className="hover:underline">
              Settings
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#" className="hover:underline">
              Night Mode
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#" className="hover:underline">
              Animations
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#" className="hover:underline">
              Telegram Features
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#" className="hover:underline">
              Report a Bug
            </a>
          </li>
          <li className="py-2 md:py-0">
            <a href="#" className="hover:underline">
              Switch to K Version
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
