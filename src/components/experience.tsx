'use client';
import Image from 'next/image';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useOutsideClick } from '@/hooks/use-outside-click';
import BlurFade from './common/blur-fade';
import { cards } from '@/utlis/static';

export const Experience: React.FC<{}> = () => {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="mt-10 z-30 relative max-w-2xl mx-auto w-full ">
      <BlurFade delay={0.25 * 4}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg sm:text-2xl font-normal">
            Work Experience
          </span>
        </div>
      </BlurFade>

      <BlurFade delay={0.25 * 4.5}>
        <ul className="gap-4">
          {cards.map((card) => (
            <motion.div
              layoutId={`card-${card.company}-${id}`}
              key={`card-${card.company}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-row ">
                <motion.div layoutId={`image-${card.company}-${id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.company}
                    className="h-14 w-14 rounded-lg object-contain border p-1.5"
                  />
                </motion.div>
                <div>
                  <motion.h3
                    layoutId={`company-${card.company}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-left"
                  >
                    {card.company}
                  </motion.h3>

                  <motion.p
                    layoutId={`title-${card.company}-${id}`}
                    className="text-neutral-600 text-xs dark:text-neutral-400 text-left"
                  >
                    {card.title}
                  </motion.p>
                </div>
              </div>{' '}
              <div className="flex flex-col items-end justify-end gap-2">
                <motion.p
                  layoutId={`period-${card.period}-${id}`}
                  className="text-neutral-600 text-xs font-normal dark:text-neutral-400 text-left sm:block hidden"
                >
                  {card.period}
                </motion.p>{' '}
                <motion.button
                  layoutId={`button-${card.company}-${id}`}
                  className="px-4 py-2 text-[13px] rounded-full font-normal bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                >
                  {card.ctaText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </ul>
      </BlurFade>
      <AnimatePresence>
        {active && typeof active === 'object' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white sm:bg-black/20 backdrop-blur-sm h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === 'object' ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.div
              layoutId={`card-${active.company}-${id}`}
              ref={ref}
              className="relative w-full max-w-[500px] h-full sm:h-fit sm:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-auto"
            >
              <motion.div
                layoutId={`image-${active.company}-${id}`}
                className="p-4 mt-20 sm:mt-0 flex gap-4 flex-col"
              >
                <motion.button
                  key={`button-${active.company}-${id}`}
                  layout
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                    transition: {
                      duration: 0.05,
                    },
                  }}
                  className="flex sm:hidden items-center justify-center text-destructive text-sm w-8 h-8 gap-4 border rounded-xl"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active?.images?.[0] ?? ''}
                  alt={active.company}
                  className="w-full h-auto rounded-xl object-contain border"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.company}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.company}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.company}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.company}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 p-4 text-xs md:text-sm lg:text-base h-full sm:h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 md:[mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                >
                  {typeof active.content === 'function'
                    ? active.content()
                    : active.content}
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
