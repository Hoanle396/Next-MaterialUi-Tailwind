import type { NextPage } from 'next'
import Layout from '../../components/Layout'
import Banner from './Banner'
import Clients from './Clients'
import CTA from './CTA'
import Introduction from './Introduction'
import { Slider } from './Slider/Slider'
import Stats from './Starts'

const Home: NextPage = () => {
  return (
    <Layout showBackground>
      <Banner />
      <Stats />
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
      <Clients />
      <Slider />
      <CTA />
    </Layout>
  )
}

export default Home