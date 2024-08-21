import React,{useState} from 'react';
import pic from "../../public/photo.avif2 (2).jpg"; // Make sure the path is correct
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import {Link} from "react-scroll";
function Navbar() {
  const[menu,setMenu]=useState(false);
  const navItems=[
    {
      id:1,
      text:"Home",color:"text-black-700"
    },
    {
      id:2,
      text:"About",color:"text-black-700"
    },
    {
      id:4,
      text:"Projects",color:"text-black-700"
    },
    {
      id:5,
      text:"Contact",color:"text-black-700"
    },
  ]
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-4 h-16 shadow-md fixed top-0 left-0 right-0 z-200 bg-light bg-orange-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={pic} className="h-12 w-12 rounded-full" alt="Profile" />
          <h1 className="ml-4 text-xl font-semibold">
            Manju<span className="text-red-700">L</span>
            <p className="text-sm text-red-700">Joshi</p>
          </h1>
        </div>
        {/* desktop navbar*/}
        <div>
          <ul className="hidden md:flex space-x-6">
            {navItems.map(({id,text,color}) =>(
                <li key={id} className={`hover:scale-105 duration-200 cursor-pointer ${color}`}>

                  <Link to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  >{text}</Link>
                
                </li>
            ))}
          </ul>
          <div onClick={()=>setMenu(!menu)} className="md:hidden">
            {menu?<RxCross2 size={24} />:< MdOutlineMenu  size={24}/>}
          </div>
        </div>
      </div>
      {/*mobile navbar*/}
      {
         menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col  h-screen items-center justify-center space-y-4 text-xl">
            {navItems.map(({id,text,color}) =>(
                <li key={id} className={`hover:scale-105 duration-200 font-semibold cursor-pointer  ${color}`}>
                <Link
                 onClick={()=>setMenu(!menu)}
                  to={text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  >{text}</Link>
                </li>
            ))}
            </ul>
          </div>
         )
      }
     
    </div>
  );
}

export default Navbar;
