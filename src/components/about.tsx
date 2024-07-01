const About = () => {
  return (
    <section className="flex items-center justify-center max-w-7xl mx-auto md:px-10 sm:px-4 px-3 relative z-20">
      <div className="w-full grid grid-cols-2 gap-4 items-center">
        <img
          src="/images/casual-life-3d-three-quarter-view-of-young-woman-working-on-laptop_result.svg"
          alt="about-img"
          className="w-full h-auto"
        />

        <div className="w-full space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-lg sm:text-2xl font-normal">About</span>
            <span className="text-lg sm:text-2xl font-extrabold">Me 💼</span>
          </div>

          <p className="text-justify cursor-text text-xs sm:text-sm sm:mb-0">
            I’m an experienced Frontend Engineer with 3 years of programming
            experience and 2 years of professional experience in bringing
            designs to life, passionate about digital products that helps people
            experience everyday life.
            <br />
            <br />
            I am well versed in ReactJs and NextJs. As a developer, I enjoy
            bridging the gap between functionality and design. My goal is to
            always build applications that are scalable and efficient under the
            hood while providing engaging, pixel-perfect user experiences.
            <br />
            <br />
            I began my journey as a frontend developer in 2021, and since then,
            I've continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way.
            <br />
            <br />
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on linkedin, witnessing the journey of early
            startups or enjoying some free time. You can follow me on Twitter
            where I share tech-related bites and build in public, or you can
            follow me on GitHub. One last thing, I'm available for freelance
            work, so feel free to reach out and say hello! I promise I don't
            bite 😉
          </p>
          <div className="flex flex-col gap-4 ">
            <h1>Finally, Education.</h1>
            <div className="flex items-center gap-4 ">
              <img
                src="/images/uniuyo-logo.jpeg"
                alt="uniuyo-logo"
                className="w-14 h-14 border rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold">University of uyo</h3>
                <p className="text-sm">B.E. in Computer Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
