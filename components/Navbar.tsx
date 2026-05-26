"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Social_Icons } from "@/constant";

const Navbar: React.FC<{}> = () => {
  return (
    <div className="w-full fixed z-50 flex justify-center pt-5">
      <div className="flex flex-row items-center gap-5 border border-gray-700 rounded-full px-6 py-3 backdrop-blur-sm bg-[#111]/80">
        {Social_Icons.map((social) => (
          <Link
            href={social.link}
            rel="noopener noreferrer"
            target="_blank"
            key={social.alt}
            className="z-[1]"
          >
            <Image
              src={social.image}
              height={22}
              width={22}
              alt={social.alt}
            />
          </Link>
        ))}
        <a
          href="#contact"
          className="z-[1] cursor-pointer bg-white hover:bg-gray-200 rounded-full text-black font-semibold py-2 px-5"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
