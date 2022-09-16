import type { NextPage } from 'next'
import Layout from '../../components/Layout'

const Courses: NextPage = () => {
   return (
      <Layout showBackground>
         <div
            className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
         >
            <h2
               className="text-3xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-4xl sm:leading-10"
            >
               Courses
               <br />
               <span className="text-indigo-600">Next + Material UI + Tailwind CSS</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
               <div className="inline-flex rounded-md shadow">

               </div>
            </div>
         </div>
      </Layout>
   )
}

export default Courses