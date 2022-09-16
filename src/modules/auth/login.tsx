import { Card } from '@material-tailwind/react'
import { CardBody, CardFooter } from '@material-tailwind/react/components/Card'
import { Email, Lock } from '@mui/icons-material'
import { InputAdornment, Link, TextField } from '@mui/material'
import type { NextPage } from 'next'
import Layout from '../../components/Layout'

const Login: NextPage = () => {
   return (
      <Layout showCircles>
         <div
            className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"
         >
            <h2
               className="text-3xl flex justify-center font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10"
            >
               <span className="text-teal-500">iEdu</span>
            </h2>
            <div className="mt-8 flex lg:mt-16 justify-center">
               <Card className='shadow-2xl p-2 md:p-10 rounded-3xl bg-transparent w-[464px] h-[auto]'>
                  <span className="text-3xl text-purple-700 font-bold">Sign In</span>
                  <span className="text-lg text-slate-500 font-medium mb-6">Login to manage your account</span>
                  <CardBody>
                     <input type="email" className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 my-5 " placeholder="Email" required />
                     <input type="password" className="bg-gray-50 border border-blue-300 text-gray-900 text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-full p-4 mb-5 " placeholder="Password" required />
                  </CardBody>
                  <CardFooter className='flex flex-col items-center'>
                     <button type="submit" className="text-white bg-gradient-to-r from-teal-200 via-teal-400 to-teal-600 hover:bg-gradient-to-br border border-gray-300 text-xl font-semibold rounded-2xl block w-full p-3 mb-5 shadow-xl">Login</button>
                     <span className="text-lg text-slate-500 font-medium">{"Don\'t have account?"} <Link href='/register'>Register</Link></span>
                  </CardFooter>
               </Card>
            </div>
         </div>
      </Layout>
   )
}

export default Login