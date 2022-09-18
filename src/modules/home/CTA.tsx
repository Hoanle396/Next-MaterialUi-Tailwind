import { styles } from "../../styles";

const CTA = () => (
   <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-blue-gradient rounded-[20px] box-shadow`}
   >
      <div className="flex-1 flex flex-col">
         <h2 className={styles.heading2}>Let’s try our service now!</h2>
         <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
         </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
         <button
            type="button"
            className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]`}
         >
            Get Started
         </button>
      </div>
   </section>
);

export default CTA;