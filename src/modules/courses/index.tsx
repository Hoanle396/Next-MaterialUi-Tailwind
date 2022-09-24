import { Pagination } from '@mui/lab';
import { Grid } from '@mui/material';
import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import { styles } from '../../styles';
import FilterSideBar from './FilterSideBar';
const Courses: NextPage = () => {
   return (
      <>
         {/* <FilterSideBar /> */}
         <Layout showBackground>

            <div className="mx-auto max-w-screen-xl w-11/12 px-4 sm:px-6 pb-24 lg:px-8">
               <div className={`${styles.flexCenter} cursor-pointer py-16 flex-col`}>
                  <div className={`${styles.flexCenter} flex-col bg-transparent max-w-4xl`}>
                     <h1 className="flex-1 text-center font-poppins font-semibold sm:text-[72px] text-[52px] text-purple-600 sm:leading-[100.8px] leading-[75px]">
                        Latest News & Articles
                     </h1>
                     <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                     </p>
                  </div>
               </div>
               <Grid container spacing={3}>
                  <Grid item xs={12} sm={4} lg={3}>
                     <FilterSideBar />
                  </Grid>
                  <Grid item xs={12} sm={8} lg={9}>
                     <div className={`${styles.flexCenter} cursor-pointer flex-col`}>
                        <div className={`${styles.flexCenter} flex-row bg-transparent max-w-5xl mt-10 grid gap-10 md:grid-cols-3 lg:grid-cols-3`}>
                           <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                              <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                              <div className="px-6 py-4">
                                 <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                 <p className="text-gray-700 text-base h-20">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                 </p>
                              </div>
                              <div className="px-6 pt-4 pb-2">
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                              </div>
                           </div>
                           <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                              <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                              <div className="px-6 py-4">
                                 <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                 <p className="text-gray-700 text-base h-20">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                 </p>
                              </div>
                              <div className="px-6 pt-4 pb-2">
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                              </div>
                           </div>
                           <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                              <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                              <div className="px-6 py-4">
                                 <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                 <p className="text-gray-700 text-base h-20">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                 </p>
                              </div>
                              <div className="px-6 pt-4 pb-2">
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                              </div>
                           </div>
                           <div className="max-w-sm rounded overflow-hidden shadow-lg ">
                              <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                              <div className="px-6 py-4">
                                 <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                 <p className="text-gray-700 text-base h-20">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                 </p>
                              </div>
                              <div className="px-6 pt-4 pb-2">
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                              </div>
                           </div>
                           <div className="max-w-sm rounded overflow-hidden shadow-lg">
                              <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                              <div className="px-6 py-4">
                                 <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                 <p className="text-gray-700 text-base h-20">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                                 </p>
                              </div>
                              <div className="px-6 pt-4 pb-2">
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                              </div>
                           </div>
                           <div className="max-w-sm rounded overflow-hidden shadow-lg">
                              <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                              <div className="px-6 py-4">
                                 <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                 <p className="text-gray-700 text-base h-20">
                                    Lorem ipsum dolor sit amet, consectetur
                                 </p>
                              </div>
                              <div className="px-6 pt-4 pb-2">
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className={`${styles.flexCenter} cursor-pointer py-16 flex-col`}>
                        <div className={`${styles.flexCenter} flex-col bg-transparent max-w-4xl`}>
                           <Pagination count={3} page={1} shape="circular" color="primary" />
                        </div>
                     </div>
                  </Grid>
               </Grid>
            </div>
         </Layout>
      </>
   )
}

export default Courses