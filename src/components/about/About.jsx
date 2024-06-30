import React from 'react';
import { ReactComponent as AboutImgThree } from '../Assets/casual-life-3d-three-quarter-view-of-young-woman-working-on-laptop_result.svg';
import { ReactComponent as ArrowLeft } from '../Assets/ArrowLeft.svg';
import { ReactComponent as ArrowRight } from '../Assets/ArrowRight.svg';



const ABout = () => {
  return (
      <section className={`md:min-h-screen my-24 md:my-0 text-white flex items-center justify-center max-w-7xl md:px-10 sm:px-4 px-3`}>
            <div className="w-full flex md:flex-row flex-col items-center justify-between">
                  <div className="relative my-4 w-[90%] sm:w-[70%]">
                      <AboutImgThree
                        className="w-full h-auto"
                    />
                  </div>
            
          <div className="w-full">
                <div className="">
                    <div className="flex items-center mb-2">
                        <h2 className="flex items-center text-red-500 font-semibold text-xl sm:text-2xl"><ArrowLeft/>01<ArrowRight/></h2>
                      <span className=" block text-md sm:text-base font-medium text-zinc-400">
                          About Me 💼
                      </span>
                      <h2 className="flex items-center text-red-500 font-semibold text-xl sm:text-2xl"><ArrowLeft/>/01<ArrowRight/></h2>
                    </div>
                    
                    <p className='text-justify text-xs sm:text-sm md:text-base mb-28 sm:mb-0'>
                      I’m an experienced Frontend Engineer with 2 years of programming experience and 1 year of professional experience in bringing designs to life, passionate about digital products that helps people experience everyday life, not endure it.
                        <br />
                        <br />
                         I am a passionate self-learner, exploring and building projects using various technologies that follows W3C Web Standards. 
                         <br />
                        <br />
                          I am  well versed in React. As a developer, I enjoy bridging the gap between functionality and design. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences. In addition, I am highly responsive to client needs and also committed to helping people realize their vision.
                    </p>
                </div>
              </div>
            </div>
      </section>
  )
}

export default ABout