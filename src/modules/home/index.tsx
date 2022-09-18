import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import Banner from './Banner'
import Introduction from './Introduction'
import { Slider } from './Slider/Slider'

const Home: NextPage = () => {
  return (
    <Layout showBackground>
      <Banner />
      <Introduction
        img='https://codegym.vn/wp-content/uploads/2021/08/CodeGym-Coding.webp'
        list={[
          'Create fast digging time',
          'Minimize costs',
          'Long-term development',
        ]}
        tip='Why students love iEdu?'
        title='iEdu is a highly effective training model that helps students quickly mature'
      />
      {/* <Introduction
        img='https://d35b8pv2lrtup8.cloudfront.net/assets/img/social_book/homepage/two-image@2x.5d31fec3b670fb157306.png'
        list={[
          'Get brand offers',
          'Get the best tools to grow your social media outreach: Photo Studio, Video Background Remover, Photo Background Remover, Photo Cartoonizer, Stickers and Filters, Tag Researcher, IG Dmers, YouTube Builder, SocialBook Checker',
          'Find other influencers to collaborate with',
        ]}
        reverse
        tip='Why do influencers love SocialBook?'
        title='SocialBook helps influencers to grow, make better content, and make money'
      /> */}
      <Slider />
      <div
        className=" max-w-screen-xl py-16"
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