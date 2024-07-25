/**
 * This code was generated by Builder.io.
 */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import VideoModal from "./VideoModal";

const CallToAction: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="flex justify-center items-center w-full max-md:max-w-full">
      <div className="flex flex-col w-full max-w-[75rem] max-h-[50rem] max-md:max-w-full px-12 py-10 max-md:px-10">
        <h2 className="text-4xl max-md:text-xl font-medium text-center text-white max-md:max-w-full">
          Coming soon!
        </h2>
        <div className="flex flex-col items-center my-8 rounded-[60px] max-md:max-w-full relative ">
          <img
            loading="lazy"
            src="/phone.png"
            alt="AiVee phone"
            className="max-w-full w-[23.25rem]"
          />
          <button className="absolute w-20 max-md:w-14 top-[36%]" type="button" onClick={() => setOpen(!isOpen)}>
            <img
              loading="lazy"
              src="/play.png"
              alt="AiVee play button"
              className="max-w-full w-[5rem]"
            />
          </button>
          <h3 className="self-stretch text-4xl font-medium text-center text-white max-md:max-w-full max-md:text-2xl max-md:leading-normal">
            Ready to take control of your time?
          </h3>
          <Link to={'https://emkd1hav7wo.typeform.com/to/SlakC6t7'} target="_blank">
            <button className="justify-center px-[3.75rem] py-[0.875rem] text-2xl max-md:text-xl font-semibold bg-emerald-200 rounded-[100px] text-zinc-950 max-md:px-8 mt-12 max-md:mt-6" type="button">
              Join Waitlist
            </button>
          </Link>
        </div>
      </div>
      <VideoModal isOpen={isOpen} close={() => setOpen(!isOpen)}/>
    </section>
  );
};

export default CallToAction;
