import { Icons } from '../../assets/icons';
import { Button } from '../ui/button';
import Image from 'next/image';
import { MailCheck, SendIcon } from 'lucide-react';
import BlurFade from './blur-fade';

const Hero = () => {
  return (
    <div className="flex items-center justify-center px-4 pt-52 pb-20">
      <div className="flex flex-col items-center text-center justify-center max-w-lg md:max-w-xl w-full gap-6">
        <div className="grid text-center gap-3">
          <div className="border-[3.5px] dark:border-white w-32 h-32 grid place-items-center rounded-full p-2 justify-self-center">
            <Image
              src="/images/casual-life-3d-boy-sitting-at-the-desk-with-open-book.svg"
              alt="profile-picture"
              className="object-fit"
              unoptimized
              width={100}
              height={100}
            />
          </div>
          <BlurFade delay={0.25} inView>
            <h1 className="pointer-events-none z-10 whitespace-pre-wrap text-center text-lg sm:text-2xl md:text-4xl font-semibold dark:text-light-text text-deep-text ">
              Hi, I&apos;m Godsfavour Williams 👋
            </h1>
          </BlurFade>

          <BlurFade delay={0.25 * 2} inView>
            <span>✨ Frontend Engineer</span>
          </BlurFade>
          <BlurFade delay={0.25 * 2.5} inView>
            <div className="flex items-center justify-center gap-3 transition-all duration-800 ease-in-out">
              <a
                href="https://github.com/facebook/react"
                className="cursor-pointer text-[#4338CA] "
                target="_blank"
                rel="noreferrer"
              >
                <Icons.React className="w-6 h-6" />
              </a>

              <a
                href="https://bootstrap5.com/"
                className="cursor-pointer text-[#F2C94C]"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.Bootstrap className="w-6 h-6" />
              </a>

              <a
                href="https://sass-lang.com/"
                className="cursor-pointer text-[#FF8098]"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.Sass className="w-6 h-6" />
              </a>

              <a
                href="https://www.javascript.com/"
                className="cursor-pointer text-yellow-300"
                target="_blank"
                rel="noreferrer"
              >
                <Icons.Js className="w-6 h-6" />
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
            </div>
          </BlurFade>
        </div>
        <BlurFade delay={0.25 * 3} inView>
          <span className="text-xs sm:text-sm md:text-base">
            Styling the user experience components that meet the requirements of
            our mocks and fulfill our user stories is my Calling, believes in
            the power of community.
          </span>
        </BlurFade>
        <BlurFade delay={0.25 * 3.5} inView>
          <div className="gap-5 flex items-center justify-center">
            <Button
              variant="default"
              className="bg-gradient-to-r from-[#C6FCA6] to-[#A7FCEE] font-semibold text-[#151515] text-xs sm:text-sm p-4 h-12 rounded-lg flex items-center"
            >
              Let&apos;s Talk <SendIcon className="ml-3" />
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
                className="bg-[#203D40] hover:bg-[#151E28]/80 text-white p-4 w-full rounded-lg flex items-center"
              >
                <MailCheck className=" w-4 h-4" />
              </a>
            </div>
          </div>
        </BlurFade>
      </div>
    </div>
  );
};

export default Hero;
