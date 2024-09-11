/**
 * This code was generated by Builder.io.
 */
import React from "react";

const ContactMatchSection: React.FC = () => {
  return (
    <section className="flex justify-center items-center w-full my-[6.25rem] py-40 max-md:max-w-full max-md:py-0 max-md:px-0 max-md:mb-[8.75rem]">
      <div className="w-full max-w-[75rem] max-h-[50rem] max-md:px-[1.3rem]">
        <div className="flex gap-[6.25rem] max-xl:gap-20 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-w-[28.72rem]">
              <img
                loading="lazy"
                src="/aivee_contact_match.png"
                alt=""
                className="w-full max-w-[28.72rem]"
              />
            </div>
          </div>
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:max-w-full max-md:items-center">
              <h2 className="text-[3.5rem] font-medium leading-[4.5rem] my-[1.38rem] max-md:text-[2rem] max-md:max-w-full max-md:leading-normal max-md:my-[1.35rem] max-md:w-[21.25rem] max-md:text-center">
                <span className="gradient-text">Intelligent</span> contact matching and suggestions
              </h2>
              <h3 className="text-[1.25rem] font-normal leading-normal opacity-60 text-white max-md:w-[21.25rem] max-md:text-[1.125rem] max-md:text-center">
              Aivee stores your contact history and matches invitees with your Google Contacts, suggesting the best email addresses and eliminating the need for manual entry.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMatchSection;