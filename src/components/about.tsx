'use client';

import Image from 'next/image';
import BlurFade from './common/blur-fade';

const About = () => {
  return (
    <section className="flex flex-col items-start justify-start max-w-2xl mx-auto relative z-20">
      <BlurFade delay={0.25 * 4}>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg sm:text-2xl font-normal">About</h3>
          <h3 className="text-lg sm:text-2xl font-bold">Me 💼</h3>
        </div>
      </BlurFade>
      <BlurFade delay={0.25 * 4.5}>
        <p className="text-justify cursor-text text-xs sm:text-sm sm:mb-0">
          I&apos;m an experienced Frontend Engineer with 3 years of professional
          experience in bringing designs to life, passionate about digital
          products that helps people experience everyday life.
          <br />
          <br />
          I am well versed in ReactJs and NextJs. As a developer, I enjoy
          bridging the gap between functionality and design. My goal is to
          always build applications that are scalable and efficient under the
          hood while providing engaging, pixel-perfect user experiences.
          <br />
          <br />
          When I&apos;m not in full-on developer mode, you can find me hovering
          around on twitter or on linkedin, witnessing the journey of early
          startups or enjoying some free time. You can follow me on Twitter
          where I share tech-related bites and build in public, or you can
          follow me on GitHub. One last thing, I&apos;m available for freelance
          work, so feel free to reach out and say hello! I promise I don&apos;t
          bite 😉
        </p>
      </BlurFade>
    </section>
  );
};

export default About;
