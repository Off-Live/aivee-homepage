/**
 * This code was generated by Builder.io.
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "./VideoModal";

const HeroSection: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="flex justify-center items-center w-full max-md:max-w-full mb-[6.25rem]">
      <div className="flex flex-col justify-center items-center w-full max-w-[75rem] max-h-[68.125rem] max-md:max-w-full px-12 py-[6.25rem] max-md:px-10 max-md:pb-4">
        <h2 className="max-w-[63.9375rem] leading-[4.5rem] text-[4rem] -tracking-[0.08rem] font-medium text-center text-white gap-1 mb-6">
          Faster and easier scheduling process with a <span className="gradient-text">screenshot</span>
        </h2>
        <h3 className="max-w-[44.75rem] text-[1.25rem] font-normal leading-normal text-center text-white">
        Simply upload any screenshot, and Aivee will generate an event and sync it with your Google Calendar.
        </h3>
        <Link to={'https://emkd1hav7wo.typeform.com/to/SlakC6t7'} target="_blank">
            <button className="justify-center px-[3.75rem] py-[0.875rem] text-2xl max-md:text-xl font-semibold bg-emerald-200 rounded-[100px] text-zinc-950 m-12 h-[4.25rem]" type="button">
              Join Waitlist
            </button>
          </Link>
        <div className="flex flex-col items-center my-8 rounded-[60px] max-md:max-w-full relative ">
          <img
            loading="lazy"
            src="/aivee_ip.svg"
            alt="AiVee phone"
            className="max-w-full w-[55.7975rem]"
          />
          <button className="absolute w-20 max-md:w-14 top-[36%]" type="button" onClick={() => setOpen(!isOpen)}>
            <img
              loading="lazy"
              src="/play.png"
              alt="AiVee play button"
              className="max-w-full w-[5rem]"
            />
          </button>          
        </div>
      </div>
      <VideoModal isOpen={isOpen} close={() => setOpen(!isOpen)}/>
    </section>
  );
};

export default HeroSection;
