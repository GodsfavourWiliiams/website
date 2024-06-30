import React, { useState, useRef, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import "./rocketDock.css";
import {ReactComponent as CalenderLogo} from "../Assets/Calendar_duotone.svg";
import { ReactComponent as MoreIcon } from '../Assets/Widget.svg';
import { ReactComponent as ProjectLogo} from "../Assets/Code.svg";
import { ReactComponent as AboutLogo} from "../Assets/User_fill.svg";
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as HomeLogo} from "../Assets/Home_fill.svg";
import { ReactComponent as MessageLogo} from "../Assets/Message_alt_light.svg";
import { FaLinkedinIn, FaGithub, FaTwitter, FaShare, FaTimes} from "react-icons/fa";
import { ReactComponent as Download } from '../Assets/Hotspot.svg';
import { ReactComponent as Music } from '../Assets/Music_fill.svg';
import song from '../Assets/Heart-Of-The-Ocean.mp3';
import { ReactComponent as NavLogo } from '../Assets/Williams.svg';
import { QRCodeSVG } from 'qrcode.react';


const RocketDOck = () => {
    
    const ref = useRef(null);
    const [click, setClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [social, setSocial] = useState(false);
    
    // program to print the text
    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause();
        }
    }

    
  return (
    <>
        <nav className={` w-full md:px-10 sm:px-4 px-3 z-50 fixed inset-x-0 top-4 flex justify-center items-center transition-all duration-700 ease-in-out`}>
            <div className="w-full backdrop-blur-sm flex items-center justify-between transition-all duration-700 ease-in-out rounded-md">
                <Link to="/">
                    <NavLogo className=''/>
                 </Link>
                <button className="flex items-center gap-2 bg-zinc-700 text-base text-white font-medium cursor-pointer px-2 sm:px-4 py-2 rounded-md focus:outline-none" 
                 onClick={() =>  setIsOpen(true)}>
                    <span className="hidden sm:block ">Share</span>
                    <Download/>
                </button>
            </div>
            </nav>
            <div className="dock_container backdrop-blur-sm z-50 fixed bottom-6 sm:bottom-10 shadow-lg flex items-center justify-center bg-zinc rounded-xl border ">
                <ul className="flex items-center justify-between space-x-3 md:space-x-4 lg:space-x-6 py-3 px-3 md:px-4 transition-all duration-700 ease-in-out">
                   
                    <NavLink className=" ease-in-out list-none inline-block relative" to="/" end >
                    {({ isActive }) => (
                            <li className={` ${isActive ? " bg-indigo-700 " : " bg-zinc-700 "} transition-all duration-700 ease-in-out  rounded-md p-1`}>
                                <span className="rounded text-white tip text-xs hidden absolute bottom-14 text-center w-full p-1 left-0">
                                    Home
                                </span>
                                <HomeLogo className='Logo w-10 h-10 '/>
                            </li>
                        )}
                        
                    </NavLink>

                    <NavLink className=" list-none inline-block relative " to="/about">
                    {({ isActive }) => (
                        <li className={` ${isActive ? " bg-indigo-700 " : " bg-zinc-700 "} transition-all duration-700 ease-in-ou p-1 rounded-md`}>
                            <span className="rounded text-white tip text-xs hidden absolute bottom-14 text-center w-full p-1 left-0">
                                About
                            </span>
                                    <AboutLogo className='Logo w-10 h-10 '/>
                         </li>
                        )}
                    </NavLink>
                 
                  
                        <NavLink className=" list-none inline-block relative " to="/projects">
                        {({ isActive }) => (
                           
                           <li className={` ${isActive ? " bg-indigo-700 " : " bg-zinc-700 "} transition-all duration-700 ease-in-out p-1 rounded-md`}>
                               <span className="rounded text-white tip text-xs hidden absolute bottom-14 text-center w-full p-1 left-0">
                                   Projects
                               </span>
                                    <ProjectLogo className='Logo w-10 h-10 '/>
                            </li>
                            )}
                        </NavLink>
                    
                        <NavLink className=" list-none inline-block relative " to="/contactme">
                        {({ isActive }) => (
                           
                            <li className={` ${isActive ? " bg-indigo-700 " : " bg-zinc-700 "} transition-all duration-700 ease-in-out p-1 rounded-md`}>
                                <span className="rounded text-white tip text-xs hidden absolute bottom-14 text-center w-full p-1 left-0">
                                    Contact
                                </span>
                                    <MessageLogo className='Logo w-10 h-10 '/>
                                </li>
                            )}
                        </NavLink>
                    
                    <div className={`hidden sm:flex items-center justify-between space-x-3 md:space-x-4 lg:space-x-6  `}>

                        <Link className=" list-none inline-block relative " to="/videocall">
                            <li className={`transition-all duration-700 ease-in-out p-1 rounded-md  bg-zinc-700 `}>
                                <span className="rounded text-white tip text-xs hidden absolute bottom-14 text-center w-full p-1 left-0">
                                    Meet
                                </span>
                                <CalenderLogo className='w-10 h-10 '/>
                            </li>
                        </Link>

                        <a href="https://twitter.com/Godsfavour_sw" target="_blank" className="list-none inline-block relative "  rel="noreferrer">
                            <li className="transition-all duration-700 ease-in-out bg-zinc-700 p-3 rounded-md">
                                <span className="rounded text-white tip text-xs hidden absolute bottom-14 text-center w-full p-1 left-0">
                                    Twitter
                                </span>
                                <FaTwitter className='Logo w-6 h-6 text-white '/>
                            </li>
                        </a>
                    
                    
                        <a href="https://github.com/GodsfavourWiliiams" target="_blank" rel="noreferrer" className=" list-none inline-block relative ">
                            <li className="transition-all duration-700 ease-in-out bg-zinc-700 p-3 rounded-md">
                                <span className="rounded text-white tip text-xs hidden absolute bottom-14 text-center w-full p-1 left-0">
                                    Github
                                </span>
                                <FaGithub className='Logo text-white w-6 h-6 '/>
                            </li>
                        </a>
                    
                        <a href="http://linkedin.com/in/godsfavourwilliams" target="_blank" rel="noreferrer" className="list-none inline-block relative " >
                            <li className="transition-all duration-700 ease-in-out bg-zinc-700 p-3 rounded-md">
                                <span className="rounded text-white tip text-xs hidden absolute bottom-14 text-center w-full p-1 left-0 ">
                                    LikedIn
                                </span>
                                <FaLinkedinIn className='Logo text-white w-6 h-6 '/>
                            </li>
                        </a>
                    </div>                    

                       

                        <div className="border-l h-10">
                            <span className="sr-only">
                                border
                            </span>
                        </div>
                
                {/* mobile view */}

            

                        <li className="list-none transition-all duration-700 ease-in-out cursor-pointer hidden sm:inline-block relative bg-zinc-600 p-2 rounded-md" onClick={() => handleClick()}>
                            <span className="rounded-lg text-white text-xs hidden absolute bottom-14 text-center w-full p-1 left-0">
                                Music On
                            </span>
                            <span className={`${click ? "block" : "hidden"} rounded bg-white absolute w-1 p-1 left-0 top-0`}/>
                            <span className="">
                                <Music className='Logo w-8 h-8 '/>
                            </span>
                                <audio src={song} ref={ref}  loop />
                        </li>

                        <li className="list-none sm:hidden inline-block cursor-pointer relative transition-all duration-700 ease-in-out bg-zinc-700 p-3 rounded-md" onClick={() => setSocial(!social)}>
                            <span className="rounded text-white tip text-xs hidden absolute bottom-14 text-center w-full p-1 left-0 ">
                                More
                            </span>
                            <MoreIcon className='Logo text-white w-6 h-6 '/>
                        </li>
                </ul>
        </div>
        <div className={` fixed bottom-[90px] z-50 sm:hidden flex items-center justify-center `}>
                
                <ul className={` flex items-center justify-between space-x-4 p-3 `}>
                    <Link className={` ${social ? "item" : "social"} transition-all duration-700 ease-in-out inline-block relative rounded-md p-1 bg-zinc-700`} to="/videocall">
                        <li className={` `}>
                            <CalenderLogo className='w-6 h-6 '/>
                        </li>
                    </Link>
                    <li className={` ${social ? "item" : "social"} transition-all duration-700 ease-in-out cursor-pointer bg-zinc-700 p-1 shadow rounded-md`} onClick={() => handleClick()}>
                            <span className={`${click ? "block" : "hidden"} rounded bg-white absolute w-1 p-1 left-0 top-0`}/>
                            
                            <span className="">
                                <Music className='w-6 h-6 '/>
                            </span>
                                <audio src={song} ref={ref}  loop />
                    </li>
                    <li className={` ${social ? "item" : "social"} transition-all duration-700 ease-in-out bg-zinc-700 p-1 rounded-md list-none inline-block relative `}>
                        <a href="https://twitter.com/Godsfavour_sw" target="_blank" className=""  rel="noreferrer">
                            <span className="">
                                <FaTwitter className=' w-6 h-6 text-white '/>
                            </span>
                        </a>
                    </li>
                    <li className={` ${social ? "item" : "social"} transition-all duration-700 ease-in-out bg-zinc-700 p-1 rounded-md list-none inline-block relative `}>
                        <a href="http://linkedin.com/in/godsfavourwilliams" target="_blank" rel="noreferrer" className="" >
                        <span className="">
                            <FaLinkedinIn className='text-white w-6 h-6 '/>
                        </span>
                    </a>
                    </li>
                    <li className={` ${social ? "item" : "social"} transition-all duration-700 ease-in-out bg-zinc-700 p-1 rounded-md list-none inline-block relative `}>
                        <a href="https://github.com/GodsfavourWiliiams" target="_blank" rel="noreferrer" className=" ">
                            <span className="">
                                <FaGithub className=' text-white w-6 h-6 '/>
                            </span>
                        </a>
                    </li>
                
                </ul>
            </div>
        <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setIsOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:max-w-lg">
                
                <div className="w-full relative flex flex-col items-center justify-center rounded-md bg-white p-6">
                 <button
                   className="absolute top-4 right-4 focus:outline-none"
                   onClick={() => setIsOpen(false)}
                 >
                   <FaTimes className="h-6 w-6" />
                 </button>
                    <QRCodeSVG value="https://godsfavourwilliams.netlify.app" className="p-4 sm:p-0" size="250"/>,
                    <p className="text-xs sm:text-md font-semibold flex items-center">Scan <FaShare className="mx-2"/> Link</p>
                 </div>
              </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default RocketDOck
