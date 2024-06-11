import * as React from "react";
import "./App.css";

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => (
  <button className={className} onClick={onClick}>
    {children}
  </button>
);

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};

const Image: React.FC<ImageProps> = ({ src, alt, className }) => (
  <img loading="lazy" src={src} alt={alt} className={className} />
);

const App: React.FC = () => {
  return (
    <div className="flex overflow-hidden relative flex-col justify-center">
      <Image
        src="/bg.png"
        alt=""
        className="object-fill absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-center px-16 pt-10 w-full max-md:px-5 max-md:max-w-full">
        <header className="flex flex-col w-full max-w-[1440px] max-md:max-w-full">
          <div className="flex gap-2.5 justify-between pl-10 text-2xl max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <h3 className="max-sm:invisible font-medium text-white"><a href="/">Home</a></h3>
            <Button className="justify-center px-10 py-3 font-semibold bg-emerald-200 rounded-[100px] text-zinc-950 max-md:px-5 max-md:text-xl">
              Join Waitlist
            </Button>
          </div>
          <section className="justify-center self-center mt-20 max-w-full w-[1291px] max-md:mt-10">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <Image
                  src="/aivee.png"
                  alt="Description of the image"
                  className="grow w-full aspect-[1.01] max-md:mt-10 max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full max-sm:text-center">
                  <h2 className="text-9xl font-semibold text-gray-200 max-md:max-w-full max-md:text-4xl">
                    Aivee
                  </h2>
                  <p className="mt-5 text-4xl font-medium text-emerald-200 max-md:max-w-full max-md:text-2xl">
                    Smart scheduling with just a screenshot, powered by AI
                  </p>
                </div>
              </div>
            </div>
          </section>
        </header>
      </div>
      <div className="flex relative flex-col items-center px-16 pt-10 w-full max-md:px-5 max-md:max-w-full">
        <Image
          src="/aivee2.png"
          alt=""
          className="object-fill absolute inset-0 size-full max-md:object-contain"
        />

        <section className="flex relative justify-center items-center self-center px-16 py-20 mt-96 max-w-full text-3xl font-semibold border-t border-b border-solid backdrop-blur-[80px] bg-emerald-200 bg-opacity-10 border-y-neutral-400 border-y-opacity-0 rounded-[120px] w-[1172px] max-md:px-5 max-md:mt-10 max-md:py-10 max-md:rounded-[70px]">
          <div className="flex flex-col items-center max-w-full w-[692px]">
            <h3 className="text-6xl max-sm:text-3xl text-center text-gray-200 max-md:max-w-full">
              Coming soon!
            </h3>
            <p className="self-stretch mt-10 text-center text-emerald-200 max-md:max-w-full max-md:text-base max-md:mt-5">
              Join waitlist to get latest update from Aivee
            </p>
            <Button className="justify-center px-20 py-6 mt-10 bg-emerald-200 rounded-[100px] text-zinc-950 max-md:px-8 max-md:text-xl max-md:py-3 max-md:mt-5">
              Join Waitlist
            </Button>
          </div>
        </section>
      </div>
      
      <footer className="flex relative justify-center items-center px-16 py-10 mt-48 w-full text-emerald-200 backdrop-blur-[80px] bg-zinc-950 bg-opacity-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between w-full max-w-[1436px] max-md:flex-wrap max-md:max-w-full max-md:flex-col max-md:content-center">
          <address className="flex not-italic text-xl max-md:text-base">
            Contact:{" "}
            <a href="mailto:hello@aivee.xyz" className="text-inherit">
              hello@aivee.xyz
            </a>
          </address>
          <div className="flex flex-col justify-center text-xl max-md:text-base max-md:text-center">
            <a href="#privacy-policy" className="text-inherit">Privacy Policy</a>
            <a href="#terms-of-use" className="mt-2 text-inherit">Terms of use</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;