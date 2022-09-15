import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/NavBar'

const Home: NextPage = () => {
  return (
    <Layout showCircles>
      <div
        className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <h2
          className="text-3xl font-extrabold leading-9 tracking-tight text-gray-700 sm:text-4xl sm:leading-10"
        >
          Ready to dive in?
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

export default Home
