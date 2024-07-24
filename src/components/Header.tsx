/**
 * This code was generated by Builder.io.
 */
import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <nav className="flex justify-center items-center px-16 py-10 w-full font-semibold bg-zinc-950 max-md:px-5 max-md:max-w-full sticky top-0 z-50">
      <div className="flex gap-0 justify-between max-md:flex-wrap w-full max-w-[1440px] max-md:max-w-full">
        <div className="text-4xl text-white whitespace-nowrap max-md:flex-wrap">
          <Link className="flex flex-1 gap-2.5" to={'/'}>
            <img
              loading="lazy"
              src="/aivee.png"
              alt=""
              className="shrink-0 aspect-square w-[87px]"
            />
            <div className="my-auto text-xl max-md:max-w-full max-sm:invisible">AiVee</div>
          </Link>
        </div>
        <button className="justify-center px-10 py-3 my-auto text-lg bg-emerald-200 rounded-[100px] text-zinc-950 max-md:px-5">
          Join Waitlist
        </button>
      </div>
    </nav>
  );
};

export default Header;
