import Link from 'next/link';
import { useState } from "react";
import { navLinks } from "../../../constants";

const Navbar = () => {
   const [active, setActive] = useState("Home");
   const [toggle, setToggle] = useState(false);

   return (
      <nav className="w-10/12 flex py-6 mx-auto justify-between items-center navbar">
         <img src="/assets/elearning.png" alt="" className="w-[48px] h-[48px]" />

         <ul className="list-none md:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
               <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[20px] font-medium rounded-3xl shadow-xl px-6 py-2 hover:bg-slate-200 ${active === nav.title ? "text-green-500 bg-slate-100" : "text-purple-500"
                     } ${index === navLinks.length - 1 ? "mr-0" : "mr-5"}`}
                  onClick={() => setActive(nav.title)}
               >
                  <Link
                     href={`#${nav.id}`}
                  >{nav.title}
                  </Link >
               </li>
            ))}
         </ul>

         <div className="md:hidden flex flex-1 justify-end items-center z-50">
            <div onClick={() => setToggle(!toggle)}>
               {toggle ? <img src="/assets/cancel.png" alt="" className="w-[28px] h-[28px] object-contain" /> : <img src="/assets/menu.png" alt="" className="w-[28px] h-[28px] object-contain" />}
            </div>
            <div
               className={`${!toggle ? "hidden" : "flex"
                  } p-6 bg-slate-800 w-full absolute top-20 left-0 my-2 min-w-[140px] rounded-xl sidebar`}
            >
               <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                     <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[20px]  ${active === nav.title ? "text-green-500" : "text-purple-500"} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                        onClick={() => setActive(nav.title)}
                     >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;