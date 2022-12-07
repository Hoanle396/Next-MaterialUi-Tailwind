import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import { styles } from '../../styles';
const Abouts: NextPage = () => {
   return (
      <Layout showBackground>
         <div
            className={`py-16 ${styles.flexCenter}  flex-col`}
         >
            <div id="feature" className={`px-4 ${styles.flexCenter}`}>
               <div className="container">
                  <div className="flex flex-wrap items-center">
                     <div className="w-full lg:w-1/2">
                        <div className="mb-5 lg:mb-0">
                           <h2 className="mb-12 text-teal-600 font-bold text-9xl" data-wow-delay="0.3s">Learn More About Us</h2>

                           <div className="flex flex-wrap">
                              <div className="w-full sm:w-1/2 lg:w-1/2">
                                 <div className="m-3">
                                    <div className="icon text-4xl">
                                       <i className="lni lni-layers"></i>
                                    </div>
                                    <div className="features-content">
                                       <h4 className="text-teal-500 font-semibold text-lg">Built with TailwindCSS</h4>
                                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full sm:w-1/2 lg:w-1/2">
                                 <div className="m-3">
                                    <div className="icon text-4xl">
                                       <i className="lni lni-gift"></i>
                                    </div>
                                    <div className="features-content">
                                       <h4 className="text-teal-500 font-semibold text-lg">Free to Use</h4>
                                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full sm:w-1/2 lg:w-1/2">
                                 <div className="m-3">
                                    <div className="icon text-4xl">
                                       <i className="lni lni-laptop-phone"></i>
                                    </div>
                                    <div className="features-content">
                                       <h4 className="text-teal-500 font-semibold text-lg">Fully Responsive</h4>
                                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full sm:w-1/2 lg:w-1/2">
                                 <div className="m-3">
                                    <div className="icon text-4xl">
                                       <i className="lni lni-leaf"></i>
                                    </div>
                                    <div className="features-content">
                                       <h4 className="text-teal-500 font-semibold text-lg">Easy to Customize</h4>
                                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempora quidem vel sint.</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="w-full lg:w-1/2">
                        <div className="mx-3 lg:mr-0 lg:ml-3 wow fadeInRight" data-wow-delay="0.3s">
                           <img src="/assets/img/feature/img-1.svg" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <section id="team" className="py-24 text-center">
               <div className="container">
                  <div className="text-center">
                     <h2 className="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">Our Team</h2>
                  </div>
                  <div className="flex flex-wrap justify-center">
                     <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
                        <div className="team-item">
                           <div className="team-img relative">
                              <img className="img-fluid" src="/assets/img/team/img1.jpg" alt="" />
                              <div className="team-overlay">
                                 <ul className="flex justify-center">
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-indigo-500">
                                          <i className="lni lni-facebook-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-blue-400">
                                          <i className="lni lni-twitter-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-red-500">
                                          <i className="lni lni-instagram-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="text-center px-5 py-3">
                              <h3 className="team-name">John Doe</h3>
                              <p>UX UI Designer</p>
                           </div>
                        </div>
                     </div>
                     <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
                        <div className="team-item">
                           <div className="team-img relative">
                              <img className="img-fluid" src="/assets/img/team/img2.jpg" alt="" />
                              <div
                                 className="team-overlay">
                                 <ul className="flex justify-center">
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-indigo-500">
                                          <i className="lni lni-facebook-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-blue-400">
                                          <i className="lni lni-twitter-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-red-500">
                                          <i className="lni lni-instagram-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="text-center px-5 py-3">
                              <h3 className="team-name">Sarah Doe</h3>
                              <p>Front-End Developer</p>
                           </div>
                        </div>
                     </div>
                     <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
                        <div className="team-item">
                           <div className="team-img relative">
                              <img className="img-fluid" src="/assets/img/team/img3.jpg" alt="" />
                              <div className="team-overlay">
                                 <ul className="flex justify-center">
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-indigo-500">
                                          <i className="lni lni-facebook-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-blue-400">
                                          <i className="lni lni-twitter-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                    <li className="mx-1">
                                       <a href="#" className="social-link hover:bg-red-500">
                                          <i className="lni lni-instagram-original" aria-hidden="true"></i>
                                       </a>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className="text-center px-5 py-3">
                              <h3 className="team-name">Rob Hope</h3>
                              <p>Front-end Developer</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <div id="clients" className="py-16 bg-blue-100 w-full">
               <div className="container w-full">
                  <div className="text-center">
                     <h2 className="mb-12 section-heading wow fadeInDown" data-wow-delay="0.3s">As Seen On</h2>
                  </div>
                  <div className="flex flex-wrap justify-center">
                     <div className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="m-3 wow fadeInUp" data-wow-delay="0.3s">
                           <img className="client-logo" src="/assets/img/clients/img1.svg" alt="" />
                        </div>
                     </div>
                     <div className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="m-3 wow fadeInUp" data-wow-delay="0.6s">
                           <img className="client-logo" src="/assets/img/clients/img2.svg" alt="" />
                        </div>
                     </div>
                     <div className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="m-3 wow fadeInUp" data-wow-delay="0.9s">
                           <img className="client-logo" src="/assets/img/clients/img3.svg" alt="" />
                        </div>
                     </div>
                     <div className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="m-3 wow fadeInUp" data-wow-delay="1.2s">
                           <img className="client-logo" src="/assets/img/clients/img4.svg" alt="" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <section id="testimonial" className="py-24">
               <div className="container w-full">
                  <div className="flex justify-center mx-3">
                     <div className="w-full lg:w-7/12">
                        <div id="testimonials" className="testimonials">
                           <div className="item focus:outline-none">
                              <div className="text-center py-10 px-8 md:px-10 rounded border border-gray-900">
                                 <div className="text-center">
                                    <p className="text-gray-600 leading-loose">Holisticly empower leveraged ROI whereas effective web-readiness. Completely enable emerging meta-services with cross-platform web services. Quickly initiate inexpensive total linkage rather than extensible scenarios. Holisticly empower leveraged ROI whereas effective web-readiness. </p>
                                 </div>
                                 <div className="my-3 mx-auto w-24 h-24 shadow-md rounded-full">
                                    <img className="rounded-full p-2 w-full" src="/assets/img/testimonial/img1.jpg" alt="" />
                                 </div>
                                 <div className="mb-2">
                                    <h2 className="font-bold text-lg uppercase text-blue-600 mb-2">Fajar</h2>
                                    <h3 className="font-medium text-white text-sm">Euphoriya</h3>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
            <section className="w-8/12 text-center py-20">
               <div className="container w-full">
                  <div className="flex justify-center mx-3">
                     <div className="w-full md:w-3/4 lg:w-2/3">
                        <h4 className="mb-3 text-teal-600 font-bold text-2xl" data-wow-delay="0.3s">Start For Free</h4>
                        <p className="mb-4 text-gray-600 leading-loose text-lg " data-wow-delay="0.6s">Existing customized ideas through client-based deliverables. <br /> Compellingly unleash fully tested outsourcing</p>
                        <form >
                           <div className="wow fadeInDown" data-wow-delay="0.3s">
                              <input type="Email" className="w-full mb-5 bg-white border border-blue-300 rounded-full px-5 py-3 duration-300 focus:border-blue-600 outline-none" name="email" placeholder="Email Address" />
                              <button className="border-0 bg-blue-600 text-white text-lg rounded-full w-20 h-20 duration-300 hover:opacity-75" type="submit">Send</button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </section>
            <section id="google-map-area" className='w-full'>
               <div className="mx-6 mb-6">
                  <div className="flex">
                     <div className="w-full">
                        <object style={{ border: 0, height: 450, width: "100%" }} data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15342.60758556704!2d108.25318802357172!3d15.979545017555623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142108997dc971f%3A0x1295cb3d313469c9!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiB2w6AgVHJ1eeG7gW4gdGjDtG5nIFZp4buHdCAtIEjDoG4!5e0!3m2!1svi!2s!4v1665465835981!5m2!1svi!2s"></object>
                     </div>
                  </div>
               </div>
            </section>

         </div >
      </Layout >
   )
}

export default Abouts