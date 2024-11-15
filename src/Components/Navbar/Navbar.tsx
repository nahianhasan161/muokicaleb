"use client";
import * as React from "react";
import { useState } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { ReactComponent as CrossIcon } from "../../Assets/Icon/nav_cross.svg";
import { Nav_Content } from "../../Content/NavContent";
/* Helvetica Neue */
export interface INavbarProps {}

export default function Navbar(props: INavbarProps) {
  const path = window.location.href.slice(window.location.origin.length);
  const pathname = path.split("?")[0];
  console.log(pathname);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <>
      {/* desktop nav */}

      <nav className="hidden nav dark:text-white  md:flex items-center justify-around 2xl:text-2xl">
        {" "}
        {/* mx-[216px] */}
        <div>
          <img
            src={Nav_Content.logo_lg}
            alt="logo"
            width={49}
            height={34}
            className="py-[17px]  2xl:h-[64px] 2xl:w-[64px]"
          />
        </div>
        <ul className="flex  gap-[45px] mg:gap-[69px] py-[22px] items-center">
          {Nav_Content.lists.map((nav, index) => (
            <Link to={nav.link} key={index}>
              <li
                className={`${
                  pathname === nav.link && "text-[#8F63DD]  active"
                }`}
              >
                {nav.title}
              </li>
            </Link>
          ))}

          <div className="flex items-center gap-7">
            <Link
              to={Nav_Content.button.link}
              className="btn-nav btn-nav-primary ml-[35px]"
            >
              {Nav_Content.button.title}
              <img
                className="2xl:w-4"
                src="/icons/frame.svg"
                alt="right-arrow"
                width={10}
                height={10}
              />
            </Link>
            {theme === "dark" ? (
              <img
                src="/icons/theme_sun.svg"
                alt="sun"
                height={24}
                width={24}
                onClick={() => setTheme("light")}
                className="cursor-pointer 2xl:h-8 2xl:w-8 "
              />
            ) : (
              <img
                src="/icons/theme_moon.svg"
                alt="sun"
                height={24}
                width={24}
                onClick={() => setTheme("dark")}
                className="cursor-pointer 2xl:h-8 2xl:w-8 "
              />
            )}
          </div>
        </ul>
      </nav>

      {/* mobile nav */}
      <nav className="relative">
        <div className=" md:hidden nav  flex  items-center justify-between mx-[16px] ">
          {/* mx-[216px] */}
          <div>
            <img
              src={Nav_Content.logo_sm}
              alt="mobile_logo"
              width={49}
              height={34}
              className="py-[17px] "
            />
          </div>

          <div className="flex gap-[19px]">
            {theme === "dark" ? (
              <img
                src="/icons/theme_sun.svg"
                alt="sun"
                height={24}
                width={24}
                onClick={() => setTheme("light")}
                className="cursor-pointer"
              />
            ) : (
              <img
                src="/icons/theme_moon.svg"
                alt="sun"
                height={24}
                width={24}
                onClick={() => setTheme("dark")}
                className="cursor-pointer"
              />
            )}
            <button className="btn-nav btn-nav-primary">Contact Me</button>

            <span className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <CrossIcon
                  height={20}
                  width={20}
                  className="fill-slate-secondary"
                />
              ) : (
                <img
                  src="/icons/simple-mobile-navbars-menu.svg"
                  alt="menu_icon"
                  width={24}
                  height={24}
                />
              )}
            </span>
          </div>
        </div>

        {isOpen && (
          <ul className="flex flex-col dark:text-white  gap-10 py-[22px] items-center md:hidden absolute z-10 bg-white dark:bg-slate-800 w-full ">
            {Nav_Content.lists.map((nav, index) => (
              <Link to={nav.link} key={index}>
                <li
                  className={`${
                    pathname === nav.link && "text-[#8F63DD]  active"
                  }`}
                >
                  {nav.title}
                </li>
              </Link>
            ))}
            <Link to="/" className="btn-nav btn-nav-primary ml-[35px]">
              {Nav_Content.button.title}
              <img
                src="/icons/frame.svg"
                alt="right-arrow"
                width={10}
                height={10}
              />
            </Link>
          </ul>
        )}
      </nav>
    </>
  );
}
