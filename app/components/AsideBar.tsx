"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  FaHouseChimney,
  FaMartiniGlassCitrus,
  FaIdBadge,
  FaLeftLong,
  FaLocationDot
} from "react-icons/fa6";

const AsideBar = () => {
  const pathName = usePathname();
  const activeLink = "#F1D5BB";
  return (
    <div className="bg-[#000000] w-fit space-y-24 px-10 py-20 flex flex-col justify-start rounded-lg col-span-2
     hidden lg:flex">
      <Link href={"/"}>
        <FaHouseChimney
          size={36}
          color={pathName == "/" ? activeLink : "white"}
        />
      </Link>
      <Link href={"/menu"}>
        <FaMartiniGlassCitrus
          size={36}
          color={pathName == "/menu" ? activeLink : "white"}
        />
      </Link>
      <Link href={"/location"}>
        <FaLocationDot
          size={36}
          color={pathName == "/location" ? activeLink : "white"}
        />
      </Link>

      <Link href={"/about"}>
        <FaIdBadge
          size={36}
          color={pathName == "/about" ? activeLink : "white"}
        />
      </Link>

  
    </div>
  );
};

export default AsideBar;
