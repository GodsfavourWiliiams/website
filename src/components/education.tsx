import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BlurFade from './common/blur-fade';

export const Education: React.FC<{}> = () => {
  return (
    <div className="flex flex-col gap-4 max-w-2xl mx-auto w-full mt-10">
      <BlurFade delay={0.25 * 5.75}>
        <h3 className="text-lg sm:text-2xl font-normal">Finally, Education.</h3>
      </BlurFade>

      <BlurFade delay={0.25 * 6}>
        <Link
          href="https://uniuyo.edu.ng/"
          target="_blank"
          className="flex items-center gap-4 cursor-pointer z-30"
        >
          <Image
            src="/images/uniuyo-logo.jpeg"
            alt="uniuyo-logo"
            className="w-14 h-14 border rounded-full"
            unoptimized
            width={50}
            height={50}
          />
          <div className="w-full flex items-start justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold">University of uyo</h3>
              <p className="text-sm">B.E. in Computer Engineering</p>
            </div>
            <span className="text-xs">2018 - 2024</span>
          </div>
        </Link>
      </BlurFade>
    </div>
  );
};
