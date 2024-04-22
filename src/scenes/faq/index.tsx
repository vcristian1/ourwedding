import { motion } from 'framer-motion';
import { SelectedPage } from '../../shared/types';
import faqs from "../../assets/faq.svg"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const FAQ = ({ setSelectedPage }: Props) => {

  return (
    <section id="faqs" className='bg-[#C89F79] mx-auto w-full pt-24 pb-32 gsfold:py-20 overflow-x-hidden'>
        <motion.div
         onViewportEnter={() => setSelectedPage(SelectedPage.Faqs)}
         className='gfold:mx-[25px] gs8:mx-[30px] xs:mx-[30px] sm:mx-[65px] ipp:mx-[90px] sp7:mx-[80px] lg:mx-[120px]'
        >
            {/* HEADER HERE */}
            <motion.div
             className="w-full"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.5 }}
             transition={{ duration: 0.5 }}
             variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
             }}
            >   
            <div className='md:flex'>
                <div>
                    <p className='text-center mbpro:text-left text-2xl md:text-4xl font-bold sm:text-3xl ipp:text-5xl sp7:text-[40px] lg:text-4xl xlg:text-5xl'>FAQS</p>
                    <p className="my-5 sm:text-[18px] sm:mt-6 sm:mb-6 md:text-[18px] ipp:text-[22px] sp7:text-[24px] spduo:mt-6 spduo:mb-6 gs8:mt-6 gfold:mt-6 gfold:mb-6 lg:text-[18px] xlg:text-[20px] mbpro:text-[18px]">
                    We're thrilled to share our special day with you and want to ensure you have all the information you need for a seamless and enjoyable celebration. Find answers to frequently asked questions about our wedding details and more below. 
                    </p>
                </div>
                <div>
                    <img src={faqs} alt="" className='gfold:hidden gs8:hidden xs:hidden lg:h-[100px] lg:w-[800px]'/>
                </div>
            </div>
                
            </motion.div>

            {/* FORM AND IMAGE HERE */}
            <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
                <div>
                    <div className="mb-10">
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Should I book a Hotel?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">
                        Most of our guests will be booking a hotel for Sunday night into Monday, and this includes guests who are local and those who are flying in. For guests who are looking to book a hotel, we reccommend booking your stay at the <a className="underline" href="https://www.ihg.com/holidayinnexpress/hotels/us/en/hoffman-estates/chips/hoteldetail">Holiday Inn Express and Suites in Hoffman Estates</a>, IL.
                        </p>
                    </div>
                    <div className="mb-10">                        
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Is there a cocktail hour after the ceremony?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">There is a cocktail hour which will be in the outdoor area and bar. During this time the Bride and Groom will be taking pictures.</p>
                    </div>
                    <div className="mb-10">                        
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Can I bring a plus one?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">Unfortunately no, please do not arrive with someone who was not included in your evite. There will not be a seat or food available for them.</p>
                    </div>
                    <div className="mb-10">                        
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Do I need to RSVP again?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">Yes! Please RSVP by clicking the following <a href="https://docs.google.com/forms/d/e/1FAIpQLSejFDctQsyCPkj5pedQr-gRDUQ1K3lVEnctsK9mWPJCaesZGA/viewform?usp=sf_link" className='underline'>link</a></p>
                    </div>
                    
                </div>
                <div>
                    <div className="mb-10">
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What time should we arrive for the Ceremony?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">Please be sure to arrive 20 minutes before the start of the Ceremony.</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Will food be served?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">No such thing as a good time without good food! We will be catering Uncle Bub's Barbeque for our guests during the Reception.</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Will drinks be served?
                        </h3>
                        <p className='sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]'>We have an Open Bar for 5 hours during the Reception which includes soft drinks and alcohol. However, please bring cash to tip the bartenders.</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            Where are you registered?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">We have a Wedding Registry with Amazon which you can view by clicking <a className="underline" href="https://www.amazon.com/wedding/share/JackieandCristian_2024" rel='noreferrer' target='_blank'>here!</a></p>
                    </div>
                    <div className="mb-10">
                        <h3 className="flex items-center md:text-[18px] mbpro:text-[20px] mb-4 text-lg  sm:text-[20px] ipp:text-[22px] sp7:text-[24px] font-bold lg:text-[20px]">
                            <svg className="flex-shrink-0 mr-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
                            What time does the reception end?
                        </h3>
                        <p className="sm:text-[18px] sp7:text-[22px] lg:text-[18px] mbpro:text-[18px] md:text-[18px]">We have the venue until Midnight, so be ready to have a good time!</p>
                    </div>
                </div>
            </div>
            
        </motion.div>
    </section>
  )
}

export default FAQ