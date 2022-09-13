import { useState } from "react";
import Link from 'next/link'
import { Google, Mail, Password } from "../../icons";
import { navLinks } from "../../../constants";

const Navbar = () => {
   const [active, setActive] = useState("Home");
   const [toggle, setToggle] = useState(false);

   return (
      <nav className="w-10/12 flex py-6 mx-auto justify-between items-center navbar">
         <Google className="w-[32px] h-[32px]" />

         <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
               <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[18px] font-medium rounded-3xl shadow-xl px-4 py-1 ${active === nav.title ? "text-green-500" : "text-purple-500"
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

         <div className="sm:hidden flex flex-1 justify-end items-center">
            <div onClick={() => setToggle(!toggle)}>
               {toggle ? <Google className="w-[28px] h-[28px] object-contain" /> : <Password className="w-[28px] h-[28px] object-contain" />}
            </div>
            <div
               className={`${!toggle ? "hidden" : "flex"
                  } p-6 bg-slate-800 w-full absolute top-20 left-0 my-2 min-w-[140px] rounded-xl sidebar`}
            >
               <ul className="list-none flex justify-end items-start flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                     <li
                        key={nav.id}
                        className={`font-poppins font-medium cursor-pointer text-[16px]  ${active === nav.title ? "text-green-500" : "text-purple-500"
                           } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
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