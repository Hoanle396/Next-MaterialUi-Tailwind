import * as React from 'react';
import { styles } from '../../../styles';

export interface IIntroductionProps {
   img: string;
   tip: string;
   title: string;
   list: string[];
   onClick?: () => void;
   reverse?: boolean;
}

export default function Introduction({
   img,
   list,
   reverse = false,
   tip,
   title,
   onClick,
}: IIntroductionProps) {
   return (
      <div className={`flex md:flex-row flex-col m-5 ${reverse && 'md:flex-row-reverse'}`}>
         <div className={`flex-col flex-1 ${styles.flexStart} `}>
            <img src={img} alt='' className="w-[100%] h-[100%] relative z-[5]" />
         </div>
         <div className={`flex-col flex-1 ${styles.flexCenter}`}>
            <div className='introduction'>
               <h3 className='introduction-tip'>{tip}</h3>
               <h1 className='introduction-title'>{title}</h1>
               <div className='introduction-devide'></div>
               <ul className='introduction-list-feature'>
                  {list.map((t) => (
                     <li key={t}>{t}</li>
                  ))}
               </ul>
               <button onClick={onClick} className='button button-secondary'>
                  Learn more
               </button>
            </div>
         </div>
      </div>
   );
}