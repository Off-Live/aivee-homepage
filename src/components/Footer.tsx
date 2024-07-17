/**
 * This code was generated by Builder.io.
 */
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center px-16 py-10 w-full text-emerald-200 backdrop-blur-[80px] bg-zinc-950 bg-opacity-20 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1436px] max-md:flex-wrap max-md:max-w-full">
        <div className="my-auto text-2xl">Contact: Aivee@gmail.com</div>
        <nav className="flex flex-col justify-center text-xl">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms" className="mt-2">
            Terms of use
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;