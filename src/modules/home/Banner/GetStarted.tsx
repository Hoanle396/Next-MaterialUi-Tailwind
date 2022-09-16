import { FC } from "react";
import ArowUp from "../../../components/icons/ArowUp";
import { styles } from "../../../styles";

const GetStarted: FC = () => (
   <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary-main w-[100%] h-[100%] rounded-full`}>
         <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
               <span className="text-gradient">Get</span>
            </p>
            <ArowUp className="w-[23px] h-[23px] object-contain" />
         </div>

         <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Started</span>
         </p>
      </div>
   </div>
);

export default GetStarted;