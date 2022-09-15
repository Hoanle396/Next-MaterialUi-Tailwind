
import { useRouter } from "next/router";
import React from "react";
import { PageTransition } from "../PageTransition";
import Footer from "./Footer";
import Navbar from "./NavBar";

interface LayoutProps {
   children?: React.ReactNode;
   showCircles?: boolean;
   title?: string;
}

const Layout: React.FC<LayoutProps> = ({
   children,
   showCircles,
   title
}) => {
   const router = useRouter();

   return (
      <div className={`${showCircles && "overflow-hidden"}`}>
         <Navbar />
         <main
            className={`prose prose-lg relative mx-auto flex flex-col justify-center bg-white px-4 dark:prose-dark dark:bg-dark`}
         >
            {showCircles && (
               <div className="fixed z-0 top-0 left-0 right-0">
                  <div className="absolute top-0 right-2/3 overflow-visible opacity-50">
                     <div className="circle-background absolute h-[900px] w-[700px] rounded-[40rem] mix-blend-multiply"></div>
                  </div>

                  <div className="absolute top-0 left-56 overflow-visible opacity-50">
                     <div className="circle-background-2 absolute h-[600px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
                  </div>
               </div>
            )}
            <div className="z-30 min-h-screen">
               <PageTransition>{children}</PageTransition>
            </div>
         </main>
         <Footer />
      </div>
   );
};

export default Layout;