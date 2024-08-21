import React from 'react';

import pic from "../../public/photo.avif2 (2).jpg";

import { FaLinkedin, FaInstagram, FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript, IoLogoNodejs } from "react-icons/io5";

import { ReactTyped} from "react-typed";
function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, Iam  a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
            My name is Manjul Joshi. I am looking for a job as a web developer. 
            Besides that, I am a normal guy who enjoys hiking and spending time with friends. 
            I am ambitious and hard-working and believe you will give me a chance to prove my words.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="  space-y-2">
                <h1 className="font-bold text-center ">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.linkedin.com/in/manjul-joshi-71b889286" target="_blank">
                      <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                    </a>
                  </li>
                  <li>
                    <a href="http://www.instagram.com/manjul2661" target="_blank">
                      <FaInstagram className="text-2xl cursor-pointer hover:text-pink-600" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className=" space-y-2">
                <h1 className="font-bold text-center">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer hover:text-green-600" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer hover:text-blue-600" />
                  <IoLogoJavascript className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer hover:text-yellow-400" />
                  <IoLogoNodejs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer hover:text-green-600" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;