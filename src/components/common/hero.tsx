import {
  FaReact,
  FaBootstrap,
  FaSass,
  FaJs,
  FaLocationArrow,
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { Icons } from '../../assets/icons';
import { Button } from '../ui/button';
import AnimatedShinyText from '../ui/animated-shiny-text';

const Hero = () => {
  return (
    <div className="flex items-center justify-center relative transition-all duration-700 ease-in-out">
      <div className="px-4 py-52">
        <div className="grid gap-6">
          <div className="grid text-center gap-3">
            <div className="border-[3.5px] dark:border-white w-32 h-32 grid place-items-center rounded-full p-2 justify-self-center">
              <img
                src="/images/casual-life-3d-boy-sitting-at-the-desk-with-open-book.svg"
                alt="profile-picture"
                className="object-fit"
              />
            </div>
            <h1 className="pointer-events-none z-10 whitespace-pre-wrap text-center text-lg sm:text-2xl md:text-4xl font-semibold dark:text-light-text text-deep-text ">
              Hi, I'm Godsfavour Williams 👋
            </h1>

            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 ">
              <span>✨ Frontend Engineer</span>
            </AnimatedShinyText>
            <ul className="flex items-center justify-center gap-3 transition-all duration-800 ease-in-out">
              <a
                href="https://github.com/facebook/react"
                className="cursor-pointer text-[#4338CA]"
                target="_blank"
                rel="noreferrer"
              >
                <FaReact />
              </a>

              <a
                href="https://bootstrap5.com/"
                className="cursor-pointer text-[#F2C94C]"
                target="_blank"
                rel="noreferrer"
              >
                <FaBootstrap />
              </a>

              <a
                href="https://sass-lang.com/"
                className="cursor-pointer text-[#FF8098]"
                target="_blank"
                rel="noreferrer"
              >
                <FaSass />
              </a>

              <a
                href="https://www.javascript.com/"
                className="cursor-pointer text-yellow-300"
                target="_blank"
                rel="noreferrer"
              >
                <FaJs />
              </a>

              <a
                href="https://tailwindcss.com/"
                className="cursor-pointer "
                target="_blank"
                rel="noreferrer"
              >
                <Icons.TailwindIcon className="w-6" />
              </a>

              <a
                href="https://nextjs.org/"
                className="cursor-pointer "
                target="_blank"
                rel="noreferrer"
              >
                <Icons.NextJsIcon className="w-8 fill-black  dark:fill-white" />
              </a>
            </ul>
          </div>

          <div className="text-center max-w-lg md:max-w-xl w-full text-xs sm:text-sm md:text-base">
            Styling the user experience components that meet the requirements of
            our mocks and fulfill our user stories is my Calling, believes in
            the power of community.
          </div>

          <div className="gap-5 flex items-center justify-center">
            <Button
              variant="default"
              className="bg-gradient-to-r from-[#C6FCA6] to-[#A7FCEE] font-semibold text-[#151515] text-xs sm:text-sm p-4 h-12 rounded-lg flex items-center"
            >
              Let's Talk <FaLocationArrow className="ml-3" />
            </Button>

            <div className="gap-2 flex items-center justify-center">
              <a
                href="https://api.whatsapp.com/send?phone=+2348159675934&text=Hello, more information!"
                target="_blank"
                rel="noreferrer"
                className="bg-[#203D40] hover:bg-[#151E28]/80 text-white p-3.5 rounded-lg flex items-center"
              >
                <Icons.WHatsAppIcon />
              </a>
              <a
                href="mailto:williamsgodsfavoursolomon@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="bg-[#203D40] hover:bg-[#151E28]/80 text-white p-4 rounded-lg flex items-center"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
